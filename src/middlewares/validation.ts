import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const RegisterValidation = [
  body("username").notEmpty().withMessage("username is required"),
  
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid format"),
    
  body("password")
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
  
  body("confirmPassword")
    .notEmpty()
    .withMessage("confirmPassword is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password not match ");
      }
      return true;
    }),
  body("role")
    .notEmpty()
    .withMessage("role is required")
    .isIn(['user', 'promotor'])
    .withMessage("Invalid role selected"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ err: errors.array() });
    }
    next();
  },
];