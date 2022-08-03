import PostResolver from "./posts/post.resolver";
import UserResolver from "./user/user.resolver";

export const resolvers = [UserResolver, PostResolver] as const;
