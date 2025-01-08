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
exports.PromotorController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class PromotorController {
    getPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 5 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { name: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countPromotor = yield prisma_1.default.promotor.aggregate({
                    _count: { _all: true },
                });
                const total_page = Math.ceil(+countPromotor._count._all / +limit);
                const promotors = yield prisma_1.default.promotor.findMany({
<<<<<<< HEAD
                    where: filter,
=======
                    // where: filter,
>>>>>>> 9fea61b0863a87513be1940f98a7022b1d829e10
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, promotors });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getPromotorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const promotor = yield prisma_1.default.promotor.findUnique({ where: { id: +id } });
                res.status(200).send({ promotor });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.promotor.create({ data: req.body });
                res.status(201).send("Promotor account Created");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    editPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.promotor.update({ data: req.body, where: { id: +id } });
                res.status(200).send("promotor account updated");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    deletePromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.promotor.delete({ where: { id: +id } });
                res.status(200).send("promotor account Deleted");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.PromotorController = PromotorController;
