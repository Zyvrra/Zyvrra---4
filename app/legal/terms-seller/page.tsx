export default function SellerTerms() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-4">Seller Terms & Conditions</h1>

      {/* INTRO */}
      <div className="bg-[#141414] p-4 rounded-xl mb-6">
        <p className="text-sm text-gray-300">
          These terms apply to all sellers listing products on Zyvrra. By
          selling on the platform, you agree to the following conditions.
        </p>
      </div>

      {/* PRODUCTS */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">1. Allowed Products</h2>
        <p className="text-gray-300 text-sm">
          Only physical fashion-related products are allowed, including clothing,
          sneakers, jewelry, streetwear, and accessories. Digital goods or
          prohibited items are not permitted.
        </p>
      </section>

      {/* ORDERS */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">2. Order Fulfillment</h2>
        <p className="text-gray-300 text-sm">
          Sellers are responsible for packaging, shipping, and providing valid
          tracking information for all orders.
        </p>
      </section>

      {/* PAYOUT SYSTEM */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">3. Payout System</h2>

        <p className="text-gray-300 text-sm">
          Payments are processed via Paystack and held until order completion.
          A payout is only released after delivery is confirmed and a 3-day
          (72-hour) dispute period has passed.
        </p>
      </section>

      {/* FEES */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">4. Platform Fees</h2>

        <p className="text-gray-300 text-sm">
          Zyvrra charges a platform fee based on collaboration status:
        </p>

        <ul className="list-disc ml-6 text-sm text-gray-300 mt-2">
          <li>10% platform fee if no creator contract exists</li>
          <li>8% platform fee if a creator contract exists</li>
        </ul>

        <p className="text-gray-300 text-sm mt-2">
          Platform fees are deducted from completed sales before payout.
        </p>
      </section>

      {/* CREATOR SYSTEM */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">5. Creator Collaborations</h2>

        <p className="text-gray-300 text-sm">
          Sellers may collaborate with creators (affiliates) to promote products.
          Each collaboration is governed by a contract agreed between both parties
          and submitted through Zyvrra.
        </p>

        <p className="text-gray-300 text-sm mt-2">
          In addition to agreed
