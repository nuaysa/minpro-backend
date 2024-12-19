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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/generated/client");
const prisma = new client_1.PrismaClient();
prisma.$use((params, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (params.action === 'create' && params.model === 'User_Point') {
        const data = params.args.data;
        if (!data.expires_at) {
            data.expires_at = new Date(new Date().setMonth(new Date().getMonth() + 3));
        }
    }
    return next(params);
}));
exports.default = prisma;
