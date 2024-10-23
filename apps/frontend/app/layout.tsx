import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

export const metadata: Metadata = {
  title: "AnimeXchange | Buy & Sell Exclusive Anime NFTs",
  description:
    "Discover and trade unique anime NFTs on AnimeXchange - the premier marketplace for digital anime collectibles, artwork, and exclusive fan content.",
  keywords:
    "anime NFTs, digital collectibles, anime artwork, NFT marketplace, anime trading, digital art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={``}>{children}</body>
    </html>
  );
}
