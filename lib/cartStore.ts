\"use client\";

import { Post } from \"./postsStore\";

export type CartItem = Post & {
  creatorId?: string;
  affiliateLinkCode?: string;
  quantity?: number;
};

let cart: CartItem[] = [];

if (typeof window !== \"undefined\") {\n  const stored = localStorage.getItem(\"zyvrra_cart\");\n  if (stored) {\n    try {\n      cart = JSON.parse(stored);\n    } catch (e) {\n      cart = [];\n    }\n  }\n}\n\nexport function addToCart(item: CartItem) {\n  const existing = cart.find((c) => c.id === item.id);\n  if (existing) {\n    existing.quantity = (existing.quantity || 1) + 1;\n  } else {\n    cart.push({ ...item, quantity: 1 });\n  }\n  if (typeof window !== \"undefined\") {\n    localStorage.setItem(\"zyvrra_cart\", JSON.stringify(cart));\n  }\n}\n\nexport function removeFromCart(itemId: string) {\n  cart = cart.filter((item) => item.id !== itemId);\n  if (typeof window !== \"undefined\") {\n    localStorage.setItem(\"zyvrra_cart\", JSON.stringify(cart));\n  }\n}\n\nexport function updateQuantity(itemId: string, quantity: number) {\n  const item = cart.find((c) => c.id === itemId);\n  if (item) {\n    item.quantity = quantity;\n    if (item.quantity <= 0) {\n      removeFromCart(itemId);\n    } else {\n      if (typeof window !== \"undefined\") {\n        localStorage.setItem(\"zyvrra_cart\", JSON.stringify(cart));\n      }\n    }\n  }\n}\n\nexport function getCart(): CartItem[] {\n  if (typeof window !== \"undefined\") {\n    const stored = localStorage.getItem(\"zyvrra_cart\");\n    if (stored) {\n      try {\n        cart = JSON.parse(stored);\n      } catch (e) {\n        cart = [];\n      }\n    }\n  }\n  return [...cart];\n}\n\nexport function clearCart() {\n  cart = [];\n  if (typeof window !== \"undefined\") {\n    localStorage.removeItem(\"zyvrra_cart\");\n  }\n}\n\nexport function getCartTotal(): number {\n  return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);\n}\n\nexport function getCartCount(): number {\n  return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);\n}
