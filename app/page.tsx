import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      {/* BRAND */}
      <h1 className="text-5xl font-bold text-orange-400">
        Zyvrra
      </h1>

      <p className="text-gray-400 mt-3 text-center max-w-md">
        A creator-powered marketplace where content meets commerce.
      </p>

      {/* CTA BUTTON */}
      <Link
        href="/feed"
        className="mt-8 bg-orange-500 text-black px-6 py-3 rounded-xl font-bold text-lg"
      >
        Enter Marketplace
      </Link>

      {/* SECONDARY OPTIONS */}
      <div className="mt-6 flex gap-4 text-sm text-gray-400">
        <Link href="/login" className="hover:text-white">
          Login
        </Link>

        <Link href="/seller-hub" className="hover:text-white">
          Seller Hub
        </Link>

        <Link href="/creator-hub" className="hover:text-white">
          Creator Hub
        </Link>
      </div>

      {/* FOOTER NOTE */}
      <p className="text-xs text-gray-600 mt-10 text-center">
        Built for creators, sellers, and digital commerce.
      </p>

    </div>
  );
}
