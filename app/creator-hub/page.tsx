"use client";

import { useState } from "react";

type Campaign = {
  id: string;
  seller: string;
  product: string;
  clicks: number;
  sales: number;
  earnings: number;
};

export default function CreatorHub() {
  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      seller: "streetplug",
      product: "Urban Sneaker Drop",
      clicks: 120,
      sales: 8,
      earnings: 340
    },
    {
      id: "2",
      seller: "zuluwear",
      product: "African Hoodie",
      clicks: 60,
      sales: 2,
      earnings: 90
    }
  ]);

  const totalEarnings = campaigns.reduce(
    (sum, c) => sum + c.earnings,
    0
  );

  const totalSales = campaigns.reduce((sum, c) => sum + c.sales, 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold">Creator Hub</h1>
      <p className="text-gray-400 text-sm">
        Track your affiliate performance and earnings
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Total Earnings</p>
          <h2 className="text-xl font-bold text-orange-400">
            R{totalEarnings}
          </h2>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Total Sales</p>
          <h2 className="text-xl font-bold">
            {totalSales}
          </h2>
        </div>

      </div>

      {/* AFFILIATE CAMPAIGNS */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          Active Campaigns
        </h2>

        <div className="space-y-3">
          {campaigns.map((c) => (
            <div
              key={c.id}
              className="bg-[#141414] p-4 rounded-xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">{c.product}</p>
                  <p className="text-gray-400 text-sm">
                    Seller: @{c.seller}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-orange-400 font-bold">
                    R{c.earnings}
                  </p>
                </div>
              </div>

              {/* METRICS */}
              <div className="flex justify-between mt-3 text-sm text-gray-300">
                <p>Clicks: {c.clicks}</p>
                <p>Sales: {c.sales}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LINK SECTION */}
      <div className="mt-8 bg-[#141414] p-4 rounded-xl">
        <h2 className="font-bold mb-2">Your Affiliate Link</h2>
        <p className="text-sm text-gray-400 break-all">
          zyvrra.com/ref/creator123/streetplug
        </p>
      </div>

    </div>
  );
}
