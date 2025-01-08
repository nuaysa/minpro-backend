import { Router } from "express";
import { CallbackController } from "../controllers/callback.controller";
// import { CallbackController } from "../controllers/callback.controller";

export class CallbackRouter {
    private router: Router;
    private callbackController: CallbackController;

    constructor(){
        this.callbackController = new CallbackController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post("/", this.callbackController.updateStatus)
    }

    getRouter(): Router {
        return this.router;
    }
}
