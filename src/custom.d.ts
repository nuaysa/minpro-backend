import { RoleUser } from "../prisma/generated/client";
import 'express'

export type PromotorPayload = {
    id: number;
}

export type UserPayload = {
    id: number;
}

declare global
{namespace Express {
    export interface Request { 
        user?: UserPayload;
        Promotor?: PromotorPayload;
        }
    }
}