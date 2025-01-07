"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsRouter = void 0;
const express_1 = require("express");
const reviews_controller_1 = require("../controllers/reviews.controller");
class ReviewsRouter {
    constructor() {
        this.reviewController = new reviews_controller_1.ReviewControllers();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/:eventId', this.reviewController.CreateReview);
        this.router.get('/:id', this.reviewController.getReviewsbyId);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewsRouter = ReviewsRouter;
