import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import "reflect-metadata";
import { User, InputUser, InputUserFind } from "../../schemas/user/user.schema";
import UserService from "../../services/user/user.service";

@Resolver(User)
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => [User], { nullable: true })
  GetUsers() {
    return this.userService.GetUsers();
  }
  @Query(() => User)
  GetUserByID(@Arg("id") userId: InputUserFind) {
    return this.userService.GetUserByID(userId);
  }
  @Mutation(() => User)
  CreateUser(@Arg("newUserData") newUserData: InputUser) {
    return this.userService.CreateUser(newUserData);
  }
}
