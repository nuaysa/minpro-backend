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
                let { search, category, location, page = 1, limit = 12 } = req.query;
                category = req.query.category || "all";
                const filter = {};
                if (search) {
                    filter.title = { contains: search, mode: "insensitive" };
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
                const countEvents = yield prisma_1.default.user.aggregate({ _count: { _all: true } });
                const totalPage = Math.ceil(countEvents._count._all / +limit);
                const events = yield prisma_1.default.event.findMany({
                    where: filter,
                    include: { ticket: true, Promotor: true },
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
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
    addNewEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "thumbnail empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "thumbnail");
                const { title, description, category, date, time, location, venue, mapURL, type } = req.body;
                const slug = (0, slug_1.createSlug)(title);
                yield prisma_1.default.event.create({
                    data: {
                        title,
                        description,
                        category,
                        date,
                        time,
                        location,
                        venue,
                        mapURL,
                        type,
                        slug: slug,
                        thumbnail: secure_url,
                        promotorId: (_a = req.Promotor) === null || _a === void 0 ? void 0 : _a.id
                    },
                });
                res.status(200).send({ message: "event created !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.EventsController = EventsController;
