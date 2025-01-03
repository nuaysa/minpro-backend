import { Request, Response } from "express";
import prisma from "../prisma";


export class CallbackController{
    async updateStatus(req: Request, res: Response) {
        console.log("test")
        try {
          const { transaction_status, order_id } = req.body;
          const transactionId = parseInt(order_id.replace("invoice ", ""));
          const orderStatus =
          transaction_status === "settlement"
            ? "Paid"
            : transaction_status === "pending"
            ? "pending"
            : "canceled";
            {
            const transaction = await prisma.transaction.update({
              where: { id: transactionId },
              data: { status: orderStatus },
            })            
              console.log(transaction)
          if (transaction_status == "expire") {
            await prisma.ticket.update({
              where: { id: transaction.ticketId },
              data: { quota: { increment: transaction.qty } },
            });
          }
        }
          res.status(200).send({ message: "Order updated", transaction_status });
        } catch (err) {
          console.log(err);
          res.status(400).send(err);
        }
      }
}