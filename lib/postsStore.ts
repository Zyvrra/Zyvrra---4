export type Post = {
  id: string;
  username: string;
  productName: string;
  price: number;
  caption: string;
  videoUrl: string;
  createdAt: number;
};

let posts: Post[] = [];

/**
 * Get all posts
 */
export async function getPosts(): Promise<Post[]> {
  return posts;
}

/**
 * Add new post
 */
export async function addPost(post: Post) {
  posts = [post, ...posts];
}
