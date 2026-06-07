import { getOrders } from "./orderStore";
import { getLinks } from "./affiliateStore";

/**
 * SIMPLE CREATOR ANALYTICS ENGINE (MVP)
 * Later replaced with real DB queries
 */

export function getCreatorStats(creatorId: string) {
  const orders = getOrders();
  const links = getLinks();

  // Orders linked to this creator
  const creatorOrders = orders.filter(
    (o) => o.creatorId === creatorId
  );

  const totalSales = creatorOrders.reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const totalOrders = creatorOrders.length;

  // Affiliate links
  const creatorLinks = links.filter(
    (l) => l.creatorId === creatorId
  );

  const totalClicks = creatorLinks.reduce(
    (sum, l) => sum + l.clicks,
    0
  );

  const totalLinkSales = creatorLinks.reduce(
    (sum, l) => sum + l.sales,
    0
  );

  return {
    totalSales,
    totalOrders,
    totalClicks,
    totalLinkSales,
    conversionRate:
      totalClicks === 0
        ? 0
        : (totalLinkSales / totalClicks) * 100,
  };
}
