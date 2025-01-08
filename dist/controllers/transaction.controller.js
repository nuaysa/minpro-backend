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
                const { userVoucher, userPoints, qty } = req.body;
                const { ticketId } = req.params;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id.toString();
                // if (`userId = ${!userId}`) {
                //   res.status(400).send({ message: "User ID is required" });
                // }
                console.log(userId);
                var discount = 0;
                const expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);
                const ticket = yield prisma_1.default.ticket.findUnique({
                    where: { id: +ticketId },
                    select: { id: true, quota: true, price: true, discount: true, eventId: true },
                });
                const basePrice = ticket === null || ticket === void 0 ? void 0 : ticket.price;
                const TotalPrice = basePrice * qty;
                if (!ticket) {
                    res.status(400).send({ message: "Ticket not found" });
                }
                if (qty > 5) {
                    res.status(400).send({ message: "maximum 5 tickets per transaction" });
                }
                if (qty > (ticket === null || ticket === void 0 ? void 0 : ticket.quota)) {
                    res.status(400).send({ message: "Ticket quota is not enough" });
                }
                if ((ticket === null || ticket === void 0 ? void 0 : ticket.quota) === 0) {
                    res.status(400).send({ message: "Ticket is sold out" });
                }
                const result = yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield tx.user.findUnique({
                        where: { id: userId },
                        include: { userPoints: true },
                    });
                }));
                function formatId(id) {
                    return id.toString().padStart(3, "0");
                }
                function promo() {
                    return __awaiter(this, void 0, void 0, function* () {
                        let discountPoints = 0;
                        let discountVoucher = 0;
                        if (userPoints) {
                            if (TotalPrice < userPoints) {
                                res.status(400).send({ message: "Points can not be used" });
                            }
                            else {
                                const discountData = yield prisma_1.default.userPoints.findUnique({
                                    where: { userId: userId },
                                    select: { points: true },
                                });
                                if (!discountData || discountData.points <= 0) {
                                    res.status(400).send({ message: "User has no points available" });
                                }
                                if ((discountData === null || discountData === void 0 ? void 0 : discountData.points) < userPoints) {
                                    res.status(400).send({ message: "Not enough points available" });
                                }
                                discountPoints = (discountData === null || discountData === void 0 ? void 0 : discountData.points) || 0;
                                yield prisma_1.default.userPoints.update({
                                    where: {
                                        userId: userId,
                                    },
                                    data: { points: userPoints - discount <= 0 ? 0 : userPoints - discount },
                                });
                                // await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });
                            }
                            discount += discountPoints;
                        }
                        if (userVoucher) {
                            const voucherData = yield prisma_1.default.referralVoucher.findUnique({
                                where: { userId: userId },
                                select: { isValid: true },
                            });
                            if (!voucherData || !voucherData.isValid) {
                                res.status(400).send({ message: "Invalid or expired voucher" });
                            }
                            yield prisma_1.default.referralVoucher.update({
                                where: { userId: userId },
                                data: { isValid: false },
                            });
                        }
                        // await prisma.transaction.update({ where: { id: id }, data: { promoQuota: -1 } });
                        discountVoucher = (10 / 100) * (discountPoints ? TotalPrice - discountPoints : TotalPrice);
                        discount = discountPoints + discountVoucher;
                        return discount;
                    });
                }
                if (userVoucher || userPoints) {
                    promo();
                }
                const FinalPrice = TotalPrice - (discount ? discount : 0);
                const order = yield prisma_1.default.transaction.create({
                    data: { basePrice: basePrice, userVoucher, userPoints, discount, qty, totalPrice: TotalPrice, finalPrice: FinalPrice, ticketId: +ticketId, expiresAt: expiredAt, userId: userId },
                });
                const body = {
                    transaction_details: {
                        order_id: `invoice ${formatId(order.id)}`,
                        gross_amount: order.finalPrice,
                    },
                    expiry: {
                        unit: "minutes",
                        duration: 10,
                    },
                };
                const { data } = yield axios_1.default.post("https://app.sandbox.midtrans.com/snap/v1/transactions", body, {
                    headers: {
                        Authorization: "Basic U0ItTWlkLXNlcnZlci1OYW5sNVZZczQ5VF9JX1YyQXpabHBSVkg6",
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
                yield prisma_1.default.ticket.update({
                    where: { id: +ticketId },
                    data: { quota: { decrement: qty } },
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const transactionCheck = yield prisma_1.default.transaction.findMany({
                    where: { userId: (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString() },
                    include: {
                        ticket: true,
                    },
                });
                const detail = yield prisma_1.default.detailTransaction.findMany({
                    where: { transactionId: transactionCheck[0].id },
                    include: {
                        transaction: true,
                        ticket: true,
                        event: true,
                    },
                });
                res.status(200).send({ detail })
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.TransactionController = TransactionController;
