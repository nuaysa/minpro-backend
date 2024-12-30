import { Request, Response } from "express";
import prisma from "src/prisma";

export class ReviewControllers {
    async CreateReview(req: Request, res: Response){
        try{
            const { desc, rating, transactionId } = req.body;
        const Ratings = [1, 2, 3, 4, 5] ;
        const { EventId } = req.params

        await prisma.review.create({
            data: {
                desc ,
                rating : Ratings.includes(rating) ? rating : ({ message: "rating must be 0-5"}),
                eventId : +EventId,
                transactionId ,
                userId : req.user?.id.toString()!
        }})
        res.status(200).send({ message: "review created !" });
        }catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    async getReviewsbyId(req: Request, res: Response){
        try{
            const { id } = req.params;
            const reviews = await prisma.review.findMany({where: {eventId: +id}});
        }catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
}