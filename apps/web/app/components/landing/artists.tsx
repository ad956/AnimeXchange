"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Twitter, Instagram, ExternalLink, Palette } from "lucide-react";

export default function Artists() {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const [artists, setArtists] = useState<
    {
      id: number;
      name: string;
      username: string;
      bio: string;
      followers: number;
      image: string;
      featured: boolean;
    }[]
  >([]);

  const artistImages = [
    "https://pbs.twimg.com/media/FM9yPhQagAAQ0NC?format=jpg&name=900x900",
    "https://w0.peakpx.com/wallpaper/687/429/HD-wallpaper-obito-uchiha-obito-naruto-akatsuki.jpg",
    "https://i.seadn.io/gae/_1wImpxvsLbsKgA9QF-4iy0SURMpuSQKuAXh6GESNBYmqMEDA7NVH6parC-Gxto_OQxvCMGs2GOHc5-tl8SlAE8IgJ7AFXFRIil1Jg?auto=format&dpr=1&w=1000",
    "https://i.pinimg.com/736x/7a/49/6b/7a496bf79cd12f4931243d77aec3de73.jpg",
  ];

  useEffect(() => {
    const generatedArtists = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      name: `Artist ${i + 1}`,
      username: `artist${i + 1}`,
      bio: "Digital artist specializing in anime and manga style illustrations.",
      followers: Math.floor(Math.random() * 10000) + 1000, // Ensure this runs only on the client
      image: artistImages[i % artistImages.length] ?? "",
      featured: i < 2,
    }));
    setArtists(generatedArtists);
  }, []);

  return (
    <section id="artists" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-1">
            <Palette className="h-3.5 w-3.5 mr-1" />
            Featured Creators
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Artists</h2>
          <p className="text-muted-foreground max-w-[800px]">
            Discover talented creators behind the most sought-after anime NFT
            collections.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              onMouseEnter={() => setHoveredArtist(artist.id)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <Card className="overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                <div className="relative">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full aspect-square object-cover"
                  />
                  {artist.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary">Featured Artist</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      @{artist.username}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {artist.bio}
                    </p>
                    <p className="text-sm font-medium mb-4">
                      {artist.followers.toLocaleString()} Followers
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="default" className="w-full">
                      View Collection
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg">
            View All Artists
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
