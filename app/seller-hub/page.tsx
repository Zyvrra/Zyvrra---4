"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/orderStore";
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
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? markAsDispatched(order)
          : order
      )
    );
  };

  const handleDelivered = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? markAsDelivered(order)
          : order
      )
    );
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
          <
