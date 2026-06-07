import { NextResponse } from "next/server";
import crypto from "crypto";
import { createOrder } from "@/lib/orders";
import { addOrder } from "@/lib/orderStore";

export async function POST(req: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY!;

    const body = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    // 🔐 VERIFY PAYSTACK REQUEST
    const hash = crypto
      .createHmac("sha512", secret)
      .update(body)
      .digest("hex");

    if (hash !== signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    // ✔ ONLY PROCESS SUCCESSFUL PAYMENTS
    if (event.event === "charge.success") {
      const data = event.data;

      const metadata = data.metadata || {};

      // 🧠 CREATE ORDER AFTER PAYMENT
      const order = createOrder({
        buyerId: metadata.buyerId || "unknown",
        sellerId: metadata.sellerId || "unknown",

        creatorId: metadata.creatorId,
        affiliateLinkCode: metadata.affiliateLinkCode,

        productName: metadata.productName || "Product",
        amount: data.amount / 100,
        deliveryFee: metadata.deliveryFee || 75,
      });

      await addOrder(order);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
