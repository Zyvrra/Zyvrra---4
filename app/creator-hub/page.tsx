"use client";

import { useEffect, useState } from "react";
import { getCreatorStats } from "@/lib/creatorStore";

export default function CreatorHub() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const data = getCreatorStats("creator_demo");
    setStats(data);
  }, []);

  if (!stats) {
    return (
      <div className="p-6 text-gray-400">
        Loading Creator Hub...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-orange-400">
        Creator Hub
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        Your earnings & performance
      </p>

      {/* STATS GRID */}
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
          <p className="text-gray-400 text-sm">Clicks</p>
          <h2 className="text-xl font-bold">
            {stats.totalClicks}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Conversion</p>
          <h2 className="text-xl font-bold text-green-400">
            {stats.conversionRate.toFixed(2)}%
          </h2>
        </div>

      </div>

      {/* INFO BOX */}
      <div className="mt-6 bg-[#141414] p-4 rounded-xl text-sm text-gray-300">
        This shows your performance based on affiliate links and sales generated through Zyvrra.
      </div>

    </div>
  );
}
