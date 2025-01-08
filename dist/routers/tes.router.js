"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tesRouter = void 0;
const express_1 = require("express");
const tes_controller_1 = require("../controllers/tes.controller");
class tesRouter {
    constructor() {
        this.tesController = new tes_controller_1.TesControllers();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.tesController.getTes);
    }
    getRouter() {
        return this.router;
    }
}
exports.tesRouter = tesRouter;
