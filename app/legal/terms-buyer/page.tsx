export default function BuyerTerms() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-4">Buyer Terms & Conditions</h1>

      {/* INTRO */}
      <div className="bg-[#141414] p-4 rounded-xl mb-6">
        <p className="text-sm text-gray-300">
          These terms apply when you purchase items on Zyvrra. By placing an
          order, you agree to these conditions.
        </p>
      </div>

      {/* WHAT YOU BUY */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">1. What You Can Buy</h2>
        <p className="text-gray-300 text-sm">
          Zyvrra only supports physical fashion products including clothing,
          sneakers, jewelry, streetwear, and accessories. No digital goods or
          prohibited items are allowed.
        </p>
      </section>

      {/* PAYMENT */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">2. Payments</h2>
        <p className="text-gray-300 text-sm">
          All payments are processed securely via Paystack. Once payment is
          successful, your order is confirmed and sent to the seller for
          fulfillment.
        </p>
      </section>

      {/* DELIVERY */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">3. Delivery</h2>
        <p className="text-gray-300 text-sm">
          Delivery times vary depending on the seller and location. Sellers
          are responsible for shipping and providing tracking information.
        </p>
      </section>

      {/* DISPUTES */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">4. Disputes & Protection</h2>
        <p className="text-gray-300 text-sm">
          Once your order is marked as delivered, you have a 3-day (72-hour)
          window to report any issues such as:
        </p>

        <ul className="list-disc ml-6 text-sm text-gray-300">
          <li>Wrong item received</li>
          <li>Damaged product</li>
          <li>Item not received</li>
        </ul>

        <p className="text-gray-300 text-sm mt-2">
          If no dispute is raised within 3 days, the order is considered
          completed.
        </p>
      </section>

      {/* FINAL */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold">5. Final Agreement</h2>
        <p className="text-gray-300 text-sm">
          Zyvrra acts as a marketplace connecting buyers and independent
          sellers. We facilitate transactions but do not directly manufacture
          or ship products.
        </p>
      </section>

    </div>
  );
}
