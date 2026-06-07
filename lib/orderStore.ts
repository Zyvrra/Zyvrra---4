import { kv } from "@vercel/kv";
import { Order } from "./orders";

const ORDERS_KEY = "zyvrra_orders";

export async function getOrders(): Promise<Order[]> {
  const orders = await kv.get<Order[]>(ORDERS_KEY);
  return orders || [];
}

export async function addOrder(order: Order) {
  const orders = (await kv.get<Order[]>(ORDERS_KEY)) || [];
  await kv.set(ORDERS_KEY, [order, ...orders]);
}

export async function updateOrder(updated: Order) {
  const orders = (await kv.get<Order[]>(ORDERS_KEY)) || [];

  const updatedList = orders.map((o) =>
    o.id === updated.id ? updated : o
  );

  await kv.set(ORDERS_KEY, updatedList);
}
