export default function SellerTerms() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        Seller Terms & Conditions
      </h1>

      <div className="bg-[#141414] p-4 rounded-xl mb-6">
        <p className="text-sm text-gray-300">
          These terms apply to all sellers listing products on Zyvrra.
          By selling on the platform, you agree to the following
          conditions.
        </p>
      </div>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">1. Allowed Products</h2>
        <p className="text-gray-300 text-sm">
          Only physical fashion-related products are allowed,
          including clothing, sneakers, jewelry, streetwear and
          accessories. Digital goods and prohibited items are not
          permitted.
        </p>
      </section>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">2. Order Fulfillment</h2>
        <p className="text-gray-300 text-sm">
          Sellers are responsible for packaging, shipping and
          providing valid tracking information for all orders.
        </p>
      </section>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">3. Payout System</h2>

        <p className="text-gray-300 text-sm">
          Payments are processed through Paystack and held until
          delivery is confirmed. Seller payouts are released after
          the 3-day dispute protection period has passed.
        </p>
      </section>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">4. Platform Fees</h2>

        <ul className="list-disc ml-6 text-sm text-gray-300">
          <li>10% platform fee when no creator contract exists.</li>
          <li>8% platform fee when an active creator contract exists.</li>
        </ul>
      </section>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">
          5. Creator Collaborations
        </h2>

        <p className="text-gray-300 text-sm">
          Sellers may collaborate with creators to promote products.
          Collaborations must be managed through Zyvrra contracts.
        </p>

        <p className="text-gray-300 text-sm mt-2">
          Sellers choose the creator commission percentage. Zyvrra
          adds an additional 2% creator bonus and charges the seller
          according to the platform fee structure.
        </p>
      </section>

      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">6. Disputes</h2>

        <p className="text-gray-300 text-sm">
          Zyvrra may temporarily hold payouts while disputes are
          investigated. Fraudulent activity may result in account
          suspension or permanent removal from the platform.
        </p>
      </section>
    </div>
  );
}
