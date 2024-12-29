import { Request, Response } from "express";
import prisma from "../prisma";
import {
  findUser,
  findUserByCredentials,
  findUserLogin,
} from "../services/user.service";
import { compare, genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transportEmail } from "../services/mailer";
import { findPromotor, findPromotorLogin } from "../services/promotor.service";

export class AuthController {
  async registerUser(req: Request, res: Response) {
    try {
      const { password, confirmPassword, username, email, reffered_by } =
        req.body;
      if (password != confirmPassword) throw { message: "Password not match!" };

      const users = await findUser(username, email);
      if (users) throw { message: "username or email has been used" };

      const salt = await genSalt(8);
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: { username, email, password: hashPassword, reffered_by },
      });

      //bikin referral code
      const RefCode = await prisma.user.update({
        where: { id: newUser.id },
        data: {
          refCode:
            newUser.id.substring(0, 2) + newUser.username.substring(0, 4),
        },
      });

      const payload = { id: newUser.id, role: newUser };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "7d" });
      const link = `${process.env.BASE_URL_FE}/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ username, link });

      await transportEmail.sendMail({
        from: "Suciclarissatiara@gmail.com",
        to: email,
        subject: "Welcome to ate! ",
        html,
      });

      res.status(201).send({ message: "Register Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const user = await findUserLogin(username);

      const isPasswordValid = await compare(password, user?.password ?? ""); // ?? untuk kasih default value
      if (!isPasswordValid) throw { message: "Username atau password salah" };
      if (!user) throw { message: "Account not found!" };
      // if (user.isVerify) throw { message: "account not verify" };

      const payload = { id: user.id, role: user };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "7d" });

      res.status(200).send({ token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async verifyUser(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verified: any = verify(token, process.env.JWT_KEY!);

      await prisma.user.update({
        data: { isVerify: true },
        where: { id: verified.id },
      });
      res.status(200).send({ message: "Verify successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async registerPromotor(req: Request, res: Response) {
    try {
      const { password, confirmPassword, organisationName, email } = req.body;
      if (password != confirmPassword) throw { message: "Password not match!" };

      const promotors = await findPromotor(organisationName, email);
      if (promotors) throw { message: "organization or email has been used" };

      const salt = await genSalt(8);
      const hashPassword = await hash(password, salt);

      const newPromotor = await prisma.promotor.create({
        data: { name: organisationName, email, password: hashPassword },
      });

      const payload = { id: newPromotor.id, role: newPromotor };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "7d" });
      const link = `${process.env.BASE_URL_FE}/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ organisationName, link });

      await transportEmail.sendMail({
        from: "suciclarissatiara@gmail.com",
        to: email,
        subject: "welcome to ate!",
        html,
      });
      res.status(201).send({ message: "Register Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginPromotor(req: Request, res: Response) {
    try {
      const { name, password } = req.body;
      const promotor = await findPromotorLogin(name);

      const isPasswordValid = await compare(password, promotor?.password ?? "");
      console.log({ isPasswordValid });

      if (!isPasswordValid) throw { message: "username atau password salah" };
      if (!promotor) throw { message: "account not found!" };

      const payload = { id: promotor.id, role: promotor };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "7d" });

      res.status(200).send({ token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async verifyPromotor(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verified: any = verify(token, process.env.JWT_KEY!);

      await prisma.promotor.update({
        data: { isVerify: true },
        where: { id: verified.id },
      });
      res.status(200).send({ message: "verify sucessfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
