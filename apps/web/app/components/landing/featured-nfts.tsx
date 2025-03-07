"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Badge } from "@components/ui/badge";
import { Heart, Zap } from "lucide-react";

export default function FeaturedNFTs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [randomBidTimes, setRandomBidTimes] = useState<number[]>([]);

  const collections = [
    {
      name: "Trending",
      items: 8,
      images: [
        "https://i.pinimg.com/736x/4d/ef/c7/4defc7451555ebf7594377b388eb771d.jpg",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTNlMHV2Y25zZmUyNDV3cWEwdG9ibHIxYXNlNzNtamM5MnRibWNicCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EjLTU9HAnnskywtJ9j/giphy.gif",
        "https://i.pinimg.com/736x/62/a6/13/62a613d34e92c602d7486eb1fdcaf5a2.jpg",
        "https://i.pinimg.com/736x/a2/70/5b/a2705b0a29d6aef3457aaab118587ba9.jpg",
        "https://giffiles.alphacoders.com/222/222254.gif",
        "https://i.pinimg.com/736x/b3/e2/22/b3e2224b8c6535390ecd8d86b10799dd.jpg",
        "https://i.pinimg.com/736x/01/86/18/018618de61a3aa4c35a2876e6a8239c6.jpg",
        "https://i.pinimg.com/736x/2e/0b/8d/2e0b8d709643f2a612dd349fabca353a.jpg",
      ],
    },
    {
      name: "New Releases",
      items: 8,
      images: [
        "https://giffiles.alphacoders.com/223/223323.gif",
        "https://i.pinimg.com/736x/27/c4/35/27c43565337ac2141b4a91c097622816.jpg",
        "https://i.pinimg.com/736x/b8/c3/ad/b8c3adb599430a4acffcc9b2368787c1.jpg",
        "https://i.pinimg.com/736x/38/0e/ad/380ead26da351a7fea25d0dfd300e1ff.jpg",
        "https://i.pinimg.com/736x/97/0d/de/970ddec338b12336e5f78e5b7ecf1c3d.jpg",
        "https://i.pinimg.com/736x/41/8a/0e/418a0e34e05b593e742903f45b3e8350.jpg",
        "https://i.pinimg.com/736x/79/37/8c/79378cf923d739bae1f2e7d3a10a3e45.jpg",
        "https://i.pinimg.com/736x/bb/fd/c9/bbfdc9a370126e95120ba5f5fa5261d9.jpg",
      ],
    },
    {
      name: "Curated",
      items: 8,
      images: [
        "https://i.pinimg.com/736x/c7/a9/16/c7a91604cbddc7e377b739ed0f658ed1.jpg",
        "https://i.pinimg.com/736x/2a/b9/b6/2ab9b640599ad192ba1bbbce27e674fb.jpg",
        "https://i.pinimg.com/736x/c9/6c/0f/c96c0fff357d98600f9441831b3f33bd.jpg",
        "https://i.pinimg.com/736x/b3/5f/6c/b35f6c387ee069d32a0e53f44e44fbcf.jpg",
        "https://i.pinimg.com/736x/c3/53/57/c35357c1e623b9cba5a36f8ecb31f35f.jpg",
        "https://i.pinimg.com/736x/ff/a9/04/ffa90416d0cbbfbcaf07c487302cf5e7.jpg",
        "https://i.pinimg.com/736x/b5/40/8d/b5408d279a48beb1ec3fb5e39d337c98.jpg",
        "https://i.pinimg.com/736x/09/ba/ba/09babaeb0c40032740db5665ca9de3ae.jpg",
      ],
    },
  ];

  // Generate random bid times only on the client
  useEffect(() => {
    setRandomBidTimes(
      Array.from({ length: 8 }, () => Math.floor(Math.random() * 24) + 1)
    );
  }, []);

  return (
    <section id="featured" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-1">
            <Zap className="h-3.5 w-3.5 mr-1" />
            Featured Collections
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover Rare Anime NFTs
          </h2>
          <p className="text-muted-foreground max-w-[800px]">
            Explore the most sought-after digital collectibles from renowned
            anime and manga series.
          </p>
        </motion.div>

        <Tabs defaultValue="Trending" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            {collections.map((collection) => (
              <TabsTrigger key={collection.name} value={collection.name}>
                {collection.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {collections.map((collection) => (
            <TabsContent key={collection.name} value={collection.name}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: collection.items }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -8 }}
                    onHoverStart={() => setHoveredCard(i)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                      <div className="relative">
                        <img
                          src={`${collection.images[i % collection.images.length]}`}
                          alt={`${collection.name} NFT ${i + 1}`}
                          className="w-full aspect-square object-cover transition-transform duration-700 ease-in-out"
                          style={{
                            transform:
                              hoveredCard === i ? "scale(1.05)" : "scale(1)",
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full">
                          <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
                        </div>
                        {i % 3 === 0 && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-primary">Hot</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold truncate">
                          {collection.name} #{i + 1}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Artist Name
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Current Bid
                          </p>
                          <p className="font-bold">
                            {(0.1 + i * 0.05).toFixed(2)} ETH
                          </p>
                        </div>
                        <Badge variant="outline" className="font-normal">
                          {randomBidTimes[i] ?? 0}h left
                        </Badge>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
