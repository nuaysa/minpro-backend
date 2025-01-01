import { Router } from "express";
import { EventsController } from "../controllers/events.controller";
import { uploader } from "../services/uploader";

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
        this.router.post("/", uploader("memoryStorage","thumbnail-").single("thumbnail"), this.eventController.addNewEvent)
        this.router.post("/ticket", this.eventController.createTicket)
        
        this.router.get("/:slug", this.eventController.getEventSlug);
        this.router.get("/ticket/:id", this.eventController.getTicketById)
    }

    getRouter() : Router {
        return this.router
    }
}