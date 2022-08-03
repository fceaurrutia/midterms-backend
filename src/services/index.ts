import PostService from "./posts/post.service";
import UserService from "./user/user.service";

export const services = [UserService, PostService] as const;
