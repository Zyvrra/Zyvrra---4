export default function CreatorTerms() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-4">Creator Terms & Conditions</h1>

      {/* INTRO */}
      <div className="bg-[#141414] p-4 rounded-xl mb-6">
        <p className="text-sm text-gray-300">
          These terms apply to creators (affiliates) who promote seller products
          on Zyvrra using unique tracking links and content posts.
        </p>
      </div>

      {/* ROLE */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">1. Creator Role</h2>
        <p className="text-gray-300 text-sm">
          Creators are independent users who promote products listed by sellers
          on Zyvrra. Creators are not employees of Zyvrra and operate as
          independent marketing partners.
        </p>
      </section>

      {/* AFFILIATE SYSTEM */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">2. Affiliate Links</h2>
        <p className="text-gray-300 text-sm">
          Each creator collaboration generates a unique affiliate link tied to a
          specific seller. All clicks, views, and purchases from that link are
          tracked by Zyvrra for commission calculation.
        </p>
      </section>

      {/* EARNINGS */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">3. Earnings Structure</h2>

        <p className="text-gray-300 text-sm">
          Creators earn income from two sources:
        </p>

        <ul className="list-disc ml-6 text-sm text-gray-300 mt-2">
          <li>
            Contract-based commission agreed with the seller (percentage or fixed fee)
          </li>
          <li>
            Zyvrra bonus commission of 2% per successful sale generated through
            their affiliate link
          </li>
        </ul>
      </section>

      {/* PAYOUT TIMING */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">4. Payment Timing</h2>

        <p className="text-gray-300 text-sm">
          Creator earnings are released in two stages:
        </p>

        <ul className="list-disc ml-6 text-sm text-gray-300 mt-2">
          <li>
            Partial payout after content and campaign activation
          </li>
          <li>
            Remaining payout after order delivery and completion of the 3-day
            dispute period
          </li>
        </ul>
      </section>

      {/* CONTRACT RULES */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">5. Contracts</h2>

        <p className="text-gray-300 text-sm">
          All creator-seller collaborations must be agreed upon through a
          Zyvrra-generated contract. Contracts define commission percentages,
          campaign terms, and responsibilities of both parties.
        </p>
      </section>

      {/* RESPONSIBILITY */}
      <section className="space-y-2 mb-6">
        <h2 className="text-xl font-bold">6. Responsibilities</h2>

        <p className="text-gray-300 text-sm">
          Creators are responsible for producing and publishing content
          promoting seller products. Zyvrra does not guarantee sales performance.
        </p>
      </section>

      {/* FINAL */}
      <section>
        <h2 className="text-xl font-bold">7. Final Agreement</h2>

        <p className="text-gray-300 text-sm">
          Creators acknowledge that Zyvrra acts as a marketplace platform
          connecting sellers and creators, and is not responsible for individual
          contract disputes between both parties.
        </p>
      </section>

    </div>
  );
}
