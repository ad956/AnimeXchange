"use client";

import { motion } from "framer-motion";
import { Badge } from "@components/ui/badge";
import { Lock, Globe, Users, Shield, Zap, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Blockchain Security",
      description:
        "Every transaction is secured by blockchain technology for maximum protection.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Chain Support",
      description:
        "Trade across multiple blockchain networks including Ethereum, Polygon, and Solana.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community-Driven",
      description:
        "Engage with creators and collectors in our vibrant anime community.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Authenticity",
      description:
        "All NFTs are verified for authenticity to prevent fraud and ensure originality.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Transactions",
      description:
        "Lightning-fast transactions with minimal gas fees for a seamless experience.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Exclusive Drops",
      description:
        "Get access to exclusive anime NFT drops from renowned artists and studios.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            The AnimeXchange Advantage
          </h2>
          <p className="text-muted-foreground max-w-[800px]">
            We provide the most secure, user-friendly platform for anime NFT
            collectors and creators.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
