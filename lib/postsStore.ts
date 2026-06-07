export type Post = {
  id: string;
  username: string;
  productName: string;
  price: number;
  caption: string;
  videoUrl: string; // IMPORTANT: real video file URL (MVP = local blob)
  createdAt: number;
};

let posts: Post[] = [
  {
    id: "1",
    username: "streetplug",
    productName: "Urban Sneaker Drop",
    price: 1200,
    caption: "Fresh local heat 🔥",
    videoUrl: "",
    createdAt: Date.now(),
  },
  {
    id: "2",
    username: "zuluwear",
    productName: "African Street Hoodie",
    price: 850,
    caption: "Built for the culture 🖤",
    videoUrl: "",
    createdAt: Date.now(),
  },
];

export function getPosts(): Post[] {
  return posts;
}

export function addPost(post: Post) {
  posts = [post, ...posts];
}
