import { Request, Response } from "express";
import prisma from "../prisma";
import axios from "axios";

export class TransactionController {
  async createOrder(req: Request, res: Response) {
    try {
      const { id, userVoucher, userPoints, qty, userId } = req.body;
      const { ticketId } = req.params;

      if(!userId){
        return res.status(400).send({message: "User Required"})
      }

      if(qty <= 0 ){
        return res.status(400).send({message: "Quantity must be greater than 0"})
      }

      if(ticketId !== await prisma.ticket.findUnique({where: {id: +ticketId}, select: {id: true}}).then((data) => data?.id.toString())){
        return res.status(400).send({message: "Ticket not found"})
      }
      
      var discount: number = 0;
      const basePrice = await prisma.ticket.findUnique({where: {id: +ticketId}, select: {price: true}}).then((data) => data?.price);
      const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
      const TotalPrice = basePrice! * qty;
      const isDiscount = await prisma.ticket.findUnique({where: {id: +ticketId}, select: {discount: true}}).then((data) => data?.discount);

      function formatId(id: number): string {
        return id.toString().padStart(3, '0');
      }

      if(isDiscount){
        async function promo() {
          let discountPoints = 0;
        let discountVoucher = 0;
        
        if(userPoints){
          if(TotalPrice < userPoints){
          return res.status(400).send({message: "Points can not be used"})
        
        }else{ 

          const discountData = await prisma.userPoints.findUnique({
          where: { userId: userId },
          select: { points: true },
        });
        discountPoints = discountData?.points || 0
        await prisma.userPoints.update({
            where: { 
              userId: userId },
              data: { points: userPoints - discount <= 0 ? 0 : userPoints - discount}
            })
            }
      }
      
      if(userVoucher){
        const voucher = await prisma.referralVoucher.update({ where: { id: userVoucher }, data: { expiresAt : new Date() } })
        discountVoucher = 10/100* (discountPoints? TotalPrice - discountPoints : TotalPrice)
      discount = discountPoints + discountVoucher
    }
    await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } })
  }
  
      await promo()
    }
      
    const FinalPrice = TotalPrice - (discount? discount : 0)

      const order = await prisma.transaction.create({
        data: { id, basePrice : basePrice! , userVoucher, userPoints, discount, qty, totalPrice: TotalPrice, finalPrice: FinalPrice, ticketId: +ticketId, expiresAt: expiredAt, userId},
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

  async createDetail(req: Request, res: Response) {
    try{
      const { id, qty, ticketId } = req.body;
      res.status(200).send({message: "Detail Created"})
    }catch(err){
      console.log(err);
      res.status(400).send(err)
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      if (transaction_status == "settlement") {
        const transaction = await prisma.transaction.update({
          data: { status: "Paid" },
          where: { id: +order_id },
        });

        await prisma.ticket.update({
          where: { id: transaction.ticketId },
          data: { quota: { decrement: transaction.qty } },
        });
      }
      res.status(200).send({ message: "Order updated" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
