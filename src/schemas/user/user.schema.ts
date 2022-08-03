import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  id!: string;
  @Field()
  name!: string;
  @Field()
  email!: string;
}

@InputType()
export class InputUser {
  @Field()
  name!: string;
  @Field()
  email!: string;
}

@InputType()
export class InputUserFind {
  @Field()
  id!: string;
}
