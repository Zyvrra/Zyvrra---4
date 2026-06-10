import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zyvrra | African Social Commerce",
  description: "The electrifying social commerce platform for African creators and products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen pb-20">
        {/* ANIMATED BACKGROUND ELEMENTS */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        </div>

        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-gradient-to-b from-black via-black to-transparent border-b border-orange-500/20 backdrop-blur-md">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-black gradient-text">
                ⚡ Zyvrra
              </h1>

              <button className="btn-neon text-xs px-3 py-2">
                🔍 Search
              </button>
            </div>

            <div className="flex gap-6 text-sm font-semibold">
              <button className="relative pb-2 text-orange-400">
                For You
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
              </button>

              <button className="text-gray-400 hover:text-orange-400 transition">
                Following
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-md mx-auto relative z-10">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent border-t border-orange-500/20 backdrop-blur-md flex justify-around items-center h-20 z-50">

          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-xs font-semibold group transition-all duration-300"
          >
            <span className="text-2xl group-hover:scale-125 group-hover:text-orange-400 transition-all duration-300">🏠</span>
            <span className="group-hover:text-orange-400">Feed</span>
          </Link>

          <Link
            href="/category"
            className="flex flex-col items-center gap-1 text-xs font-semibold group transition-all duration-300"
          >
            <span className="text-2xl group-hover:scale-125 group-hover:text-orange-400 transition-all duration-300">🧭</span>
            <span className="group-hover:text-orange-400">Explore</span>
          </Link>

          <Link
            href="/upload"
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center -mt-6 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110">
                <span className="text-3xl font-bold">+</span>
              </div>
            </div>
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center gap-1 text-xs font-semibold group transition-all duration-300"
          >
            <span className="text-2xl group-hover:scale-125 group-hover:text-orange-400 transition-all duration-300">🛒</span>
            <span className="group-hover:text-orange-400">Cart</span>
          </Link>

          <Link
            href="/me"
            className="flex flex-col items-center gap-1 text-xs font-semibold group transition-all duration-300"
          >
            <span className="text-2xl group-hover:scale-125 group-hover:text-orange-400 transition-all duration-300">👤</span>
            <span className="group-hover:text-orange-400">Me</span>
          </Link>

        </nav>
      </body>
    </html>
  );
}