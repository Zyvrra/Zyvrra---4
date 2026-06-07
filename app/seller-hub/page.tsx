"use client";

import { useEffect, useState } from "react";
import { getOrders, updateOrder } from "@/lib/orderStore";
import {
  Order,
  markAsDispatched,
  markAsDelivered,
} from "@/lib/orders";

export default function SellerHub() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const handleDispatch = (orderId: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.id !== orderId) return order;

      const updated = markAsDispatched(order);
      updateOrder(updated);

      return updated;
    });

    setOrders(updatedOrders);
  };

  const handleDelivered = (orderId: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.id !== orderId) return order;

      const updated = markAsDelivered(order);
      updateOrder(updated);

      return updated;
    });

    setOrders(updatedOrders);
  };

  const totalSales = orders.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold">Seller Hub</h1>

      <p className="text-gray-400 text-sm">
        Track your sales, orders and performance
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Total Sales
          </p>

          <h2 className="text-xl font-bold text-orange-400">
            R{totalSales}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Delivered Orders
          </p>

          <h2 className="text-xl font-bold">
            {deliveredOrders.length}
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>

        <div className="space-y-3">
          {orders.length === 0 && (
            <div className="bg-[#141414] p-4 rounded-xl">
              No orders yet.
            </div>
          )}

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-[#141414] p-4 rounded-xl flex justify-between"
            >
              <div>
                <p className="font-bold">
                  {order.productName}
                </p>

                <p className="text-gray-400 text-sm">
                  Buyer: @{order.buyerId}
                </p>

                <p className="text-orange-400">
                  R{order.amount}
                </p>
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
                  <button
                    onClick={() =>
                      handleDispatch(order.id)
                    }
                    className="mt-2 bg-white text-black px-3 py-1 rounded text-xs"
                  >
                    Mark Dispatched
                  </button>
                )}

                {order.status === "Dispatched" && (
                  <button
                    onClick={() =>
                      handleDelivered(order.id)
                    }
                    className="mt-2 bg-green-500 text-black px-3 py-1 rounded text-xs"
                  >
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
