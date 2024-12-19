import { Request, Response } from "express";

export class ReviewControllers {
    async CreateReview(req: Request, res: Response){
        const { Eventid , review } = req.body;
    }
}