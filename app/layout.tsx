import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Zyvrra",
  description:
    "African Urban Social Commerce Marketplace for Fashion, Creators & Sellers"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* TOP NAV (simple global navigation for MVP) */}
        <nav className="w-full flex justify-between items-center p-4 border-b border-gray-800">
          
          <Link href="/" className="font-bold text-lg">
            Zyvrra
          </Link>

          <div className="flex gap-4 text-sm text-gray-300">
            <Link href="/feed">Feed</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/legal/paystack-info">Paystack Info</Link>
          </div>
        </nav>

        {/* MAIN APP */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER (important for Paystack trust + legitimacy) */}
        <footer className="border-t border-gray-800 p-6 text-xs text-gray-400 space-y-2">
          <p>© {new Date().getFullYear()} Zyvrra. All rights reserved.</p>

          <p>
            Zyvrra is a social commerce platform for physical fashion products
            including clothing, sneakers, jewelry, and streetwear.
          </p>

          <p>
            Payments are processed securely via Paystack. Orders are fulfilled
            by independent sellers.
          </p>

          <div className="flex gap-4 underline">
            <Link href="/legal/terms-buyer">Buyer Terms</Link>
            <Link href="/legal/terms-seller">Seller Terms</Link>
            <Link href="/legal/terms-creator">Creator Terms</Link>
          </div>
        </footer>

      </body>
    </html>
  );
}
