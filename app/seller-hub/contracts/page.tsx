"use client";

import { useState } from "react";
import { createContract } from "@/lib/contracts";

export default function SellerCreateContract() {
  const [creatorId, setCreatorId] = useState("");
  const [productName, setProductName] = useState("");
  const [creatorShare, setCreatorShare] = useState(10);

  const [message, setMessage] = useState("");

  const handleCreate = () => {
    if (!creatorId || !productName) {
      setMessage("Please fill all fields");
      return;
    }

    const contract = createContract({
      sellerId: "seller_demo",
      creatorId,
      productName,
      creatorShare,
    });

    setMessage(
      `Contract sent to @${creatorId} for ${productName}`
    );

    setCreatorId("");
    setProductName("");
    setCreatorShare(10);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-2xl font-bold text-orange-400">
        Create Contract
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        Send deals to creators
      </p>

      {/* FORM */}
      <div className="mt-6 space-y-4">

        <input
          value={creatorId}
          onChange={(e) => setCreatorId(e.target.value)}
          placeholder="Creator ID (e.g. creator123)"
          className="w-full p-3 bg-[#141414] rounded-xl text-white"
        />

        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          className="w-full p-3 bg-[#141414] rounded-xl text-white"
        />

        <div>
          <label className="text-sm text-gray-400">
            Creator Share (%)
          </label>

          <input
            type="number"
            value={creatorShare}
            onChange={(e) =>
              setCreatorShare(Number(e.target.value))
            }
            className="w-full p-3 bg-[#141414] rounded-xl text-white mt-1"
          />
        </div>

        <button
          onClick={handleCreate}
          className="w-full bg-orange-500 text-black font-bold py-3 rounded-xl"
        >
          Send Contract
        </button>

        {message && (
          <p className="text-green-400 text-sm mt-2">
            {message}
          </p>
        )}
      </div>

    </div>
  );
}
