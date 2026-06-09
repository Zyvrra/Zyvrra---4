export function getSellerStats(sellerId: string) {
  return {
    totalSales: 0,
    totalOrders: 0,
    delivered: 0,
    pending: 0,
    topCreators: [],
  };
}
