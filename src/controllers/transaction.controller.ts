import { Request, Response } from "express";
import prisma from "../prisma";
import axios from "axios";
// import Midtrans from "midtrans-client"

// let snap = new Midtrans.Snap({
//   isProduction: false,
//   serverKey: process.env.SERVER,
//   clientKey: process.env.NEXT_PUBLIC_CLIENT,
// })

export class TransactionController {
  async createOrder(req: Request, res: Response) {
    try {
      const { id, userVoucher, userPoints, qty } = req.body;
      const { ticketId } = req.params;
      const userId = "9269bda0-b0ef-40ac-aea2-21a6dd5462c8"
      // const userId = req.user?.id?.toString();
      // if (!userId) {
      //   res.status(400).send({ message: "User ID is required" });
      // }

      var discount: number = 0;
      const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);

      const ticket = await prisma.ticket.findUnique({
        where: { id: +ticketId },
        select: { id: true, quota: true, price: true, discount: true, eventId: true },
      });

      const basePrice = ticket?.price!;
      const TotalPrice = basePrice! * qty;

      if (!ticket) {
        res.status(400).send({ message: "Ticket not found" });
      }

      if (qty > 5) {
        res.status(400).send({ message: "maximum 5 tickets per transaction" });
      }

      if (qty > ticket?.quota!) {
        res.status(400).send({ message: "Ticket quota is not enough" });
      }

      if (ticket?.quota === 0) {
        res.status(400).send({ message: "Ticket is sold out" });
      }

      const result = await prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { id: userId },
          include: { userPoints: true },
        });
      });

      function formatId(id: number): string {
        return id.toString().padStart(3, "0");
      }

      async function promo() {
        let discountPoints = 0;
        let discountVoucher = 0;

        if (userPoints) {
          if (TotalPrice < userPoints) {
            res.status(400).send({ message: "Points can not be used" });
          } else {
            const discountData = await prisma.userPoints.findUnique({
              where: { userId: userId },
              select: { points: true },
            });

            if (!discountData || discountData.points <= 0) {
              res.status(400).send({ message: "User has no points available" });
            }

            if (discountData?.points! < userPoints) {
              res.status(400).send({ message: "Not enough points available" });
            }

            discountPoints = discountData?.points || 0;
            await prisma.userPoints.update({
              where: {
                userId: userId,
              },
              data: { points: userPoints - discount <= 0 ? 0 : userPoints - discount },
            });
            await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });
          }
        }

        if (userVoucher) {
          const voucherData = await prisma.referralVoucher.findUnique({
            where: { userId: userId },
            select: { isValid: true },
          });

          if (!voucherData || !voucherData.isValid) {
            res.status(400).send({ message: "Invalid or expired voucher" });
          }

          await prisma.referralVoucher.update({
            where: { userId: userId },
            data: { isValid: false },
          });
        }
        await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });

        discountVoucher = (10 / 100) * (discountPoints ? TotalPrice - discountPoints : TotalPrice);

        discount = discountPoints + discountVoucher;
        return res.status(200).send({ message: "Discount applied successfully" });
      }

      const FinalPrice = TotalPrice - (discount ? discount : 0);

      const order = await prisma.transaction.create({
        data: { id, basePrice: basePrice!, userVoucher, userPoints, discount, qty, totalPrice: TotalPrice, finalPrice: FinalPrice, ticketId: +ticketId, expiresAt: expiredAt, userId: userId?.toString()!},
      });

      const body = {
        transaction_details: {
          order_id: order.id,
          gross_amount: order.finalPrice,
        },
        expiry: {
          unit: "minutes",
          duration: 10,
        },
      };

      const { data } = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", body, {
        headers: {
          Authorization: "Basic U0ItTWlkLXNlcnZlci1OYW5sNVZZczQ5VF9JX1YyQXpabHBSVkg6",
        },
      });

      await prisma.transaction.update({
        data: { redirect_url: data.redirect_url },
        where: { id: order.id },
      });

      res.status(201).send({
        message: "Order Created",
        data,
        order,
      });

      await prisma.ticket.update({
        where: { id: +ticketId },
        data: { quota: { decrement: qty } },
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  // async createDetail(req: Request, res: Response) {
  //   try {
  //     const { transactionId } = req.params;

  //     const transaction = await prisma.transaction.findUnique({
  //       where: { id: +transactionId },
  //       select: { id: true, status: true, userId: true, ticketId: true },
  //     });

  //     const ticket = await prisma.ticket.findFirst({
  //       where: { id: transaction?.ticketId },
  //       select: { eventId: true },
  //     });

  //     const event = await prisma.event.findFirst({
  //       where: { id: ticket?.eventId },
  //       select: { id: true },
  //     });
  //     if (!transaction || transaction.status !== "Paid") {
  //         res.status(400).send({ message: "Invalid or unpaid transaction" });
  //     }

  //     if (transaction?.userId !== req.user?.id.toString()) {
  //         res.status(403).send({ message: "Unauthorized access to this transaction" });
  //     }

  //     const detail = await prisma.detailTransaction.create({
  //       data: {
  //         transactionId: transaction?.id!,
  //         ticketId: transaction?.ticketId!,
  //         eventId: ticket?.eventId!,
  //         reviewStatus: false,
  //       },
  //     });

  //     res.status(200).send({ detail });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send({ message: "An error occurred", error: err });
  //   }
  // }

async getDetail(req: Request, res: Response){
  try{
    const transactionCheck = await prisma.transaction.findMany({
      where: { userId: req.user?.id?.toString() },
      include: {
        ticket: true,
      },
    })
    const detail = await prisma.detailTransaction.findMany({
      where: { transactionId: transactionCheck[0].id },
      include: {
        transaction: true,
        ticket: true,
        event: true,
      },
    })
    res.status(200).send({ detail })
}catch(err){
  console.log(err)
  res.status(400).send(err)
}
}
}
