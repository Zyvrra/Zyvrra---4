import "./globals.css";

export const metadata = {
  title: "Zyvrra",
  description:
    "African Urban Social Commerce Marketplace for Fashion, Creators & Sellers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
