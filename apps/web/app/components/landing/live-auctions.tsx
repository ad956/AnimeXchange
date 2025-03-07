"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight, Timer, Gavel } from "lucide-react";

export default function LiveAuctions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const auctionImages = [
    "https://pbs.twimg.com/media/FM9yPhQagAAQ0NC?format=jpg&name=900x900",
    "https://w0.peakpx.com/wallpaper/687/429/HD-wallpaper-obito-uchiha-obito-naruto-akatsuki.jpg",
    "https://i.seadn.io/gae/_1wImpxvsLbsKgA9QF-4iy0SURMpuSQKuAXh6GESNBYmqMEDA7NVH6parC-Gxto_OQxvCMGs2GOHc5-tl8SlAE8IgJ7AFXFRIil1Jg?auto=format&dpr=1&w=1000",
    "https://i.pinimg.com/736x/7a/49/6b/7a496bf79cd12f4931243d77aec3de73.jpg",
    "https://www.gifcen.com/wp-content/uploads/2022/04/jujutsu-kaisen-gif-7.gif",
  ];

  const auctions = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: `Anime Masterpiece #${i + 1}`,
    artist: `Artist ${i + 1}`,
    currentBid: (0.5 + i * 0.1).toFixed(2),
    endTime: new Date(Date.now() + (i + 1) * 3600000), // hours from now
    image: auctionImages[i % auctionImages.length],
  }));

  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const times: { [key: number]: string } = {};

      auctions.forEach((auction) => {
        const now = new Date();
        const difference = auction.endTime.getTime() - now.getTime();

        if (difference <= 0) {
          times[auction.id] = "Ended";
          return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        times[auction.id] =
          `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      });

      setTimeLeft(times);
    }, 1000);

    return () => clearInterval(timer);
  }, [auctions]);

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < auctions.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount =
        currentIndex * (carouselRef.current.scrollWidth / auctions.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex, auctions.length]);

  return (
    <section id="auctions" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0 mb-12"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-1">
              <Gavel className="h-3.5 w-3.5 mr-1" />
              Live Now
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Live Auctions</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Bid on exclusive anime NFTs before they're gone. New auctions
              daily.
            </p>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={currentIndex >= auctions.length - 4}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </motion.div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 pb-4"
          >
            {auctions.map((auction, i) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="min-w-[280px] sm:min-w-[320px]"
              >
                <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                  <div className="relative">
                    <img
                      src={auction.image || "/placeholder.svg"}
                      alt={auction.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/70 text-white backdrop-blur-sm">
                        <Timer className="h-3 w-3 mr-1" />
                        {timeLeft[auction.id] || "Loading..."}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{auction.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      by {auction.artist}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Current Bid
                      </p>
                      <p className="font-bold">{auction.currentBid} ETH</p>
                    </div>
                    <Button size="sm">Place Bid</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
