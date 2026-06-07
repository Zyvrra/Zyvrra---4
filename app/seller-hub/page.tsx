"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/orderStore";
import { Order } from "@/lib/orders";

export default function SellerHub() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getOrders();
      setOrders(data);
      setLoading(false);
    }

    load();
  }, []);

  const totalSales = orders.reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const delivered = orders.filter(
    (o) => o.status === "Delivered"
  );

  if (loading) {
    return (
      <div className="p-6 text-gray-400">
        Loading Seller Hub...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-orange-400">
        Seller Hub
      </h1>

      <p className="text-gray-400 text-sm">
        Track your sales and performance
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Total Sales</p>
          <h2 className="text-xl font-bold text-orange-400">
            R{totalSales}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Delivered Orders
          </p>
          <h2 className="text-xl font-bold">
            {delivered.length}
          </h2>
        </div>

      </div>

    </div>
  );
}
