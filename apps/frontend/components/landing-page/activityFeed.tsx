"use client";

import { Activity, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: "Sale",
    collection: "Attack on Titan",
    item: "Levi #123",
    price: "2.1 ETH",
    buyer: "0x1234...5678",
    seller: "0x8765...4321",
    time: "2 mins ago",
    image:
      "https://i.pinimg.com/736x/31/a8/c6/31a8c614b66dd9a79907837db011b8a7.jpg",
  },
  {
    id: 2,
    type: "Sale",
    collection: "One Piece",
    item: "Luffy #456",
    price: "1.8 ETH",
    buyer: "0x2345...6789",
    seller: "0x9876...5432",
    time: "5 mins ago",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGduV60eslGlqVPYITEB4GT91NEWHMJnvdjg&s",
  },
  {
    id: 3,
    type: "Sale",
    collection: "Demon Slayer",
    item: "Tanjiro #789",
    price: "1.5 ETH",
    buyer: "0x3456...7890",
    seller: "0x0987...6543",
    time: "8 mins ago",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
  },
];

const LiveActivityFeed = () => {
  const [activities, setActivities] = useState(RECENT_ACTIVITIES);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev: any) => {
        const newActivities = [...prev];
        const last = newActivities.pop();
        if (last) {
          newActivities.unshift({
            ...last,
            id: last.id + prev.length,
            time: "Just now",
          });
        }
        return newActivities;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800/30 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-5 h-5 text-purple-400" />
        <h3 className="text-xl font-semibold">Live Activity</h3>
      </div>
      <div className="space-y-4">
        {activities.map((activity: any) => (
          <div
            key={activity.id}
            className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-700 transition-all animate-fade-in"
          >
            <img
              src={activity.image}
              alt={activity.collection}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{activity.item}</h4>
                  <p className="text-sm text-gray-400">{activity.collection}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-purple-400">
                    {activity.price}
                  </p>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {activity.buyer.slice(0, 8)}... → {activity.seller.slice(0, 8)}
                ...
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ActivityFeed() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LiveActivityFeed />
        <div className="bg-gray-800/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-semibold">Market Stats</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm">24h Volume</p>
              <p className="text-2xl font-bold text-purple-400">1,234 ETH</p>
              <p className="text-sm text-green-400">↑ 12.34%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Floor Price</p>
              <p className="text-2xl font-bold text-purple-400">2.5 ETH</p>
              <p className="text-sm text-red-400">↓ 3.21%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Total Sales</p>
              <p className="text-2xl font-bold text-purple-400">5,678</p>
              <p className="text-sm text-green-400">↑ 5.67%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm">Unique Holders</p>
              <p className="text-2xl font-bold text-purple-400">3,456</p>
              <p className="text-sm text-green-400">↑ 2.45%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
