"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { CREATORS } from "@constants";

const FEATURED_COLLECTIONS = [
  {
    name: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/I/81qPzeEO5IL._AC_UF1000,1000_QL80_.jpg",
    floor: "2.5 ETH",
    volume: "1.2K ETH",
    creator:
      "https://res.cloudinary.com/dtkfvp2ic/image/upload/v1729359443/animexchange/wallpaperflare.com_wallpaper_7_fc6ves.jpg",
  },
  {
    name: "One Piece",
    image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974743278/one-piece-vol-105-9781974743278_hr.jpg",
    floor: "1.8 ETH",
    volume: "2.5K ETH",
    creator:
      "https://res.cloudinary.com/dtkfvp2ic/image/upload/v1729359440/animexchange/1337253_zpjffi.jpg",
  },
  {
    name: "Jujutsu Kaisen",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9320740-8135905092-97840.jpg",
    floor: "1.2 ETH",
    volume: "950 ETH",
    creator:
      "https://res.cloudinary.com/dtkfvp2ic/image/upload/v1729359439/animexchange/satoru_gojo_shoko_ieiri_suguru_geto_blue_sky_background_hd_jujutsu_kaisen_wbe1od.jpg",
  },
  {
    name: "Dragon Ball",
    image:
      "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-700x394.png",
    floor: "3.0 ETH",
    volume: "3.2K ETH",
    creator: CREATORS[0].image,
  },
  {
    name: "Naruto Collection",
    image:
      "https://m.media-amazon.com/images/I/71z4V6fR1vL._AC_UF1000,1000_QL80_.jpg",
    floor: "2.1 ETH",
    volume: "1.8K ETH",
    creator: CREATORS[1].image,
  },
  {
    name: "Demon Slayer",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg",
    floor: "1.5 ETH",
    volume: "2.1K ETH",
    creator: CREATORS[2].image,
  },
];

const ScrollableCollections = () => {
  const scrollRef = useRef(null);

  const scroll = (direction: any) => {
    const container: any = scrollRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollTo({
        left:
          container.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-600 p-2 rounded-full z-10 hover:bg-purple-700 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {FEATURED_COLLECTIONS.map((collection, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2">
                <img
                  src={collection.creator}
                  alt="Creator"
                  className="w-8 h-8 rounded-full border-2 border-purple-500"
                />
              </div>
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
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-600 p-2 rounded-full z-10 hover:bg-purple-700 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function FeaturedCollections() {
  return (
    <div className="container mx-auto px-6 py-16 ">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Featured Collections</h2>
        <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300">
          <span>View All</span>
          <TrendingUp className="w-4 h-4" />
        </button>
      </div>
      <ScrollableCollections />
    </div>
  );
}
