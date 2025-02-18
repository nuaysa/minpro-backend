import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { verifikasiToken } from "../middlewares/verify";

export class TransactionRouter {
    private router: Router;
    private transactionController: TransactionController;

    constructor(){
        this.transactionController = new TransactionController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post("/:ticketId", verifikasiToken, this.transactionController.createOrder)
        // this.router.post("/detail/:transactionId", this.transactionController.createDetail)
        // this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.get("/detail", this.transactionController.getDetail)
    }


    getRouter(): Router {
        return this.router;
    }
}