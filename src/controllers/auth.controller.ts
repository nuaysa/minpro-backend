import { Request, Response } from "express";
import prisma from "../prisma";
import { findUser } from "../services/user.service";
import { genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transportEmail } from "../services/mailer";

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
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "5" });
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

      res.status(201).send("Register Successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const user = await findUser(data, data);

      if (!user) throw { message: "Account not found!" };
      if (user.isVerify) throw { message: "account not verify" };

      const payload = { id: user.id, role: user };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1h" });

      res.status(200).send({ message: "Login Successfully", user, token });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async verifyUser(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verified = verify(token, process.env.JWT_KEY!);

      // await prisma.user.update({
      //   data: { isVerify: true },
      //   where: { id: verified.id },
      // });
      res.status(200).send({ message: "Verify successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
