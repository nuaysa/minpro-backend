
import { Prisma } from "../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../prisma";
import axios from "axios";

export class TransactionController {
  async createOrder(req: Request, res: Response) {
    try {
      const { id, basePrice, userVoucher, userPoints, discount, qty } = req.body;
      const { ticketId } = req.params;
      const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000)
     const totalPrice = basePrice * qty
     const finalPrice = totalPrice - ( discount? (totalPrice * discount) / 100 : 0);

      const order = await prisma.transaction.create({
        data: { 
          userId: req.user?.id.toString()!, 
          expiresAt: expiredAt, 
          basePrice,
          userVoucher,
          userPoints,
          totalPrice: totalPrice,
          finalPrice: finalPrice,
          qty,
          ticketId: +ticketId,
        },
      });

      if (!req.user) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      

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

      const { data } = await axios.post(
        "https://app.sandbox.midtrans.com/snap/v1/transactions",
        body,
        {
          headers: {
            Authorization:
              "U0ItTWlkLXNlcnZlci1OYW5sNVZZczQ5VF9JX1YyQXpabHBSVkg6",
          },
        }
      );

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
