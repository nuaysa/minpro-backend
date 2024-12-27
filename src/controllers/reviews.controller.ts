import { Request, Response } from "express";
import prisma from "src/prisma";

export class ReviewControllers {
    async CreateReview(req: Request, res: Response){
        try{
            const { review, desc, rating, transactionId } = req.body;
        const Ratings = [1, 2, 3, 4, 5] ;
        const { EventId } = req.params
            if(!transactionId){
                return res.status(400).json({message: "You should attend the event to give a review" })
            } 
        await prisma.review.create({
            data: {
                desc ,
                rating ,
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
}