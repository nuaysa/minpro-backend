import prisma from "../prisma";

export const findPromotor = async (organizationName: string, email: string) => {
  const promotor = await prisma.promotor.findFirst({
    where: { OR: [{ name: organizationName }, { email: organizationName }] },
  });
  return promotor;
};
export const findPromotorLogin = async (organizationName: string) => {
  const promotor = await prisma.promotor.findFirst({
    where: { OR: [{ name: organizationName }, { email: organizationName }] },
  });
  return promotor;
};
export const findPromotorByCredentials = async (
  organisationName: string,
  password: string
) => {
  const promotor = await prisma.promotor.findFirst({
    where: { AND: [{ name: organisationName }, { password: password }] },
  });
  return promotor;
};
