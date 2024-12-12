import { Router } from "express";
import { EventsController } from "../controllers/events.controller";

export class EventsRouter {
    private eventController: EventsController
    private router: Router

    constructor() {
        this.eventController = new EventsController()
        this.router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get("/", this.eventController.getEvents)
        this.router.post("/", this.eventController.addNewEvent)

        this.router.get("/:slug", this.eventController.getEventSlug);
    }

    getRouter() : Router {
        return this.router
    }
}