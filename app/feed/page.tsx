"use client";

import { useEffect, useState } from "react";
import ReactionBar from "@/components/ReactionBar";
import { getPosts, Post } from "@/lib/postsStore";
import { addToCart } from "@/lib/cartStore";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HEADER */}
      <div className="sticky top-16 z-40 bg-gradient-to-b from-black via-black/95 to-transparent border-b border-orange-500/20 px-4 py-3 flex justify-between items-center backdrop-blur-md">
        <h1 className="text-3xl font-black gradient-text">
          ⚡ Zyvrra
        </h1>

        <button
          onClick={() => (window.location.href = "/upload")}
          className="btn-neon text-xs px-3 py-2 flex items-center gap-2"
        >
          📷 Upload
        </button>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block">
              <div className="animate-spin">
                <span className="text-6xl">⚡</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400 text-lg font-semibold">
              Loading your feed...
            </p>
          </div>
        </div>
      )}

      {/* FEED */}
      <div>
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="relative h-screen border-b border-orange-500/10 snap-start"
            style={{ animation: `fade-in 0.6s ease-out ${index * 0.1}s both` }}
          >

            {/* VIDEO AREA */}
            <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
              {post.videoUrl ? (
                <video
                  src={post.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-gray-500 text-lg">No video uploaded</p>
                </div>
              )}
            </div>

            {/* ENHANCED DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            {/* CORNER ACCENT GLOW */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl" />

            {/* LEFT INFO - ENHANCED */}
            <div className="absolute bottom-32 left-4 max-w-[70%] z-20">
              {/* USERNAME */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-400 font-bold text-lg">✓</span>
                <p className="font-bold text-xl text-white">
                  @{post.username}
                </p>
              </div>

              {/* CAPTION */}
              <p className="mt-3 text-sm text-gray-300 line-clamp-2 leading-relaxed">
                {post.caption}
              </p>

              {/* PRODUCT NAME */}
              <h2 className="mt-4 text-2xl font-black text-white leading-tight">
                {post.productName}
              </h2>

              {/* PRICE - NEON */}
              <p className="mt-2 text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                R{post.price}
              </p>
            </div>

            {/* RIGHT ACTIONS - ENHANCED */}
            <div className="absolute right-4 bottom-32 flex flex-col gap-3 items-center z-20">

              {/* REACTION BUTTONS */}
              <div className="flex flex-col gap-2">
                <button className="group relative px-4 py-2 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-sm font-semibold hover:scale-110 active:scale-95">
                  ❤️ Love
                  <span className="absolute -top-8 right-0 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Like
                  </span>
                </button>

                <button className="group relative px-4 py-2 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-sm font-semibold hover:scale-110 active:scale-95">
                  💾 Save
                  <span className="absolute -top-8 right-0 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Bookmark
                  </span>
                </button>

                <button className="group relative px-4 py-2 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-sm font-semibold hover:scale-110 active:scale-95">
                  🔗 Share
                  <span className="absolute -top-8 right-0 bg-black/80 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Share
                  </span>
                </button>
              </div>

              {/* PRIMARY BAG BUTTON - ELECTRIFYING */}
              <button
                onClick={() =>
                  addToCart({
                    id: post.id,
                    username: post.username,
                    productName: post.productName,
                    price: post.price,
                    caption: post.caption,
                    videoUrl: post.videoUrl,
                    createdAt: post.createdAt,
                    creatorId: "creator_demo",
                    affiliateLinkCode: "link_demo",
                  })
                }
                className="relative group mt-2"
              >
                {/* GLOW EFFECT */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 group-active:opacity-50" />
                
                {/* BUTTON */}
                <div className="relative btn-neon px-5 py-3 text-sm font-bold flex items-center gap-2 group-hover:scale-105 group-active:scale-95 transition-transform duration-300">
                  🛍 Add to Bag
                </div>
              </button>

            </div>

            {/* REACTIONS - BOTTOM */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <ReactionBar postId={post.id} />
            </div>

          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {!loading && posts.length === 0 && (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">📭</p>
            <p className="text-gray-400 text-lg font-semibold">
              No posts yet. Be the first creator!
            </p>
            <button
              onClick={() => (window.location.href = "/upload")}
              className="mt-6 btn-neon"
            >
              Start Creating
            </button>
          </div>
        </div>
      )}
    </div>
  );
}