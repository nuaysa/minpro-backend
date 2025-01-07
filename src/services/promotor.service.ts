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

export async function findPromotorByReferralCode(refCode: string) {
  try {
      const user = await prisma.user.findFirst({
      where: {
        reffered_by: refCode, 
      },
    });

    if (!user) {
      throw new Error("User dengan referral code tersebut tidak ditemukan");
    }

    const promotor = await prisma.promotor.findUnique({
      where: { id:parseInt (user.id )},
    });

    if (!promotor) {
      throw new Error("Promotor dengan id tersebut tidak ditemukan");
    }

    return promotor;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Gagal mencari promotor berdasarkan referral code");
  }
}
