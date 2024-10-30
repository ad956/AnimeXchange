import React from "react";

export default function Footer() {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                AnimeXchange
              </div>
              <p className="text-gray-400">
                The ultimate anime NFT marketplace
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Art
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
