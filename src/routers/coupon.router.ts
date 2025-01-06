import { Router } from "express";
import { CouponController } from "src/controllers/coupon.controller";

export class CallbackRouter {
    private router: Router;
    private couponController: CouponController;

    constructor(){
        this.couponController = new CouponController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.get("/points", this.couponController.getPoints)
        this.router.get("/voucher", this.couponController.getVoucher)
    }

    getRouter(): Router {
        return this.router;
    } 
}