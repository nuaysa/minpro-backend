import { EventCategory, Location, Prisma } from "../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../services/cloudinary";
import { createSlug } from "../helpers/slug";

export class EventsController {
  async getEvents(req: Request, res: Response) {
    try {
      let { search, category, location, page = 1, limit = 12 } = req.query;
      category = req.query.category || "all";
      const filter: Prisma.EventWhereInput = {};

      if (search) {
        filter.title = { contains: search as string, mode: "insensitive" };
      }

      if (category !== "all") {
        filter.category = { equals: category as EventCategory };
      } else if (category == "all") {
        filter.category = {};}
      if (location) {
        filter.location = { equals: location as Location };
      }

      const countEvents = await prisma.user.aggregate({ _count: { _all: true } });
      const totalPage = Math.ceil(countEvents._count._all / +limit);


      const events = await prisma.event.findMany({
        where: filter,  
        include: { ticket: true, Promotor: true },
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });

      if(new Date().getTime() === new Date(events[0].date).getTime() + 2 * 24 * 60 * 60 * 1000){
        await prisma.event.updateMany({
          where: { id: events[0].id },
          data: { isActive: false },
        });
      }
      
        res.status(200).send({ events });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getEventSlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const event = await prisma.event.findUnique({
        where: { slug },
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          date: true,
          time: true,
          location: true,
          venue: true,
          thumbnail: true,
          type: true,
          slug: true, 
          maps: true,
          Promotor: true,
          ticket: true,
        },
      });
      res.status(200).send({ event });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getTicketById(req: Request, res: Response){
    try {
      const { id } = req.params;
      const ticket = await prisma.ticket.findUnique({
        where: { id: +id },
      });
      res.status(200).send({ ticket });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async addNewEvent(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "thumbnail empty" };
      const { secure_url } = await cloudinaryUpload(req.file, "thumbnail");
      const { title, description, category, date, time, location, type, venue, maps, promotorId } = req.body;
      const slug = createSlug(title);

      const isPromotorExists = await prisma.promotor.findUnique({
        where: { id: +promotorId },
      });

      if (!isPromotorExists) {
        throw new Error("Promotor ID does not exist");
      }

      await prisma.event.create({
        data: {
          title,
          description,
          category,
          date,
          time,
          location,
          venue,
          maps,
          type,
          slug: slug,
          thumbnail: secure_url,
          // promotorId: req.Promotor?.id!
          promotorId: +promotorId,
        },
      });
      res.status(200).send({ message: "event created !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async createTicket(req: Request, res: Response) {
    try {
      const { price, category, discount, quota, startDate, endDate, isActive, Promotor, eventId } = req.body;
      const status = new Date(endDate) > new Date() ? true : false;
      const parsedStartDate = new Date(`${startDate}T00:00:00.000Z`);
      const parsedEndDate = new Date(`${endDate}T23:59:59.000Z`);

      const ticket = await prisma.ticket.create({
        data: {
          price: price,
          discount: discount,
          quota: quota,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
          category: category,
          isActive: status,
          event: {
            connect: {
              id: eventId,
            },
          },
          Promotor: {
            connect: { id: Promotor }, 
          },
        },
      });
} catch(err) {
  console.log(err)
  res.status(400).send(err)
}
  }}
