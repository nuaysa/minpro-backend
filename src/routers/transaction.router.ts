import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";

export class TransactionRouter {
    private transactionController: TransactionController;
    private router: Router;

    constructor(){
        this.transactionController = new TransactionController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.post("/status", this.transactionController.updateStatus)
    }

    getRouter(): Router {
        return this.router;
    }
}