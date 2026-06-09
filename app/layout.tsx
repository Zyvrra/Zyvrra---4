import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ShoppingBag, Grid, User, Home } from "lucide-react"; // npm i lucide-react if you don't have it

export const metadata: Metadata = {
  title: "Zyvrra",
  description: "Fashion feed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen pb-20">
        {/* All pages render here */}
        <main>{children}</main>

        {/* Bottom Tab Bar - shows on every page */}
        <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 flex justify-around items-center h-16 z-50">
          <Link href="/" className="flex flex-col items-center gap-1 text-xs">
            <Home size={22} />
            <span>Feed</span>
          </Link>
          
          <Link href="/category" className="flex flex-col items-center gap-1 text-xs">
            <Grid size={22} />
            <span>Category</span>
          </Link>

          <Link href="/upload" className="flex flex-col items-center">
            <div className="bg-white text-black rounded-full p-3 -mt-4">
              <span className="text-2xl font-bold">+</span>
            </div>
          </Link>

          <Link href="/cart" className="flex flex-col items-center gap-1 text-xs">
            <ShoppingBag size={22} />
            <span>Cart</span>
          </Link>

          <Link href="/me" className="flex flex-col items-center gap-1 text-xs">
            <User size={22} />
            <span>Me</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
