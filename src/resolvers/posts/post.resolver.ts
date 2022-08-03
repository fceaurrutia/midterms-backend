import { Arg, Query, Resolver } from "type-graphql";
import "reflect-metadata";
import { Post, FilterInputPost } from "../../schemas/posts/post.schema";
import PostService from "../../services/posts/post.service";

@Resolver(Post)
export default class PostResolver {
  constructor(private postService: PostService) {
    this.postService = new PostService();
  }
  @Query(() => [Post])
  GetPosts(@Arg("input") title: FilterInputPost) {
    return this.postService.GetPosts(title);
  }
}
