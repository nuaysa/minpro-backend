"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterValidation = void 0;
const express_validator_1 = require("express-validator");
exports.RegisterValidation = [
    (0, express_validator_1.body)("username").notEmpty().withMessage("username is required"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("invalid format"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({ min: 8 })
        .withMessage("password must be 8 characters at minimum")
        .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    }),
    (0, express_validator_1.body)("confirmPassword")
        .notEmpty()
        .withMessage("confirmPassword is required")
        .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Password not match ");
        }
        return true;
    }),
    (0, express_validator_1.body)("role")
        .notEmpty()
        .withMessage("role is required")
        .isIn(['user', 'promotor'])
        .withMessage("Invalid role selected"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ err: errors.array() });
        }
        next();
    },
];
