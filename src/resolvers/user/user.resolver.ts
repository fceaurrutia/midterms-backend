import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import {
  User,
  InputUser,
  InputUserFind,
  UserType,
  InputUserType,
  InputLogin,
} from '../../schemas/user/user.schema';
import UserService from '../../services/user/user.service';

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
  GetUserByID(@Arg('id') userId: InputUserFind) {
    return this.userService.GetUserByID(userId);
  }

  @Mutation(() => User)
  CreateUser(@Arg('newUserData') newUserData: InputUser) {
    return this.userService.CreateUser(newUserData);
  }

  @Mutation(() => UserType)
  CreateUserType(@Arg('newUserTypeData') newUserTypeData: InputUserType) {
    return this.userService.CreateUserType(newUserTypeData);
  }

  @Query(() => [UserType], { nullable: true })
  GetUserTypes() {
    return this.userService.GetUserTypes();
  }

  @Query(() => User)
  Login(@Arg('loginInfo') loginInfo: InputLogin) {
    return this.userService.Login(loginInfo);
  }
}
