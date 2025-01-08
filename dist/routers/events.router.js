"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRouter = void 0;
const express_1 = require("express");
const events_controller_1 = require("../controllers/events.controller");
const uploader_1 = require("../services/uploader");
const verify_1 = require("../middlewares/verify");
class EventsRouter {
    constructor() {
        this.eventController = new events_controller_1.EventsController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.eventController.getEvents);
        this.router.post("/", verify_1.verifikasiToken, (0, uploader_1.uploader)("memoryStorage", "thumbnail-").single("thumbnail"), this.eventController.addNewEvent);
        this.router.post("/ticket/:eventId", verify_1.verifikasiToken, this.eventController.createTicket);
        this.router.get("/:slug", this.eventController.getEventSlug);
        this.router.get("/ticket/:id", this.eventController.getTicketById);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventsRouter = EventsRouter;
