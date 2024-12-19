import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../services/cloudinary";

export class TransactionController {
    async createTransaction (req: Request, res: Response){
        try{       
            res.status(200).send({})
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
}   