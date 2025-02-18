import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifikasiToken } from "../middlewares/verify";
import { uploader } from "src/services/uploader";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifikasiToken, this.userController.getUsers);
    this.router.get("/profil", verifikasiToken, this.userController.getUserId);
    this.router.post("/", this.userController.createUser);

    // this.router.patch(
    //   "/avatar",
    //   verifikasiToken,
    //   uploader("memoryStorage", "avatar-", "/avatar").single("file"),
    //   this.userController.editAvatar
    // );
    this.router.patch("/:id", this.userController.editUser);
    this.router.delete("/:id", this.userController.deleteUser);
  }
  getRouter(): Router {
    return this.router;
  }
}
