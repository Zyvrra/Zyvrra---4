"use client";

import { useEffect, useState } from "react";
import { getSellerStats } from "@/lib/sellerAnalytics";

export default function SellerHub() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const data = getSellerStats("seller_demo");
    setStats(data);
  }, []);

  if (!stats) {
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

      <p className="text-gray-400 text-sm mt-1">
        Performance & creator impact
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Total Sales</p>
          <h2 className="text-xl font-bold text-orange-400">
            R{stats.totalSales}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Orders</p>
          <h2 className="text-xl font-bold">
            {stats.totalOrders}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Delivered</p>
          <h2 className="text-xl font-bold text-green-400">
            {stats.delivered}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Pending</p>
          <h2 className="text-xl font-bold text-yellow-400">
            {stats.pending}
          </h2>
        </div>

      </div>

      {/* TOP CREATORS */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">
          Top Creators
        </h2>

        {stats.topCreators.length === 0 ? (
          <p className="text-gray-500">
            No creator sales yet
          </p>
        ) : (
          stats.topCreators.map((c: any, i: number) => (
            <div
              key={i}
              className="bg-[#141414] p-4 rounded-xl mb-3"
            >
              <p className="font-bold">
                @{c.creatorId}
              </p>

              <p className="text-orange-400">
                R{c.revenue}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
