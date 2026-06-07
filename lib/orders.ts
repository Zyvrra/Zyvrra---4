export type OrderStatus =
  | "Pending"
  | "Dispatched"
  | "Delivered"
  | "Disputed"
  | "Completed";

export type Order = {
  id: string;
  buyerId: string;
  sellerId: string;
  creatorId?: string;

  productName: string;
  amount: number;

  deliveryFee: number;
  totalAmount: number;

  status: OrderStatus;

  createdAt: number;
  deliveredAt?: number;
  payoutEligibleAt?: number; // deliveredAt + 3 days
};

/**
 * Create a new order when buyer checks out
 */
export function createOrder(input: {
  buyerId: string;
  sellerId: string;
  creatorId?: string;
  productName: string;
  amount: number;
  deliveryFee: number;
}): Order {
  const totalAmount = input.amount + input.deliveryFee;

  return {
    id: `order_${Date.now()}`,
    buyerId: input.buyerId,
    sellerId: input.sellerId,
    creatorId: input.creatorId,

    productName: input.productName,
    amount: input.amount,
    deliveryFee: input.deliveryFee,
    totalAmount,

    status: "Pending",

    createdAt: Date.now()
  };
}

/**
 * Seller marks order as dispatched
 */
export function markAsDispatched(order: Order): Order {
  return {
    ...order,
    status: "Dispatched"
  };
}

/**
 * Delivery confirmation triggers payout timer
 */
export function markAsDelivered(order: Order): Order {
  const deliveredAt = Date.now();

  return {
    ...order,
    status: "Delivered",
    deliveredAt,
    payoutEligibleAt: deliveredAt + 3 * 24 * 60 * 60 * 1000 // 3 days
  };
}

/**
 * Check if seller/creator can be paid
 */
export function isPayoutReady(order: Order): boolean {
  if (!order.payoutEligibleAt) return false;

  return Date.now() >= order.payoutEligibleAt;
}

/**
 * Complete order after payout window passes
 */
export function completeOrder(order: Order): Order {
  return {
    ...order,
    status: "Completed"
  };
}
