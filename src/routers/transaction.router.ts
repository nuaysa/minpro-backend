import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { verifikasiToken } from "src/middlewares/verify";

export class TransactionRouter {
    private router: Router;
    private transactionController: TransactionController;

    constructor(){
        this.transactionController = new TransactionController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.post("/detail/:transactionId", this.transactionController.createDetail)
        // this.router.post("/:ticketId", this.transactionController.createOrder)
    }

    getRouter(): Router {
        return this.router;
    }
}