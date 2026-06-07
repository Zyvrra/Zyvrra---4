
"use client";

import { useState } from "react";

type Post = {
  id: string;
  username: string;
  videoUrl?: string;
  productName: string;
  price: number;
};

export default function FeedPage() {
  const [posts] = useState<Post[]>([
    {
      id: "1",
      username: "streetplug",
      productName: "Urban Sneaker Drop",
      price: 1200
    },
    {
      id: "2",
      username: "zuluwear",
      productName: "African Street Hoodie",
      price: 850
    }
  ]);

  const [reactions, setReactions] = useState<Record<string, any>>({});

  const handleReaction = (postId: string, type: string) => {
    setReactions((prev) => ({
      ...prev,
      [postId]: type
    }));
  };

  return (
    <div className="h-screen overflow-y-scroll bg-black">

      {/* FEED */}
      <div className="flex flex-col gap-10 p-4">

        {posts.map((post) => (
          <div key={post.id} className="relative bg-[#141414] rounded-2xl p-4">

            {/* VIDEO PLACEHOLDER */}
            <div className="h-[500px] bg-black rounded-xl flex items-center justify-center border border-gray-800">
              <p className="text-gray-500">
                🎥 Video Feed Placeholder
              </p>
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-3">
              <h2 className="text-lg font-bold">{post.productName}</h2>
              <p className="text-gray-400">by @{post.username}</p>
              <p className="text-orange-400 font-bold">
                R{post.price}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between mt-4 text-sm">

            <ReactionBar postId={post.id} />

              {/* RIGHT ACTIONS */}
              <div className="flex gap-3">
                <button>💾 Save</button>
                <button>🔗 Share</button>
                <button>🛍 Bag</button>
              </div>

            </div>

            {/* CAMERA BUTTON (TOP RIGHT STYLE SIMULATION) */}
            <div className="absolute top-3 right-3">
              <button className="bg-white text-black px-3 py-1 rounded-full text-xs">
                📷 Upload
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
