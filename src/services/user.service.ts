import prisma from "../prisma";

export const findUser = async (username: string, email: string) => {
  const user = await prisma.user.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });
  return user;
};
export const findUserLogin = async (username: string) => {
  const user = await prisma.user.findFirst({
    where: { OR: [{ username: username }, { email: username }] },
  });
  return user;
};
export const findUserByCredentials = async (
  username: string,
  password: string
) => {
  const users = await prisma.user.findFirst({
    where: { AND: [{ username: username }, { password: password }] },
  });
  return users;
};
