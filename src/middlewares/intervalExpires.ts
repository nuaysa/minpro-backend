import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$use(async (params: any, next: any) => {
  if (params.action === 'create' && params.model === 'User_Point') {
    const data = params.args.data;
    if (!data.expires_at) {
      data.expires_at = new Date(new Date().setMonth(new Date().getMonth() + 3));
    }
  }
  return next(params);
});

export default prisma;
