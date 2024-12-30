import { Router } from "express";
import { ReviewControllers } from "src/controllers/reviews.controller";

export class ReviewsRouter {
    private reviewController: ReviewControllers
    private router: Router

    constructor() {
        this.reviewController = new ReviewControllers()
        this.router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post('/:eventId', this.reviewController.CreateReview)
        this.router.get('/:eventId', this.reviewController.getReviewsbyId)
    }

    getRouter() : Router {
        return this.router
    }
}