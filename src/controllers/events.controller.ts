import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";


export class EventsController {
    async getEvents(req: Request, res: Response){
        try{
            const { search, page = 1, limit = 9 } = req.query;
            const countEvents = await prisma.user.aggregate({_count: {_all:true}})
            const totalPage = Math.ceil(countEvents._count._all / +limit)
            const filter : Prisma.EventWhereInput = {}
            if(search){
                filter.title = {contains: search as string, mode: "insensitive"}
            }

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
            },)

            const result = await prisma.event.findMany({where: filter,
                orderBy: {id: "asc"},
                take: +limit,
                skip: +limit * (+page - 1), 
            })

            console.log(result)
            res.status(200).send({events})
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }

    async getEventSlug (req: Request, res: Response){
        try{
            const { slug } = req.params;
            const event = await prisma.event.findUnique({
                where: { slug },
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
                }
            })
            res.status(200).send({ event })
        }catch(err){
            console.log(err);
            res.status(400).send(err)
        }
    }

    async addNewEvent (req: Request, res: Response) {
        try {
            const { title, description, category, date, time, location, venue, mapURL, slug, thumbnail, type } = req.body;
            const newEvent = await prisma.event.create({ data: { title , description, category, date, time, location, venue, mapURL, slug, thumbnail, type } })
            res.status(200).send("event successfully added !")
        }catch(err){
            console.log(err);
            res.status(400).send(err)
        }
    }
}