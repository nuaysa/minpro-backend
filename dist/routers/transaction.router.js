"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRouter = void 0;
const express_1 = require("express");
const transaction_controller_1 = require("../controllers/transaction.controller");
class TransactionRouter {
    constructor() {
        this.transactionController = new transaction_controller_1.TransactionController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
<<<<<<< HEAD
        // this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.post("/status", this.transactionController.updateStatus);
=======
        this.router.post("/:ticketId", this.transactionController.createOrder);
        // this.router.post("/detail/:transactionId", this.transactionController.createDetail)
        // this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.get("/detail", this.transactionController.getDetail);
>>>>>>> 9fea61b0863a87513be1940f98a7022b1d829e10
    }
    getRouter() {
        return this.router;
    }
}
exports.TransactionRouter = TransactionRouter;
