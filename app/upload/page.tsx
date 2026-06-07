"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addPost } from "@/lib/postsStore";

export default function UploadPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [caption, setCaption] = useState("");

  const handleUpload = () => {
    if (!username || !productName || !price) return;

    addPost({
      id: `post_${Date.now()}`,
      username,
      productName,
      price,
      caption,
      createdAt: Date.now(),
    });

    router.push("/feed");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-orange-400">
        Upload Product
      </h1>

      <div className="mt-6 flex flex-col gap-4">

        <input
          placeholder="Username"
          className="p-3 bg-[#141414] rounded"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Product Name"
          className="p-3 bg-[#141414] rounded"
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="p-3 bg-[#141414] rounded"
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <textarea
          placeholder="Caption"
          className="p-3 bg-[#141414] rounded"
          onChange={(e) => setCaption(e.target.value)}
        />

        <button
          onClick={handleUpload}
          className="bg-orange-500 text-black font-bold p-3 rounded"
        >
          Post to Feed
        </button>
      </div>
    </div>
  );
}
