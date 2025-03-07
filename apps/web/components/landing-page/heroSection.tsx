import React from "react";

const HERO_IMAGES = [
  "https://m.media-amazon.com/images/I/71z4V6fR1vL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg",
];

export default function HeroSection() {
  return (
    <>
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
              {HERO_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 p-4 rounded-xl ${index === 1 ? "mt-8" : ""}`}
                >
                  <img
                    src={img}
                    alt="Anime NFT"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400">100K+</p>
              <p className="text-gray-400 mt-2">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400">50K+</p>
              <p className="text-gray-400 mt-2">NFTs Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400">10K+</p>
              <p className="text-gray-400 mt-2">Artists</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400">5K ETH</p>
              <p className="text-gray-400 mt-2">Trading Volume</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
