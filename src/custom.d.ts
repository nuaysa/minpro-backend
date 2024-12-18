import { RoleUser } from "../prisma/generated/client";
import 'express'

export type PromotorPayload = {
    id: number;
}

declare global
{namespace Express {
    export interface Request {
        Promotor?: PromotorPayload;
        }
    }
}