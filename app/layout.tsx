import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zyvrra",
  description: "Social Commerce Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-zinc-900 min-h-screen pb-20">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-zinc-200">
          <div className="max-w-md mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-extrabold">
                Zyvrra
              </h1>

              <button className="bg-zinc-100 px-4 py-2 rounded-full text-sm">
                🔍 Search
              </button>
            </div>

            <div className="flex gap-6 mt-3 text-sm font-medium">
              <button className="border-b-2 border-black pb-1">
                For You
              </button>

              <button className="text-zinc-500">
                Following
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-md mx-auto">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-around items-center h-16 z-50">

          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-xs"
          >
            <span className="text-xl">🏠</span>
            <span>Feed</span>
          </Link>

          <Link
            href="/category"
            className="flex flex-col items-center gap-1 text-xs"
          >
            <span className="text-xl">🧭</span>
            <span>Explore</span>
          </Link>

          <Link
            href="/upload"
            className="flex flex-col items-center"
          >
            <div className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center -mt-5 shadow-lg">
              <span className="text-2xl font-bold">+</span>
            </div>
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center gap-1 text-xs"
          >
            <span className="text-xl">🛒</span>
            <span>Cart</span>
          </Link>

          <Link
            href="/me"
            className="flex flex-col items-center gap-1 text-xs"
          >
            <span className="text-xl">👤</span>
            <span>Me</span>
          </Link>

        </nav>
      </body>
    </html>
  );
}
