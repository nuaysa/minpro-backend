import { RoleUser } from "../prisma/generated/client"; // Import RoleUser jika diperlukan

export type PromotorPayload = {
    id: number;
}


export type UserPayload = {
    id: number;
    role: RoleUser; 
};

declare global {
    namespace Express {
        export interface Request {
            user?: UserPayload;
            promotor?: PromotorPayload; 
        }
    }
}
