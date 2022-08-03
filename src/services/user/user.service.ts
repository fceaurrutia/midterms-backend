import { InputUser, InputUserFind } from "src/schemas/user/user.schema";
import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

class UserService {
  async GetUsers() {
    prisma.$connect();
    const users = await prisma.user.findMany();

    prisma.$disconnect();
    return users;
  }
  async CreateUser(input: InputUser) {
    prisma.$connect();
    const createdUser = await prisma.user.create({
      data: { ...input, id: uuid() },
    });

    if (!createdUser)
      throw new Error("The user wasn't created nor saved to the database");

    prisma.$disconnect();
    return createdUser;
  }
  async GetUserByID(input: InputUserFind) {
    prisma.$connect();
    const user = await prisma.user.findFirst({ where: { id: input.id } });

    prisma.$disconnect();
    return user;
  }
}

export default UserService;
