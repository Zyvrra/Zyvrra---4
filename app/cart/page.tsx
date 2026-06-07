"use client";

import { useEffect, useState } from "react";
import { getCart, clearCart } from "@/lib/cartStore";
import { createOrder } from "@/lib/orders";
import { addOrder } from "@/lib/orderStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    for (const item of cart) {
      const order = createOrder({
        buyerId: "buyer_demo",
        sellerId: "seller_demo",
        productName: item.productName,
        amount: item.price,
        deliveryFee: 75,
      });

      await addOrder(order);
    }

    clearCart();
    router.push("/feed");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-2xl font-bold text-orange-400">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-400 mt-4">Cart is empty</p>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {cart.map((item, i) => (
              <div
                key={i}
                className="bg-[#141414] p-4 rounded-xl"
              >
                <p className="font-bold">{item.productName}</p>
                <p className="text-orange-400">
                  R{item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#141414] p-4 rounded-xl">
            <p>Total: R{total + cart.length * 75}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 bg-orange-500 text-black px-4 py-3 rounded-xl font-bold w-full"
          >
            Checkout (Paystack later)
          </button>
        </>
      )}
    </div>
  );
}
