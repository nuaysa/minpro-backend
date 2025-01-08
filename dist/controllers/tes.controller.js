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
exports.TesControllers = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class TesControllers {
    getTes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // const header = req.headers.Authorization
                const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
                if (!token)
                    throw { message: "Unauthorize!" };
                const verified = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                req.user = verified;
                req.promotor = verified;
                res.status(200).send("oke" + req.promotor.id);
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.TesControllers = TesControllers;
