import "./globals.css";

export const metadata = {
  title: "Zyvrra",
  description: "African Urban Fashion Marketplace"
};

export default function RootLayout({
  children
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
