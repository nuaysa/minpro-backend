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
exports.findUserByCredentials = exports.findUserLogin = exports.findUser = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const findUser = (username, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findFirst({
        where: { OR: [{ username: username }, { email: email }] },
    });
    return user;
});
exports.findUser = findUser;
const findUserLogin = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findFirst({
        where: { OR: [{ username: username }, { email: username }] },
    });
    return user;
});
exports.findUserLogin = findUserLogin;
const findUserByCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findFirst({
        where: { AND: [{ username: username }, { password: password }] },
    });
    return users;
});
exports.findUserByCredentials = findUserByCredentials;
