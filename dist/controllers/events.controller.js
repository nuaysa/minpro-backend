"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../services/cloudinary");
const slug_1 = require("../helpers/slug");
class EventsController {
    getEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { search, category, location, page = 1, limit = 12, isActive } = req.query;
                category = req.query.category || "all";
                const filter = {};
                if (search) {
                    filter.title = { contains: search, mode: "insensitive" };
                }
                if (isActive) {
                    filter.isActive = true;
                }
                if (category !== "all") {
                    filter.category = { equals: category };
                }
                else if (category == "all") {
                    filter.category = {};
                }
                if (location) {
                    filter.location = { equals: location };
                }
                const countEvents = yield prisma_1.default.user.aggregate({
                    _count: { _all: true },
                });
                const totalPage = Math.ceil(countEvents._count._all / +limit);
                const events = yield prisma_1.default.event.findMany({
                    where: filter,
                    include: { ticket: true, Promotor: true },
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                if (new Date().getTime() === new Date(events[0].date).getTime() + 2 * 24 * 60 * 60 * 1000) {
                    yield prisma_1.default.event.updateMany({
                        where: { id: events[0].id },
                        data: { isActive: false },
                    });
                }
                res.status(200).send({ events });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getEventSlug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                const event = yield prisma_1.default.event.findUnique({
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
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getTicketById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const ticket = yield prisma_1.default.ticket.findUnique({
                    where: { id: +id },
                });
                res.status(200).send({ ticket });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    addNewEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "thumbnail empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "thumbnail");
                const { title, description, category, date, time, location, type, venue, maps } = req.body;
                const slug = (0, slug_1.createSlug)(title);
                // const isPromotorExists = await prisma.promotor.findUnique({
                //   where: { id:req.Promotor?.id!},
                // });
                // if (!isPromotorExists) {
                //   throw new Error("Promotor ID does not exist");
                // }
                const data = yield prisma_1.default.event.create({
                    data: {
                        title,
                        description,
                        category,
                        date: new Date(date),
                        time: new Date(time),
                        location,
                        venue,
                        maps,
                        type,
                        slug: slug,
                        thumbnail: secure_url,
                        promotorId: (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id
                    },
                });
                res.status(200).send({ message: "event created !", data: { id: data.id } });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { price, category, discount, quota, startDate, endDate } = req.body;
                const { eventId } = req.params;
                const status = new Date() > new Date(endDate) ? true : false;
                const ticket = yield prisma_1.default.ticket.create({
                    data: {
                        price: +price,
                        discount: discount,
                        quota: quota,
                        startDate: new Date(startDate),
                        endDate: new Date(endDate),
                        category: category,
                        isActive: status,
                        promotorId: (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id,
                        eventId: +eventId
                    },
                });
                res.status(200).send({ message: "ticket created !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.EventsController = EventsController;
