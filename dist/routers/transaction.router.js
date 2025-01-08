"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRouter = void 0;
const express_1 = require("express");
const transaction_controller_1 = require("../controllers/transaction.controller");
const verify_1 = require("../middlewares/verify");
class TransactionRouter {
    constructor() {
        this.transactionController = new transaction_controller_1.TransactionController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/:ticketId", verify_1.verifikasiToken, this.transactionController.createOrder);
        // this.router.post("/detail/:transactionId", this.transactionController.createDetail)
        // this.router.post("/:ticketId", this.transactionController.createOrder)
        this.router.get("/detail", this.transactionController.getDetail);
    }
    getRouter() {
        return this.router;
    }
}
exports.TransactionRouter = TransactionRouter;
