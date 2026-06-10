\"use client\";

export type Post = {
  id: string;
  username: string;
  displayName?: string;
  productName: string;
  price: number;
  caption: string;
  videoUrl: string;
  category?: string;
  createdAt: number;
  views?: number;
  likes?: number;
  saves?: number;
};

let posts: Post[] = [];

const DEMO_POSTS: Post[] = [
  {
    id: \"demo_1\",
    username: \"@iamkhalo\",
    displayName: \"Khalo Streetwear\",
    productName: \"Oversized Neon Hoodie\",
    price: 449,
    caption: \"Fresh drop 🔥 Limited edition streetwear. All sizes available!\",
    videoUrl: \"https://www.w3schools.com/html/mov_bbb.mp4\",
    category: \"Streetwear\",
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
    views: 1250,
    likes: 234,
    saves: 89,
  },
  {
    id: \"demo_2\",
    username: \"@zenzii_designs\",
    displayName: \"Zenzii Designs\",
    productName: \"Y2K Cargo Pants\",
    price: 599,
    caption: \"That 2000s fit 👖 Maximum comfort, maximum style\",
    videoUrl: \"https://www.w3schools.com/html/movie.mp4\",
    category: \"Streetwear\",
    createdAt: Date.now() - 1000 * 60 * 30,
    views: 856,
    likes: 167,
    saves: 45,
  },
  {
    id: \"demo_3\",
    username: \"@joburg_kicks\",
    displayName: \"Joburg Kicks\",
    productName: \"Custom Air Force Ones\",
    price: 1299,
    caption: \"Hand-painted customs. No two are the same 🎨\",
    videoUrl: \"https://www.w3schools.com/html/mov_bbb.mp4\",
    category: \"Footwear\",
    createdAt: Date.now() - 1000 * 60 * 15,
    views: 2103,
    likes: 412,
    saves: 178,
  },
];

if (typeof window !== \"undefined\") {
  const stored = localStorage.getItem(\"zyvrra_posts\");
  if (stored) {
    try {
      posts = JSON.parse(stored);\n    } catch (e) {
      posts = [...DEMO_POSTS];
    }
  } else {
    posts = [...DEMO_POSTS];
    localStorage.setItem(\"zyvrra_posts\", JSON.stringify(posts));
  }
}

export async function getPosts(): Promise<Post[]> {
  if (typeof window !== \"undefined\") {
    const stored = localStorage.getItem(\"zyvrra_posts\");
    if (stored) {
      try {
        posts = JSON.parse(stored);
      } catch (e) {
        posts = [...DEMO_POSTS];
      }
    }
  }
  return posts.sort((a, b) => b.createdAt - a.createdAt);
}

export async function addPost(post: Post) {
  const newPost = {
    ...post,
    views: 0,
    likes: 0,
    saves: 0,
  };
  posts = [newPost, ...posts];
  if (typeof window !== \"undefined\") {
    localStorage.setItem(\"zyvrra_posts\", JSON.stringify(posts));
  }
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const allPosts = await getPosts();
  return allPosts.find((p) => p.id === id);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getPosts();
  return allPosts.filter((p) => p.category === category);
}
