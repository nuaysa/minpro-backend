import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";

export const verifikasiToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw { message: "Unauthorize!" };

    const verified = verify(token, process.env.JWT_KEY!);
    req.user = verified as UserPayload;

    next();
  } catch (err) {
    console.log(err); 
    res.status(400).send(err);
  }
};
