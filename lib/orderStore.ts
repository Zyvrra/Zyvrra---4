export type OrderStatus = "Pending" | "Paid" | "Failed";

export type Order = {
  id: string;

  buyerId: string;

  productName: string;
  amount: number;

  sellerId?: string;
  creatorId?: string;
  contractId?: string;

  status: OrderStatus;

  createdAt: number;
};

let orders: Order[] = [];

/**
 * CREATE ORDER
 */
export function createOrder(input: {
  buyerId: string;
  productName: string;
  amount: number;

  sellerId?: string;
  creatorId?: string;
  contractId?: string;
}): Order {
  const order: Order = {
    id: `order_${Date.now()}`,

    buyerId: input.buyerId,
    productName: input.productName,
    amount: input.amount,

    sellerId: input.sellerId,
    creatorId: input.creatorId,
    contractId: input.contractId,

    status: "Pending",

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

/**
 * MARK AS PAID
 */
export function markOrderPaid(orderId: string) {
  orders = orders.map((o) =>
    o.id === orderId ? { ...o, status: "Paid" } : o
  );
}
