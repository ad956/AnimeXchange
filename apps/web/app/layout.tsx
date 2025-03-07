import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AnimeXchange | Buy & Sell Exclusive Anime NFTs",
  description:
    "Discover and trade unique anime NFTs on AnimeXchange - the premier marketplace for digital anime collectibles, artwork, and exclusive fan content.",
  keywords:
    "anime NFTs, digital collectibles, anime artwork, NFT marketplace, anime trading, digital art",
  authors: [{ name: "Anand Suthar", url: "https://github.com/ad956" }],
  creator: "Anand Suthar",
  applicationName: "AnimeXchange",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  publisher: "Anand Suthar",
  robots: "index, follow",
  metadataBase: new URL("https://animexchange.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://animexchange.vercel.app",
    title: "AnimeXchange",
    description:
      "Discover and trade unique anime NFTs on AnimeXchange - the premier marketplace for digital anime collectibles, artwork, and exclusive fan content.",
    siteName: "AnimeXchange",
    images: [
      {
        url: "https://res.cloudinary.com/dtkfvp2ic/image/upload/v1711037583/patient_yluzvs_bnz9ox.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
