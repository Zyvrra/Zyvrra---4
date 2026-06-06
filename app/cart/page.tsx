"use client";

import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  seller: string;
};

export default function CartPage() {
  const [items] = useState<CartItem[]>([
    {
      id: "1",
      name: "Urban Sneaker Drop",
      price: 1200,
      seller: "streetplug"
    }
  ]);

  const DELIVERY_FEE = 75;

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + DELIVERY_FEE;

  const handleCheckout = () => {
    alert("Redirecting to Paystack checkout (to be connected)");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">

      <h1 className="text-2xl font-bold mb-6">Your Bag</h1>

      {/* ITEMS */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-[#141414] p-4 rounded-xl">
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-gray-400">@{item.seller}</p>
            <p className="text-orange-400 font-bold">R{item.price}</p>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-8 bg-[#141414] p-4 rounded-xl space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>R{DELIVERY_FEE}</span>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-orange-400">R{total}</span>
        </div>
      </div>

      {/* CHECKOUT */}
      <button
        onClick={handleCheckout}
        className="w-full mt-6 bg-white text-black py-3 rounded-xl font-bold"
      >
        Checkout with Paystack
      </button>

      {/* NOTE */}
      <p className="text-xs text-gray-500 mt-4">
        Secure payment via Paystack. Delivery fee fixed at R75.
      </p>

    </div>
  );
}
