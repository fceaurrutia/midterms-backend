import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType()
export class Post {
  @Field()
  userId!: number;
  @Field()
  id!: number;
  @Field()
  title!: string;
  @Field()
  body!: string;
}

@InputType()
export class FilterInputPost {
  @Field({ nullable: true })
  title!: string;
}
