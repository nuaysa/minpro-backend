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
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const user_service_1 = require("../services/user.service");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../services/mailer");
class AuthController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, confirmPassword, username, email, reffered_by } = req.body;
                if (password != confirmPassword)
                    throw { message: "Password not match!" };
                const users = yield (0, user_service_1.findUser)(username, email);
                if (users)
                    throw { message: "username or email has been used" };
                const salt = yield (0, bcrypt_1.genSalt)(8);
                const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
                const newUser = yield prisma_1.default.user.create({
                    data: { username, email, password: hashPassword, reffered_by },
                });
                //bikin referral code
                const RefCode = yield prisma_1.default.user.update({
                    where: { id: newUser.id },
                    data: {
                        refCode: newUser.id.substring(0, 2) + newUser.username.substring(0, 4),
                    },
                });
                const payload = { id: newUser.id, role: newUser };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "5" });
                const link = `${process.env.BASE_URL_FE}/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ username, link });
                yield mailer_1.transportEmail.sendMail({
                    from: "Suciclarissatiara@gmail.com",
                    to: email,
                    subject: "Welcome to ate! ",
                    html,
                });
                res.status(201).send("Register Successfully");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const user = yield (0, user_service_1.findUser)(data, data);
                if (!user)
                    throw { message: "Account not found!" };
                if (user.isVerify)
                    throw { message: "account not verify" };
                const payload = { id: user.id, role: user };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1h" });
                res.status(200).send({ message: "Login Successfully", user, token });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    verifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verified = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                // await prisma.user.update({
                //   data: { isVerify: true },
                //   where: { id: verified.id },
                // });
                res.status(200).send({ message: "Verify successfully" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.AuthController = AuthController;