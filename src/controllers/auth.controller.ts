import { Request, Response } from "express";
import prisma from "../prisma";

export class AuthController {
  async registerUser(req: Request, res: Response) {
    try {
      const { password, confirmPassword, username, email, refCode } = req.body;
      if (password != confirmPassword) throw "Password not match!";
      const user = await prisma.user.create({
        data: { username, email, refCode, password } // referred_by,
      });
      //bikin referral code
      const RefCode = await prisma.user.update({
        where: {id: user.id}, data: {refCode:user.id + user.username.substring(0,3)}
      })

      res.status(201).send("Register Successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const user = await prisma.user.findFirst({
        where: { OR: [{ username: data }, { email: data }] },
      });

      if (!user) throw "Account not found!"
      if (user.password != password) throw "Incorrect Password!"

      res.status(200).send ({message: "Login Successfully", user})
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
