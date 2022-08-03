import { Post, FilterInputPost } from "../../schemas/posts/post.schema";
import axios from "axios";

class PostService {
  async GetPosts(input: FilterInputPost) {
    const posts = await axios.get(
      "https://www.scalablepath.com/api/test/test-posts"
    );
    let result;
    if (input.title) {
      result = (posts.data as Post[]).filter((x) =>
        x.title.toLowerCase().includes(input.title)
      );
    } else {
      result = posts.data;
    }

    return result;
  }
}

export default PostService;
