        
"use client";

import { useEffect, useState } from "react";
import ReactionBar from "@/components/ReactionBar";
import { getPosts, Post } from "@/lib/postsStore";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* TOP BAR */}
      <div className="sticky top-0 z-50 bg-black border-b border-gray-800 px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-400">
          Zyvrra
        </h1>

        <button
          onClick={() => window.location.href = "/upload"}
          className="bg-white text-black px-3 py-2 rounded-full text-sm font-semibold"
        >
          📷 Upload
        </button>
      </div>

      {/* FEED */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative h-screen border-b border-gray-900"
          >

            {/* VIDEO AREA */}
            <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                🎥 Video Placeholder (30s max later)
              </span>
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* LEFT INFO */}
            <div className="absolute bottom-24 left-4 max-w-[70%]">
              <p className="font-bold text-lg">
                @{post.username}
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {post.caption}
              </p>

              <h2 className="mt-3 text-xl font-bold">
                {post.productName}
              </h2>

              <p className="text-orange-400 font-bold text-lg">
                R{post.price}
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="absolute right-4 bottom-24 flex flex-col gap-4 items-center">

              <button className="text-sm">❤️ Love</button>
              <button className="text-sm">💾 Save</button>
              <button className="text-sm">🔗 Share</button>

              <button className="bg-orange-500 text-black px-3 py-2 rounded-full text-sm font-bold">
                🛍 Bag
              </button>
            </div>

            {/* REACTIONS */}
            <div className="absolute bottom-4 left-4 right-4">
              <ReactionBar postId={post.id} />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
