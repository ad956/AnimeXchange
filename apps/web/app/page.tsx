import Hero from "@components/landing/hero";
import FeaturedNFTs from "@components/landing/featured-nfts";
import HowItWorks from "@components/landing/how-it-works";
import LiveAuctions from "@components/landing/live-auctions";
import WhyChooseUs from "@components/landing/why-choose-us";
import Artists from "@components/landing/artists";
import Testimonials from "@components/landing/testimonials";
import Roadmap from "@components/landing/roadmap";
import Newsletter from "@components/landing/newsletter";
import Footer from "@components/landing/footer";
import { ModeToggle } from "@components/landing/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              AnimeXchange
            </span>
            <span className="text-xl"></span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#featured"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#auctions"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Auctions
            </a>
            <a
              href="#artists"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Artists
            </a>
            <a
              href="#roadmap"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Roadmap
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a
              href="#"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <Hero />
        <FeaturedNFTs />
        <HowItWorks />
        <LiveAuctions />
        <WhyChooseUs />
        <Artists />
        <Testimonials />
        <Roadmap />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
