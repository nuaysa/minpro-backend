"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackRouter = void 0;
const express_1 = require("express");
const callback_controller_1 = require("../controllers/callback.controller");
// import { CallbackController } from "../controllers/callback.controller";
class CallbackRouter {
    constructor() {
        this.callbackController = new callback_controller_1.CallbackController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.callbackController.updateStatus);
    }
    getRouter() {
        return this.router;
    }
}
exports.CallbackRouter = CallbackRouter;
