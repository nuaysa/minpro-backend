import { RoleUser } from "../prisma/generated/client";
import 'express'

export type PromotorPayload = {
    id: number;
}
<<<<<<< HEAD

declare global
{namespace Express {
    export interface Request {
=======
export type UserPayload = {
    id: number;
}

declare global
{namespace Express {
    export interface Request { 
        user?: UserPayload;
>>>>>>> 1a415eb6b3617b9f028d48452a640def2839da66
        Promotor?: PromotorPayload;
        }
    }
}