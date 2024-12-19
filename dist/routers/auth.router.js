"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.authController.registerUser);
        // this.router.post("/login", this.authController.loginUser)
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
