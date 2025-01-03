import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewControllers {
    async CreateReview(req: Request, res: Response){
        try{
        const { desc, rating, transactionId } = req.body;
        const eventId = +req.params.eventId;
            if(!req.user) throw { message: "user not found" }
            
        await prisma.review.create({
            data: {
                desc ,
                rating ,
                eventId : eventId,
                transactionId ,
                userId : req.user?.id.toString()!
        }})
        res.status(200).send({ message: "review created !", data: { desc, rating, eventId, transactionId } });
        }catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    async getReviewsbyId(req: Request, res: Response){
        try{
            const { id } = req.params;
            const reviews = await prisma.review.findMany({where: {eventId: +id}, include:{user: true, event: true}});
            res.status(200).send({ reviews });
        }catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
}