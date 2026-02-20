import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AvaxLens — Smart Contract Analytics for Avalanche",
  description:
    "Free instant smart contract analytics for Avalanche developers. Paste any C-Chain contract address — get transaction volume, gas usage, function breakdown, and error logs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
