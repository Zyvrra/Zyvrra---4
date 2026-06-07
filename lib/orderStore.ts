import { getCreatorContracts } from "./contracts";

export type OrderStatus = "Pending" | "Paid" | "Failed";

export type Order = {
  id: string;

  buyerId: string;

  productName: string;
  amount: number;

  sellerId?: string;
  creatorId?: string;
  contractId?: string;

  creatorEarning?: number;
  sellerEarning?: number;
  zyvrraFee?: number;

  status: OrderStatus;

  createdAt: number;
};

let orders: Order[] = [];

/**
 * CREATE ORDER (ZYVRRA BUSINESS LOGIC APPLIED)
 */
export function createOrder(input: {
  buyerId: string;
  productName: string;
  amount: number;
}): Order {
  const contracts = getCreatorContracts();

  const contract = contracts.find(
    (c) => c.productName === input.productName
  );

  let creatorId: string | undefined;
  let sellerId: string | undefined;
  let contractId: string | undefined;

  let creatorEarning = 0;
  let sellerEarning = 0;
  let zyvrraFee = 0;

  // CASE 1: CONTRACT EXISTS
  if (contract && contract.status === "Active") {
    creatorId = contract.creatorId;
    sellerId = contract.sellerId;
    contractId = contract.id;

    const base = input.amount;

    const creatorBase = (base * contract.creatorShare) / 100;
    const creatorBonus = (base * 2) / 100;

    creatorEarning = creatorBase + creatorBonus;

    zyvrraFee = (base * 8) / 100;

    sellerEarning = base - creatorBase - creatorBonus - zyvrraFee;
  }

  // CASE 2: NO CONTRACT
  else {
    const base = input.amount;

    zyvrraFee = (base * 10) / 100;
    sellerEarning = base - zyvrraFee;
  }

  const order: Order = {
    id: `order_${Date.now()}`,

    buyerId: input.buyerId,
    productName: input.productName,
    amount: input.amount,

    sellerId,
    creatorId,
    contractId,

    creatorEarning,
    sellerEarning,
    zyvrraFee,

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
 * MARK PAID
 */
export function markOrderPaid(orderId: string) {
  orders = orders.map((o) =>
    o.id === orderId ? { ...o, status: "Paid" } : o
  );
}
