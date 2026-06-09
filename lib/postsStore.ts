"use server"

export type Post = {
  id: string;
  username: string;
  productName: string;
  price: number;
  caption: string;
  videoUrl: string;
  createdAt: number;
};

// Mock data so the feed isn't empty
let posts: Post[] = [
  {
    id: "1",
    username: "zyvrra_demo",
    productName: "Oversized Hoodie",
    price: 49.99,
    caption: "Streetwear drop 🔥 Tap bag to save",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Big Buck Bunny test video
    createdAt: Date.now() - 1000 * 60 * 60
  },
  {
    id: "2", 
    username: "creator_ada",
    productName: "Cargo Pants",
    price: 79.5,
    caption: "Y2K cargos back in stock",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    createdAt: Date.now() - 1000 * 60 * 30
  }
];

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
