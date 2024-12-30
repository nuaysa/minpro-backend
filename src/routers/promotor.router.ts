import { Router } from "express";
import { PromotorController } from "../controllers/promotor.controller";
import { verifikasiToken, verifyRole } from "../middlewares/verify";

export class PromotorRouter {
    private promotorController: PromotorController;
    private router: Router;

    constructor() {
        this.promotorController = new PromotorController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/", verifikasiToken, this.promotorController.getPromotor);
        this.router.get("/profil", verifikasiToken, this.promotorController.getPromotorId);
        this.router.post("/", this.promotorController.createPromotor);

        this.router.patch("/:id", this.promotorController.editPromotor);
        this.router.delete("/:id", this.promotorController.deletePromotor);
        
    }

    getRouter(): Router {
        return this.router;
    }
}
