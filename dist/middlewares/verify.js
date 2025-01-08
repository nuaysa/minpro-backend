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
exports.verifyRole = exports.verifikasiToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifikasiToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        console.log(token);
        if (!token)
            throw { message: "Unauthorize!" };
        const verified = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        console.log(verified);
        req.user = verified;
        req.promotor = verified;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
exports.verifikasiToken = verifikasiToken;
const verifyRole = (role) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || user.role !== role) {
            res.status(403).json({ message: "Access denied, insufficient role" });
            return;
        }
        next();
    };
};
exports.verifyRole = verifyRole;
