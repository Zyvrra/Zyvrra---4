import { Order } from "./orders";

let orders: Order[] = [];

export function addOrder(order: Order) {
  orders.push(order);
}

export function getOrders() {
  return orders;
}

export function updateOrder(updated: Order) {
  orders = orders.map((o) =>
    o.id === updated.id ? updated : o
  );
}
