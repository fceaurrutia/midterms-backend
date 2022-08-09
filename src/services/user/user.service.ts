import {
  InputLogin,
  InputUser,
  InputUserFind,
  InputUserType,
  User,
} from 'src/schemas/user/user.schema';
import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';
import { EncryptRSA, ValidateRSA } from '../../utils/crypto';

const prisma = new PrismaClient();

const exclude = (userList: User[]) => {
  for (const user of userList) {
    if (user.password) user['password'] = '';
  }
  return userList;
};

class UserService {
  async Login(input: InputLogin) {
    prisma.$connect();
    const user = await prisma.user.findFirst({
      where: { email: input.email },
    });

    if (!ValidateRSA(user?.password || '', input.password))
      throw new Error('The password is incorrect, try again');

    prisma.$disconnect();
    return user;
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
