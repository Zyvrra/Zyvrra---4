"use client";

import { useState } from "react";

type Order = {
  id: string;
  product: string;
  buyer: string;
  amount: number;
  status: "Pending" | "Dispatched" | "Delivered";
};

export default function SellerHub() {
  const [orders] = useState<Order[]>([
    {
      id: "1",
      product: "Urban Sneaker Drop",
      buyer: "user123",
      amount: 1200,
      status: "Delivered"
    },
    {
      id: "2",
      product: "African Hoodie",
      buyer: "user456",
      amount: 850,
      status: "Dispatched"
    }
  ]);

  const totalSales = orders.reduce((sum, o) => sum + o.amount, 0);

  const deliveredOrders = orders.filter(o => o.status === "Delivered");

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold">Seller Hub</h1>
      <p className="text-gray-400 text-sm">
        Track your sales, orders, and performance
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Total Sales</p>
          <h2 className="text-xl font-bold text-orange-400">
            R{totalSales}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Delivered Orders</p>
          <h2 className="text-xl font-bold">
            {deliveredOrders.length}
          </h2>
        </div>

      </div>

      {/* ORDERS LIST */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-[#141414] p-4 rounded-xl flex justify-between"
            >
              <div>
                <p className="font-bold">{order.product}</p>
                <p className="text-gray-400 text-sm">
                  Buyer: @{order.buyer}
                </p>
                <p className="text-orange-400">R{order.amount}</p>
              </div>

              <div className="text-right">
                <p
                  className={
                    order.status === "Delivered"
                      ? "text-green-400"
                      : order.status === "Dispatched"
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                >
                  {order.status}
                </p>

                {order.status === "Pending" && (
                  <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs">
                    Mark Dispatched
                  </button>
                )}

                {order.status === "Dispatched" && (
                  <button className="mt-2 bg-green-500 text-black px-3 py-1 rounded text-xs">
                    Mark Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
