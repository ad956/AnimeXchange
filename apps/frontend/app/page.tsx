import { Award, ShoppingCart, Wallet } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AnimeXchange
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-400 transition">
                Explore
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                Create
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                Community
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Discover, Collect, and Trade Anime NFTs
            </h1>
            <p className="text-gray-400 text-xl mb-8">
              The ultimate marketplace for anime and manga digital collectibles.
              Own unique pieces of your favorite series.
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition">
                Start Exploring
              </button>
              <button className="border border-purple-600 hover:border-purple-400 px-8 py-3 rounded-full text-lg font-semibold transition">
                Create NFT
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-xl">
                <Image
                  src="https://i.pinimg.com/originals/4a/8c/d0/4a8cd0fa79f93ee3531e6083ca2234b5.jpg"
                  alt="Anime NFT"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-xl mt-8">
                <Image
                  src="https://i.pinimg.com/originals/4a/8c/d0/4a8cd0fa79f93ee3531e6083ca2234b5.jpg"
                  alt="Anime NFT"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose AnimeXchange
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Wallet</h3>
              <p className="text-gray-400">
                Connect your wallet and start collecting your favorite anime
                NFTs securely.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Trading</h3>
              <p className="text-gray-400">
                Buy and sell NFTs with ease using our intuitive marketplace
                interface.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-gray-400">
                Access unique anime and manga collectibles from top creators.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Trending Collections</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition"
            >
              <Image
                src="https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg"
                alt="Collection"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Anime Collection #{item}</h3>
                <p className="text-gray-400">Floor: 0.5 ETH</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your NFT Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of collectors and creators in the anime NFT space
          </p>
          <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </div>

      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-0">
              AnimeXchange
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-400 transition">
                Terms
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                Help
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
