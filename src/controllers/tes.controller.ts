import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { PromotorPayload, UserPayload } from "src/custom";

export class TesControllers{
    async getTes(req: Request, res: Response){
        try{
            // const header = req.headers.Authorization
                const token = req.header("Authorization")?.replace("Bearer ", "");
                
            
                if (!token) throw { message: "Unauthorize!" };
            
                const verified = verify(token, process.env.JWT_KEY!)
                    req.user = verified as UserPayload;
                    req.Promotor = verified as PromotorPayload

            res.status(200).send("oke" + req.Promotor.id)
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
}