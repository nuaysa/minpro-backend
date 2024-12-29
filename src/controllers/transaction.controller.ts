
import { Request, Response } from "express";
import prisma from "../prisma";
import axios from "axios";

export class TransactionController {
  async createOrder(req: Request, res: Response) {
    try {
      const { id, basePrice, userVoucher, userPoints, qty, userId } = req.body;
      const { ticketId } = req.params;
      var discount: number = 0;
      const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
      const TotalPrice = basePrice * qty;
      
      function formatId(id: number): string {
        return id.toString().padStart(3, '0');
      }

      async function promo() {
        if(userPoints){
          if(TotalPrice < userPoints){
          return res.status(400).send({message: "Points can not be used"})
        
        }else{ 

          const discountData = await prisma.userPoints.findUnique({
          where: { userId: userId },
          select: { points: true },
        });
        discount = discountData?.points || 0
        await prisma.userPoints.update({
            where: { 
              userId: userId },
              data: { points: userPoints - discount <= 0 ? 0 : userPoints - discount}
            })
        }
      }
        
        if(userVoucher){
          const voucher = await prisma.referralVoucher.update({ where: { id: userVoucher }, data: { expiresAt : new Date() } })
          discount = 10/100* TotalPrice
        }
      }
      
      await promo()
      
    const FinalPrice = TotalPrice - (discount ? discount : 0);

      const order = await prisma.transaction.create({
        data: { id, basePrice, userVoucher, userPoints, discount, qty, totalPrice: TotalPrice, finalPrice: FinalPrice, ticketId: +ticketId, expiresAt: expiredAt, userId},
      });
      // userId: req.user?.id.toString()!
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

      const { data } = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions",
        body, {
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      if (transaction_status == "settlement") {
        await prisma.transaction.update({
          data: { status: "Paid" },
          where: { id: +order_id },
        });
      }
      res.status(200).send({ message: "Order updated" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
