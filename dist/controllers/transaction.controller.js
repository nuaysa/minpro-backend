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
exports.TransactionController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const axios_1 = __importDefault(require("axios"));
class TransactionController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id, basePrice, userVoucher, userPoints, discount, qty } = req.body;
                const { ticketId } = req.params;
                const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
                const totalPrice = basePrice * qty;
                const finalPrice = totalPrice - (discount ? (totalPrice * discount) / 100 : 0);
                const order = yield prisma_1.default.transaction.create({
                    data: {
                        userId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id.toString(),
                        expiresAt: expiredAt,
                        basePrice,
                        userVoucher,
                        userPoints,
                        totalPrice: totalPrice,
                        finalPrice: finalPrice,
                        qty,
                        ticketId: +ticketId,
                    },
                });
                if (!req.user) {
                    return res.status(401).send({ message: "Unauthorized" });
                }
                const body = {
                    transaction_details: {
                        order_id: order.id,
                        gross_amount: order.finalPrice,
                    },
                    expiry: {
                        unit: "minutes",
                        duration: 10,
                    },
                };
                const { data } = yield axios_1.default.post("https://app.sandbox.midtrans.com/snap/v1/transactions", body, {
                    headers: {
                        Authorization: "U0ItTWlkLXNlcnZlci1OYW5sNVZZczQ5VF9JX1YyQXpabHBSVkg6",
                    },
                });
                yield prisma_1.default.transaction.update({
                    data: { redirect_url: data.redirect_url },
                    where: { id: order.id },
                });
                res.status(201).send({
                    message: "Order Created",
                    data,
                    order,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    updateStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                if (transaction_status == "settlement") {
                    yield prisma_1.default.transaction.update({
                        data: { status: "Paid" },
                        where: { id: +order_id },
                    });
                }
                res.status(200).send({ message: "Order updated" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.TransactionController = TransactionController;
