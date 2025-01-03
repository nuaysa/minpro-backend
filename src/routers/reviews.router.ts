import { Router } from "express";
import { ReviewControllers } from "../controllers/reviews.controller";

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
        this.router.get('/:id', this.reviewController.getReviewsbyId)
    }

    getRouter() : Router {
        return this.router
    }
}