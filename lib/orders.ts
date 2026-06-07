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

  // 🔥 AFFILIATE TRACKING (NEW CORE ENGINE)
  creatorId?: string;
  affiliateLinkCode?: string;

  productName: string;

  amount: number;
  deliveryFee: number;
  totalAmount: number;

  status: OrderStatus;

  createdAt: number;

  deliveredAt?: number;
  payoutEligibleAt?: number; // deliveredAt + 3 days (your rule)
};

/**
 * Create a new order when buyer checks out
 * NOW WITH AFFILIATE SUPPORT
 */
export function createOrder(input: {
  buyerId: string;
  sellerId: string;

  creatorId?: string;
  affiliateLinkCode?: string;

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
    affiliateLinkCode: input.affiliateLinkCode,

    productName: input.productName,

    amount: input.amount,
    deliveryFee: input.deliveryFee,
    totalAmount,

    status: "Pending",

    createdAt: Date.now(),
  };
}

/**
 * Seller marks order as dispatched
 */
export function markAsDispatched(order: Order): Order {
  return {
    ...order,
    status: "Dispatched",
  };
}

/**
 * Delivery confirmation triggers payout timer
 * (YOUR 3-DAY POST-DELIVERY HOLD SYSTEM)
 */
export function markAsDelivered(order: Order): Order {
  const deliveredAt = Date.now();

  return {
    ...order,
    status: "Delivered",
    deliveredAt,
    payoutEligibleAt:
      deliveredAt + 3 * 24 * 60 * 60 * 1000, // 72 hours
  };
}

/**
 * Check if payout is ready
 */
export function isPayoutReady(order: Order): boolean {
  if (!order.payoutEligibleAt) return false;

  return Date.now() >= order.payoutEligibleAt;
}

/**
 * Final completion after payout window
 */
export function completeOrder(order: Order): Order {
  return {
    ...order,
    status: "Completed",
  };
}
