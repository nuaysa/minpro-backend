import { Request, Response } from "express";
import prisma from "../prisma";

export class CouponController {
  async getVoucher(req: Request, res: Response) {
    try {
        const userId = req.user?.id.toString()!;
        const voucher = await prisma.referralVoucher.findUnique({ where: { userId: userId } });
        res.status(200).send({ voucher });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getPoints(req: Request, res: Response) {
    try{
        const userId = req.user?.id.toString()!;
        const points = await prisma.userPoints.findUnique({ where: { userId: userId } });
        res.status(200).send({ points });
    }catch(err){
        console.log(err);
        res.status(400).send(err)
    }
  }
}
