import { Router } from "express"
;import { TesControllers } from "../controllers/tes.controller";

export class tesRouter{
    private tesController: TesControllers
    private router: Router

    constructor() {
        this.tesController = new TesControllers()
        this.router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.tesController.getTes)
    }

    getRouter() : Router {
        return this.router
    }
}