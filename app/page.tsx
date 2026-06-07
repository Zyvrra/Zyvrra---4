"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [role, setRole] = useState<string>("");

  const handleContinue = () => {
    if (!role) return;

    localStorage.setItem("zyvrra_role", role);

    if (role === "buyer") router.push("/feed");
    if (role === "seller") router.push("/seller-hub");
    if (role === "creator") router.push("/creator-hub");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">

      <h1 className="text-4xl font-bold text-orange-400">
        Zyvrra
      </h1>

      <p className="text-gray-400 mt-2 text-center">
        African Social Commerce for Fashion, Creators & Sellers
      </p>

      {/* ROLE SELECT */}
      <div className="mt-10 w-full max-w-sm space-y-3">

        <button
          onClick={() => setRole("buyer")}
          className={`w-full p-3 rounded-xl ${
            role === "buyer" ? "bg-white text-black" : "bg-[#141414]"
          }`}
        >
          I am a Buyer
        </button>

        <button
          onClick={() => setRole("seller")}
          className={`w-full p-3 rounded-xl ${
            role === "seller" ? "bg-white text-black" : "bg-[#141414]"
          }`}
        >
          I am a Seller
        </button>

        <button
          onClick={() => setRole("creator")}
          className={`w-full p-3 rounded-xl ${
            role === "creator" ? "bg-white text-black" : "bg-[#141414]"
          }`}
        >
          I am a Creator
        </button>

      </div>

      {/* CONTINUE */}
      <button
        onClick={handleContinue}
        className="mt-8 bg-orange-500 text-black px-6 py-3 rounded-xl font-bold"
      >
        Continue
      </button>

    </div>
  );
}
