import { Post } from "./postsStore";

export type CartItem = Post & {
  creatorId?: string;
  affiliateLinkCode?: string;
};

let cart: CartItem[] = [];

export function addToCart(item: CartItem) {
  cart.push(item);
}

export function getCart(): CartItem[] {
  return cart;
}

export function clearCart() {
  cart = [];
}
