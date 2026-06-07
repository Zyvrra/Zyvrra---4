export type Order = {
  id: string;
  buyerId: string;
  productName: string;
  amount: number;
  createdAt: number;
};

let orders: Order[] = [];

/**
 * CREATE ORDER (checkout placeholder)
 */
export function createOrder(input: {
  buyerId: string;
  productName: string;
  amount: number;
}): Order {
  const order: Order = {
    id: `order_${Date.now()}`,
    buyerId: input.buyerId,
    productName: input.productName,
    amount: input.amount,
    createdAt: Date.now(),
  };

  orders.push(order);
  return order;
}

/**
 * GET ORDERS
 */
export function getOrders() {
  return orders;
}
