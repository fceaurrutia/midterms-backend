import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;
}
@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  surname!: string;

  @Field()
  password!: string;

  @Field()
  email!: string;

  @Field()
  userType!: UserType;
}

@InputType()
export class InputUser {
  @Field()
  name!: string;

  @Field()
  surname!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  userType_id!: string;
}

@InputType()
export class InputUserFind {
  @Field()
  id!: string;
}

@InputType()
export class InputUserType {
  @Field()
  name!: string;

  @Field()
  description!: string;
}

@InputType()
export class InputLogin {
  @Field()
  email!: string;

  @Field()
  password!: string;
}
