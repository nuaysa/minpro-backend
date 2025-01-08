import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export class AuthRouter {
    private authController: AuthController;
    private router: Router;

    constructor(){
        this.authController = new AuthController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.post("/registerUser", this.authController.registerUser)
        this.router.post("/registerPromotor", this.authController.registerPromotor)
        this.router.post("/loginUser", this.authController.loginUser)
        this.router.post("/loginPromotor", this.authController.loginPromotor)
        
        this.router.patch("/verify/:token", this.authController.verifyUser)
        this.router.patch("/verify/:token", this.authController.verifyPromotor)
    }

    getRouter(): Router {
        return this.router;
    }
}