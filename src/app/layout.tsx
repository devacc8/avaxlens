import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvaxLens — Smart Contract Analytics for Avalanche",
  description:
    "Free smart contract analytics for Avalanche C-Chain. Paste any contract address — get transaction volume, gas usage, function breakdown, and error logs.",
  openGraph: {
    title: "AvaxLens — Smart Contract Analytics for Avalanche",
    description:
      "Free analytics for any Avalanche C-Chain contract. Transaction volume, gas usage, function breakdown, AI security audits, CSV export.",
    url: "https://avaxlens.vercel.app",
    siteName: "AvaxLens",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AvaxLens — Smart Contract Analytics for Avalanche",
    description:
      "Free analytics for any Avalanche C-Chain contract. 18 features, 6 dashboard tabs, AI security audits.",
  },
  metadataBase: new URL("https://avaxlens.vercel.app"),
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
