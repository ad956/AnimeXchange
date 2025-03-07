import React from "react";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-50">
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
  );
}
