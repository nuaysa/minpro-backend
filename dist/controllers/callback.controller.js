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
exports.CallbackController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CallbackController {
    updateStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { transaction_status, order_id } = req.body;
                const transactionId = parseInt(order_id.replace("invoice ", ""));
                const orderStatus = transaction_status === "settlement"
                    ? "Paid"
                    : transaction_status === "pending"
                        ? "pending"
                        : "canceled";
                {
                    const transaction = yield prisma_1.default.transaction.update({
                        where: { id: transactionId },
                        data: { status: orderStatus },
                    });
                    if (transaction_status == "settlement") {
                        const transaction = yield prisma_1.default.transaction.findUnique({
                            where: { id: +transactionId },
                            select: { id: true, status: true, userId: true, ticketId: true },
                        });
                        const ticket = yield prisma_1.default.ticket.findFirst({
                            where: { id: transaction === null || transaction === void 0 ? void 0 : transaction.ticketId },
                            select: { eventId: true },
                        });
                        const event = yield prisma_1.default.event.findFirst({
                            where: { id: ticket === null || ticket === void 0 ? void 0 : ticket.eventId },
                            select: { id: true },
                        });
                        if (!transaction || transaction.status !== "Paid") {
                            res.status(400).send({ message: "Invalid or unpaid transaction" });
                        }
                        if ((transaction === null || transaction === void 0 ? void 0 : transaction.userId) !== ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id.toString())) {
                            res.status(403).send({ message: "Unauthorized access to this transaction" });
                        }
                        const detail = yield prisma_1.default.detailTransaction.create({
                            data: {
                                transactionId: transaction === null || transaction === void 0 ? void 0 : transaction.id,
                                ticketId: transaction === null || transaction === void 0 ? void 0 : transaction.ticketId,
                                eventId: ticket === null || ticket === void 0 ? void 0 : ticket.eventId,
                                reviewStatus: false,
                            },
                        });
                    }
                    console.log(transaction);
                    if (transaction_status == "expire") {
                        yield prisma_1.default.ticket.update({
                            where: { id: transaction.ticketId },
                            data: { quota: { increment: transaction.qty } },
                        });
                    }
                }
                res.status(200).send({ message: "Order updated", transaction_status });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.CallbackController = CallbackController;
