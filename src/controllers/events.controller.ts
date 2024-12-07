import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";

export class EventsController {
    async getEvents(req: Request, res: Response){
        try{
            const events = await prisma.Events.findMany //belum dimigrate
        
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
}