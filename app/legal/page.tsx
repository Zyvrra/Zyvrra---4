import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-2">Zyvrra Legal Center</h1>

      <p className="text-gray-400 mb-8">
        Transparency, trust, and platform rules for buyers, sellers, and creators.
      </p>

      {/* PAYSTACK DESCRIPTION BOX */}
      <div className="bg-[#141414] p-4 rounded-xl mb-6">
        <h2 className="font-bold text-lg mb-2">Platform Overview</h2>
        <p className="text-sm text-gray-300">
          Zyvrra is a social commerce marketplace for African fashion brands.
          Sellers list physical products such as clothing, sneakers, jewelry,
          and streetwear. Buyers purchase items through a TikTok-style feed.
          Payments are processed securely via Paystack.
        </p>
      </div>

      {/* LINKS */}
      <div className="space-y-4">

        <Link
          href="/legal/terms-buyer"
          className="block bg-[#141414] p-4 rounded-xl"
        >
          <h3 className="font-bold">Buyer Terms</h3>
          <p className="text-sm text-gray-400">
            Rules for purchasing, refunds, and disputes
          </p>
        </Link>

        <Link
          href="/legal/terms-seller"
          className="block bg-[#141414] p-4 rounded-xl"
        >
          <h3 className="font-bold">Seller Terms</h3>
          <p className="text-sm text-gray-400">
            Platform fees, payouts, and responsibilities
          </p>
        </Link>

        <Link
          href="/legal/terms-creator"
          className="block bg-[#141414] p-4 rounded-xl"
        >
          <h3 className="font-bold">Creator Terms</h3>
          <p className="text-sm text-gray-400">
            Affiliate earnings and collaboration rules
          </p>
        </Link>

        <Link
          href="/legal/paystack-info"
          className="block bg-[#141414] p-4 rounded-xl"
        >
          <h3 className="font-bold">Paystack & Business Info</h3>
          <p className="text-sm text-gray-400">
            How Zyvrra handles payments and order flow
          </p>
        </Link>

      </div>

      {/* FOOTER TRUST NOTE */}
      <div className="mt-10 text-xs text-gray-500">
        Zyvrra only supports physical fashion products and does not allow
        prohibited goods. All transactions are processed via Paystack.
      </div>

    </div>
  );
}
