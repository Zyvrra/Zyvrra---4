"use client";

import { useState } from "react";
import { login, UserRole } from "@/lib/userStore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("buyer");

  const handleLogin = () => {
    if (!email) return;

    login(email, role);

    if (role === "creator") router.push("/creator-hub");
    if (role === "seller") router.push("/seller-hub");
    if (role === "buyer") router.push("/feed");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col justify-center">

      <h1 className="text-3xl font-bold text-orange-400 mb-6">
        Zyvrra Login
      </h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 bg-[#141414] rounded-xl mb-4"
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        className="p-3 bg-[#141414] rounded-xl mb-4"
      >
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="creator">Creator</option>
      </select>

      <button
        onClick={handleLogin}
        className="bg-orange-500 text-black font-bold py-3 rounded-xl"
      >
        Login
      </button>

    </div>
  );
}
