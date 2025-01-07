"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllers = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
class ReviewControllers {
    CreateReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { review, desc, rating, transactionId } = req.body;
                const Ratings = [1, 2, 3, 4, 5];
                const { EventId } = req.params;
                if (!transactionId) {
                    return res.status(400).json({ message: "You should attend the event to give a review" });
                }
                yield prisma_1.default.review.create({
                    data: {
                        desc,
                        rating,
                        eventId: +EventId,
                        transactionId,
                        userId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id.toString()
                    }
                });
                res.status(200).send({ message: "review created !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.ReviewControllers = ReviewControllers;
