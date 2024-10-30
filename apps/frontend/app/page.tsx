import {
  ActivityFeed,
  FeaturedCollections,
  Footer,
  Navbar,
  HeroSection,
  TopCreators,
  Features,
} from "@components/landing-page";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <Features />
      <FeaturedCollections />
      <TopCreators />
      <ActivityFeed />
      <Footer />
    </div>
  );
}
