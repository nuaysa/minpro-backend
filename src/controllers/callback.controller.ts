import { Request, Response } from "express";
import prisma from "../prisma";


export class CallbackController{
    async updateStatus(req: Request, res: Response) {
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
            if(transaction_status == "settlement"){
               const transaction = await prisma.transaction.findUnique({
                      where: { id: +transactionId },
                      select: { id: true, status: true, userId: true, ticketId: true },
                    });
              
                    const ticket = await prisma.ticket.findFirst({
                      where: { id: transaction?.ticketId },
                      select: { eventId: true },
                    });
              
                    const event = await prisma.event.findFirst({
                      where: { id: ticket?.eventId },
                      select: { id: true },
                    });
                    if (!transaction || transaction.status !== "Paid") {
                        res.status(400).send({ message: "Invalid or unpaid transaction" });
                    }
              
                    if (transaction?.userId !== req.user?.id.toString()) {
                        res.status(403).send({ message: "Unauthorized access to this transaction" });
                    }
              
                    const detail = await prisma.detailTransaction.create({
                      data: {
                        transactionId: transaction?.id!,
                        ticketId: transaction?.ticketId!,
                        eventId: ticket?.eventId!,
                        reviewStatus: false,
                      },
                    });
                    
            }         
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