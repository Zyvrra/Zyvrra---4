import { Post } from "./postsStore";

let cart: Post[] = [];

export function addToCart(post: Post) {
  cart.push(post);
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
}
