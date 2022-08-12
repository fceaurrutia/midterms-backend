import {
  InputLogin,
  InputUser,
  InputUserFind,
  InputUserType,
} from 'src/schemas/user/user.schema';
import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';
import { EncryptRSA, ValidateRSA } from '../../utils/crypto';
import { makeToken } from '../../utils/jwt';

const prisma = new PrismaClient();

class UserService {
  async Login(input: InputLogin) {
    if (!input.password) throw new Error(`You haven't filled in a password`);
    prisma.$connect();
    const user = await prisma.user.findFirst({
      where: { email: input.email },
    });

    if (!user) throw new Error('User not found');

    if (!ValidateRSA(user?.password || '', input.password))
      throw new Error('The password is incorrect, try again');

    prisma.$disconnect();
    const token = makeToken({ id: user?.id, email: user?.email });
    return token;
  }
  async GetUsers() {
    prisma.$connect();
    const users = await prisma.user.findMany({
      include: {
        userType: true,
      },
    });

    prisma.$disconnect();
    return users;
  }

  async CreateUser(input: InputUser) {
    prisma.$connect();
    const password = EncryptRSA(input.password);
    const createdUser = await prisma.user.create({
      data: { ...input, password, id: v4() },
      include: {
        userType: true,
      },
    });

    if (!createdUser)
      throw new Error("The user wasn't created nor saved to the database");

    prisma.$disconnect();
    return createdUser;
  }

  async GetUserByID(input: InputUserFind) {
    prisma.$connect();
    const user = await prisma.user.findFirst({
      where: { id: input.id },
      include: {
        userType: true,
      },
    });
    prisma.$disconnect();
    return user;
  }

  async CreateUserType(input: InputUserType) {
    prisma.$connect();
    const userType = await prisma.userType.create({
      data: { ...input, id: v4() },
    });

    prisma.$disconnect();
    return userType;
  }

  async GetUserTypes() {
    prisma.$connect();
    const userTypes = await prisma.userType.findMany({});

    prisma.$disconnect();
    return userTypes;
  }
}

export default UserService;
