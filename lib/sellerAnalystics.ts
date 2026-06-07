import { getOrders } from "./orderStore";

/**
 * SELLER PERFORMANCE ENGINE (MVP)
 */

export function getSellerStats(sellerId: string) {
  const orders = getOrders();

  const sellerOrders = orders.filter(
    (o) => o.sellerId === sellerId
  );

  const totalSales = sellerOrders.reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const totalOrders = sellerOrders.length;

  const delivered = sellerOrders.filter(
    (o) => o.status === "Delivered"
  );

  const pending = sellerOrders.filter(
    (o) => o.status === "Pending"
  );

  const creatorMap: Record<string, number> = {};

  sellerOrders.forEach((o) => {
    if (o.creatorId) {
      creatorMap[o.creatorId] =
        (creatorMap[o.creatorId] || 0) + o.amount;
    }
  });

  const topCreators = Object.entries(creatorMap)
    .map(([creatorId, revenue]) => ({
      creatorId,
      revenue,
    }))
    .sort((a, b) => b.revenue - a.revenue);

  return {
    totalSales,
    totalOrders,
    delivered: delivered.length,
    pending: pending.length,
    topCreators,
  };
    }
