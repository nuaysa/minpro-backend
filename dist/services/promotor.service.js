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
exports.findPromotorByCredentials = exports.findPromotorLogin = exports.findPromotor = void 0;
exports.findPromotorByReferralCode = findPromotorByReferralCode;
const prisma_1 = __importDefault(require("../prisma"));
const findPromotor = (organizationName, email) => __awaiter(void 0, void 0, void 0, function* () {
    const promotor = yield prisma_1.default.promotor.findFirst({
        where: { OR: [{ name: organizationName }, { email: organizationName }] },
    });
    return promotor;
});
exports.findPromotor = findPromotor;
const findPromotorLogin = (organizationName) => __awaiter(void 0, void 0, void 0, function* () {
    const promotor = yield prisma_1.default.promotor.findFirst({
        where: { OR: [{ name: organizationName }, { email: organizationName }] },
    });
    return promotor;
});
exports.findPromotorLogin = findPromotorLogin;
const findPromotorByCredentials = (organizationName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const promotor = yield prisma_1.default.promotor.findFirst({
        where: { AND: [{ name: organizationName }, { password: password }] },
    });
    return promotor;
});
exports.findPromotorByCredentials = findPromotorByCredentials;
function findPromotorByReferralCode(refCode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    reffered_by: refCode,
                },
            });
            if (!user) {
                throw new Error("User dengan referral code tersebut tidak ditemukan");
            }
            const promotor = yield prisma_1.default.promotor.findUnique({
                where: { id: parseInt(user.id) },
            });
            if (!promotor) {
                throw new Error("Promotor dengan id tersebut tidak ditemukan");
            }
            return promotor;
        }
        catch (err) {
            console.error("Error:", err);
            throw new Error("Gagal mencari promotor berdasarkan referral code");
        }
    });
}
