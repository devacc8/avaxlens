import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvaxLens — Smart Contract Analytics for Avalanche",
  description:
    "Free smart contract analytics for Avalanche C-Chain. Paste any contract address — get transaction volume, gas usage, function breakdown, and error logs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-text-primary min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
