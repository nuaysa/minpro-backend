import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";

export class PromotorController {
  async getPromotor(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const filter: Prisma.PromotorWhereInput = {};
      if (search) {
        filter.OR = [
          { name: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const countPromotor = await prisma.promotor.aggregate({
        _count: { _all: true },
      });
      const total_page = Math.ceil(+countPromotor._count._all / +limit);
      const promotors = await prisma.promotor.findMany({
        // where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });

      res.status(200).send({ total_page, page, promotors })
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getPromotorId(req: Request, res: Response){
    try {
        const {id} = req.params
    const promotor = await prisma.promotor.findUnique({ where: {id: +id}})
    res.status(200).send({ promotor})

    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    } 
    
  }
  async createPromotor(req: Request, res: Response) {
    try {
        await prisma.promotor.create({ data: req.body});
        res.status(201).send("Promotor account Created")
    } catch (err) {
        console.log(err);
      res.status(400).send(err);
    }
  }
  async editPromotor ( req: Request, res: Response){
    try {

        const { id } = req.params
        await prisma.promotor.update({data: req.body, where: {id: +id}})
        res.status(200).send("promotor account updated")
    } catch (err) {
        console.log(err);
      res.status(400).send(err);
        
    }
  }
  async deletePromotor (req: Request, res: Response){
    try {
        const { id } = req.params
        await prisma.promotor.delete({ where: { id: +id}})
        res.status(200).send("promotor account Deleted");
    } catch (err) {
        console.log(err);
      res.status(400).send(err);
        
    }
  }
}
