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
const prisma_1 = __importDefault(require("../prisma"));
class ReviewControllers {
    CreateReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { desc, rating, transactionId } = req.body;
                const eventId = +req.params.eventId;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id.toString();
                if (!userId) {
                    res.status(403).send({ message: "Unauthorized access to this transaction" });
                }
                if (!transactionId) {
                    res.status(400).send({ message: "only atendees can leave review" });
                }
                yield prisma_1.default.review.create({
                    data: {
                        desc,
                        rating,
                        eventId: eventId,
                        transactionId,
                        userId: userId,
                    },
                });
                res.status(200).send({ message: "review created !", data: { desc, rating, eventId, transactionId } });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getReviewsbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const reviews = yield prisma_1.default.review.findMany({ where: { eventId: +id }, include: { user: true, event: true } });
                res.status(200).send({ reviews });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.ReviewControllers = ReviewControllers;
