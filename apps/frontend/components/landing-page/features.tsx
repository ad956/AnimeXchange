import React from "react";
import { Wallet, ShoppingCart, Award } from "lucide-react";

export default function Features() {
  return (
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
              Connect your wallet and start collecting your favorite anime NFTs
              securely.
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
  );
}
