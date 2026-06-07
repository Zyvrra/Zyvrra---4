"use client";

import { useState } from "react";
import { initializePaystackPayment } from "@/lib/paystack";
import { createOrder } from "@/lib/orders";
import { getUserRole } from "@/lib/auth";

type CartItem = {
  id: string;
  productName: string;
  price: number;
  sellerId: string;
};

export default function CartPage() {
  const [cart] = useState<CartItem[]>([
    {
      id: "1",
      productName: "Urban Sneaker Drop",
      price: 1200,
      sellerId: "seller_1"
    }
  ]);

  const deliveryFee = 75;

  const total =
    cart.reduce((sum, item) => sum + item.price, 0) + deliveryFee;

  const handleCheckout = async () => {
    const role = getUserRole();

    // 🚨 only buyers can checkout
    if (!role || role !== "buyer") {
      alert("Only buyers can checkout");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const order = createOrder({
      buyerId: role,
      sellerId: cart[0].sellerId,
      productName: cart[0].productName,
      amount: cart[0].price,
      deliveryFee
    });

    const payment = await initializePaystackPayment({
      email: "buyer@email.com",
      amount: total,
      reference: order.id
    });

    if (payment?.authorization_url) {
      window.location.href = payment.authorization_url;
    } else {
      alert("Payment failed to initialize");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold">Cart</h1>

      {/* CART ITEMS */}
      <div className="mt-6 space-y-3">
        {cart.map((item) => (
          <div key={item.id} className="bg-[#141414] p-4 rounded-xl">
            <p className="font-bold">{item.productName}</p>
            <p className="text-orange-400">R{item.price}</p>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-6 bg-[#141414] p-4 rounded-xl">
        <p>Delivery Fee: R{deliveryFee}</p>
        <p className="font-bold text-orange-400 mt-2">
          Total: R{total}
        </p>
      </div>

      {/* CHECKOUT BUTTON */}
      <button
        onClick={handleCheckout}
        className="mt-6 w-full bg-orange-500 text-black p-3 rounded-xl font-bold"
      >
        Pay with Paystack
      </button>

    </div>
  );
}
