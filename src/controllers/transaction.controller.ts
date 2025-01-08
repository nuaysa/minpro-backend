
import { Request, Response } from "express";
import prisma from "../prisma";
import axios from "axios";

export class TransactionController {
  async createOrder(req: Request, res: Response) {
    try {
      const { userVoucher, userPoints, qty } = req.body;
      const { ticketId } = req.params;
      const userId = req.user?.id.toString();

      // if (`userId = ${!userId}`) {
      //   res.status(400).send({ message: "User ID is required" });
      // }

      console.log(userId)
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
            // await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });
          }
          discount += discountPoints
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
        // await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });

        discountVoucher = (10 / 100) * (discountPoints ? TotalPrice - discountPoints : TotalPrice);

        discount = discountPoints + discountVoucher;
        return discount
      }
      if(userVoucher || userPoints){
        promo()
      }
      const FinalPrice = TotalPrice - (discount ? discount : 0);

      const order = await prisma.transaction.create({
        data: { basePrice: basePrice!, userVoucher, userPoints, discount, qty, totalPrice: TotalPrice, finalPrice: FinalPrice, ticketId: +ticketId, expiresAt: expiredAt, userId: userId!},
      });

      const body = {
        transaction_details: {
          order_id: `invoice ${formatId(order.id)}`,
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
