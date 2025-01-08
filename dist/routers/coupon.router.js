"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackRouter = void 0;
const express_1 = require("express");
const coupon_controller_1 = require("src/controllers/coupon.controller");
class CallbackRouter {
    constructor() {
        this.couponController = new coupon_controller_1.CouponController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/points", this.couponController.getPoints);
        this.router.get("/voucher", this.couponController.getVoucher);
    }
    getRouter() {
        return this.router;
    }
}
exports.CallbackRouter = CallbackRouter;
