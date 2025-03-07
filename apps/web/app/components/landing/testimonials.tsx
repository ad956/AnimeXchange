"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Quote,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Star,
  Twitter,
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Yuki Tanaka",
      role: "Collector",
      avatar:
        "https://photosbull.com/wp-content/uploads/2024/05/anime-dp-22.jpg",
      content:
        "AnimeXchange has transformed how I collect anime art. The platform is intuitive, and the NFT selection is unmatched. I've found rare pieces I couldn't find anywhere else!",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Johnson",
      role: "Digital Artist",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglZdIG6QNPeJfpcsOF8KD2O83KaBIixp0Tg&s",
      content:
        "As an artist, I appreciate how AnimeXchange makes it easy to showcase my work and connect with fans. The royalty system is fair, and the community is incredibly supportive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mei Lin",
      role: "Anime Enthusiast",
      avatar:
        "https://res.cloudinary.com/doahnjt5z/image/upload/v1736261733/assets/mjk6lu5mxl23pubbpyhb.png",
      content:
        "I've been collecting anime merchandise for years, but NFTs on AnimeXchange bring a whole new dimension to my hobby. The exclusive drops are always exciting!",
      rating: 4,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Crypto Investor",
      avatar:
        "https://res.cloudinary.com/doahnjt5z/image/upload/v1736261497/animeXchange/vztjnfu17ma7hdbsxv8v.jpg",
      content:
        "The security and transparency of AnimeXchange are impressive. As someone who values both art and investment, this platform offers the perfect balance.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-1">
            <MessageSquare className="h-3.5 w-3.5 mr-1" />
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-[800px]">
            Hear from collectors and creators who are part of the AnimeXchange
            ecosystem.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-primary/50 mb-6" />

                    <p className="text-lg md:text-xl mb-6 italic">
                      "{testimonials[currentIndex]!.content}"
                    </p>

                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonials[currentIndex]!.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center flex-col">
                      <img
                        src={
                          testimonials[currentIndex]!.avatar ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex]!.name}
                        className="w-16 h-16 rounded-full mb-4"
                      />
                      <h3 className="font-semibold">
                        {testimonials[currentIndex]!.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex]!.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
        >
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">Join Our Community</h3>
            <p className="text-muted-foreground">
              Connect with fellow anime enthusiasts, artists, and collectors in
              our vibrant Discord community.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
            <Button className="gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join Discord
            </Button>
            <Button variant="outline" className="gap-2">
              <Twitter className="h-5 w-5" />
              Follow on Twitter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
