import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";


export class EventsController {
    async getEvents(req: Request, res: Response){
        try{
            const events = await prisma.event.findMany({
                select: {
                    id:true,
                    title: true,
                    description: true,
                    category: true,
                    date: true,
                    time: true,
                    location: true,
                    venue:true,
                    thumbnail: true,
                    type: true,
                    slug: true,
                        Promotor: {
                            select: {
                                name: true,
                                email: true,
                                avatar: true
                            }
                        }
                }
            })
            res.status(200).send(events)
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
}