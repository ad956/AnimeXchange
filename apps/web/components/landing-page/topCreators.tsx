import React from "react";
import { CREATORS } from "@constants";
import { Users } from "lucide-react";

export default function TopCreators() {
  return (
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
          {CREATORS.map((creator: any, index: number) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition duration-300"
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
              />
              <div>
                <h3 className="font-semibold">{creator.name}</h3>
                <p className="text-purple-400">{creator.nfts} NFTs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
