import { kv } from "@vercel/kv";

export type Post = {
  id: string;
  username: string;
  productName: string;
  price: number;
  caption: string;
  videoUrl: string;
  createdAt: number;
};

const POSTS_KEY = "zyvrra_posts";

/**
 * Get all posts (safe for Vercel)
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await kv.get<Post[]>(POSTS_KEY);
  return posts || [];
}

/**
 * Add new post
 */
export async function addPost(post: Post) {
  const posts = (await kv.get<Post[]>(POSTS_KEY)) || [];
  await kv.set(POSTS_KEY, [post, ...posts]);
}
