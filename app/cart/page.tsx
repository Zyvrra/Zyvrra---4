"use client";

import { useEffect, useState } from "react";
import { getCart, clearCart } from "@/lib/cartStore";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = cart.length * 75;
  const totalAmount = subtotal + deliveryFee;

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "buyer@zyvrra.com",
          amount: totalAmount,
        }),
      });

      const data = await res.json();

      if (data?.data?.authorization_url) {
        // clear cart BEFORE redirect (safe MVP approach)
        clearCart();

        window.location.href = data.data.authorization_url;
      } else {
        alert("Payment initialization failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong during checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-orange-400">
        Your Cart
      </h1>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <p className="text-gray-400 mt-4">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* ITEMS */}
          <div className="mt-6 space-y-4">
            {cart.map((item, i) => (
              <div
                key={i}
                className="bg-[#141414] p-4 rounded-xl"
              >
                <p className="font-bold">
                  {item.productName}
                </p>

                <p className="text-gray-400 text-sm">
                  @{item.username}
                </p>

                <p className="text-orange-400 font-bold">
                  R{item.price}
                </p>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="mt-6 bg-[#141414] p-4 rounded-xl">
            <p>Subtotal: R{subtotal}</p>
            <p>Delivery: R{deliveryFee}</p>
            <p className="font-bold text-orange-400 mt-2">
              Total: R{totalAmount}
            </p>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 bg-orange-500 text-black px-4 py-3 rounded-xl font-bold w-full disabled:opacity-50"
          >
            {loading ? "Processing..." : "Checkout with Paystack"}
          </button>
        </>
      )}
    </div>
  );
}
