"use client";

import { useEffect, useState } from "react";
import { getPosts, Post } from "@/lib/postsStore";
import { addToCart } from "@/lib/cartStore";
import Link from "next/link";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  const handleAddToCart = (post: Post) => {
    addToCart({
      ...post,
      creatorId: "creator_" + post.username,
      affiliateLinkCode: "link_" + post.id,
    });
    alert("✅ Added to bag!");
  };

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⚡</div>
          <p className="text-white text-xl font-bold">Loading feed...</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <p className="text-6xl mb-4">📭</p>
        <p className="text-2xl font-bold mb-2">No Posts Yet</p>
        <p className="text-gray-400 mb-6">Be the first to create content!</p>
        <Link href="/upload" className="btn-neon">
          📷 Upload Now
        </Link>
      </div>
    );
  }

  const currentPost = posts[currentIndex];
  const progress = ((currentIndex + 1) / posts.length) * 100;

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* PROGRESS BAR */}
      <div className="h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* POST CONTAINER */}
      <div className="relative min-h-screen bg-black flex flex-col">
        {/* VIDEO AREA */}
        <div className="flex-1 relative overflow-hidden bg-black">
          {currentPost.videoUrl ? (
            <video
              src={currentPost.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
              <p className="text-gray-500 text-lg">🎥 Video unavailable</p>
            </div>
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

          {/* TOP LEFT - CREATOR INFO */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
              {currentPost.displayName?.charAt(0).toUpperCase() || "Z"}
            </div>
            <div>
              <p className="font-bold text-white text-lg">
                {currentPost.displayName || currentPost.username}
              </p>
              <p className="text-xs text-gray-300">{currentPost.category}</p>
            </div>
          </div>

          {/* RIGHT SIDE - ENGAGEMENT */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
            {/* LIKE */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-red-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all shadow-lg">
                ❤️
              </div>
              <p className="text-xs text-white font-bold">
                {(currentPost.likes || 0).toLocaleString()}
              </p>
            </div>

            {/* COMMENT */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-blue-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all shadow-lg">
                💬
              </div>
              <p className="text-xs text-white font-bold">42</p>
            </div>

            {/* SAVE */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-yellow-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all shadow-lg">
                💾
              </div>
              <p className="text-xs text-white font-bold">
                {(currentPost.saves || 0).toLocaleString()}
              </p>
            </div>

            {/* FOLLOW */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 group-hover:scale-110 flex items-center justify-center text-2xl transition-all shadow-lg">
                👤
              </div>
              <p className="text-xs text-white font-bold">Follow</p>
            </div>
          </div>

          {/* POST COUNTER */}
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-bold border border-white/20">
            {currentIndex + 1} / {posts.length}
          </div>
        </div>

        {/* BOTTOM - PRODUCT INFO & ACTIONS */}
        <div className="relative z-20 bg-gradient-to-t from-black via-black/90 to-transparent p-4 space-y-4">
          {/* PRODUCT CARD */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-orange-400/50 transition">
            <h2 className="text-white font-black text-2xl mb-2">
              {currentPost.productName}
            </h2>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {currentPost.caption}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs">Price</p>
                <p className="text-orange-400 font-black text-2xl">
                  R{currentPost.price}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">Views</p>
                <p className="text-white font-bold">
                  {(currentPost.views || 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">
            <button
              onClick={() => handleAddToCart(currentPost)}
              className="flex-1 btn-neon py-4 font-bold text-lg flex items-center justify-center gap-2"
            >
              🛍️ Add to Bag
            </button>
            <button className="px-4 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition">
              🔗
            </button>
            <button className="px-4 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition">
              💾
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="flex gap-2">
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition"
              >
                ← Previous
              </button>
            )}
            {currentIndex < posts.length - 1 && (
              <button
                onClick={handleNext}
                className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
