"use client";

import { useEffect, useState } from "react";
import { getPosts, Post } from "@/lib/postsStore";
import { addToCart } from "@/lib/cartStore";
import { getCurrentUser } from "@/lib/userStore";
import Link from "next/link";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const user = getCurrentUser();

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
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
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
    <div className="fixed inset-0 bg-black overflow-hidden pt-20">
      {/* PROGRESS BAR */}
      <div className="absolute top-16 left-0 right-0 h-1 bg-white/10 z-40">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* MAIN FEED CONTAINER */}
      <div className="relative h-full w-full flex items-center justify-center">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 w-full h-full">
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
        </div>

        {/* OVERLAY - DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

        {/* CONTENT OVERLAY */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between p-4 pb-24">
          {/* TOP - USER INFO */}
          <div className="flex items-center gap-3 mt-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {currentPost.displayName?.charAt(0).toUpperCase() || "Z"}
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-tight">
                {currentPost.displayName || currentPost.username}
              </p>
              <p className="text-sm text-gray-300">{currentPost.category}</p>
            </div>
          </div>

          {/* BOTTOM - PRODUCT INFO & ACTIONS */}
          <div className="space-y-4 animate-fade-in">
            {/* PRODUCT DETAILS */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <h2 className="text-white font-black text-2xl mb-2 leading-tight">
                {currentPost.productName}
              </h2>
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
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
              {/* ADD TO BAG - PRIMARY */}
              <button
                onClick={() => handleAddToCart(currentPost)}
                className="flex-1 btn-neon py-3 font-bold text-lg flex items-center justify-center gap-2"
              >
                🛍️ Add to Bag
              </button>

              {/* SHARE */}
              <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition">
                🔗
              </button>

              {/* SAVE */}
              <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition">
                💾
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ENGAGEMENT STATS */}
        <div className="absolute right-4 bottom-32 z-20 flex flex-col gap-4">
          {/* LIKE */}
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all">
              ❤️
            </div>
            <p className="text-xs text-white font-bold">
              {(currentPost.likes || 0).toLocaleString()}
            </p>
          </div>

          {/* COMMENT */}
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all">
              💬
            </div>
            <p className="text-xs text-white font-bold">42</p>
          </div>

          {/* SAVE */}
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-500/20 group-hover:scale-110 flex items-center justify-center text-2xl transition-all">
              💾
            </div>
            <p className="text-xs text-white font-bold">
              {(currentPost.saves || 0).toLocaleString()}
            </p>
          </div>

          {/* CREATOR */}
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 group-hover:scale-110 flex items-center justify-center text-2xl transition-all">
              👤
            </div>
            <p className="text-xs text-white font-bold">Follow</p>
          </div>
        </div>

        {/* NAVIGATION ARROWS */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl transition"
          >
            ←
          </button>
        )}

        {currentIndex < posts.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl transition"
          >
            →
          </button>
        )}

        {/* POST COUNTER */}
        <div className="absolute top-20 right-4 z-30 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-bold">
          {currentIndex + 1} / {posts.length}
        </div>
      </div>
    </div>
  );
}
