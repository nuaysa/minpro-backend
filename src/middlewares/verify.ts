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
    console.log(token);

    if (!token) throw { message: "Unauthorize!" };

    const verified = verify(token, "shhhhh");
    console.log(verified);
    
    req.user = verified as UserPayload;

    next();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export const verifyRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user as UserPayload;

    if (!user || user.role !== role) {
      res.status(403).json({ message: "Access denied, insufficient role" });
      return;
    }

    next();
  };
};
