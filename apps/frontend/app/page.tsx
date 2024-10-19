import { Award, ShoppingCart, Wallet, TrendingUp, Users } from "lucide-react";

const FEATURED_COLLECTIONS = [
  {
    name: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/I/81qPzeEO5IL._AC_UF1000,1000_QL80_.jpg",
    floor: "2.5 ETH",
    volume: "1.2K ETH",
  },
  {
    name: "One Piece",
    image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974743278/one-piece-vol-105-9781974743278_hr.jpg",
    floor: "1.8 ETH",
    volume: "2.5K ETH",
  },
  {
    name: "Jujutsu Kaisen",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9320740-8135905092-97840.jpg",
    floor: "1.2 ETH",
    volume: "950 ETH",
  },
  {
    name: "Dragon Ball",
    image:
      "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-700x394.png",
    floor: "3.0 ETH",
    volume: "3.2K ETH",
  },
];

const HERO_IMAGES = [
  "https://m.media-amazon.com/images/I/71z4V6fR1vL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Collections</h2>
          <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
            <span>View All</span>
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {FEATURED_COLLECTIONS.map((collection, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{collection.name}</h3>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-400">Floor</p>
                    <p className="font-medium">{collection.floor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Volume</p>
                    <p className="font-medium">{collection.volume}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Top Creators</h2>
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
              <span>View All</span>
              <Users className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((creator) => (
              <div
                key={creator}
                className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl"
              >
                <img
                  src="/api/placeholder/64/64"
                  alt={`Creator ${creator}`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Creator {creator}</h3>
                  <p className="text-purple-400">10.5K NFTs</p>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}
