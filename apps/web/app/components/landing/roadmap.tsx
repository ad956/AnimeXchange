"use client";

import { motion } from "framer-motion";
import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Calendar } from "lucide-react";

export default function Roadmap() {
  const milestones = [
    {
      quarter: "Q1 2023",
      title: "Platform Launch",
      description:
        "Initial release of AnimeXchange with core features and first exclusive NFT drops.",
      completed: true,
    },
    {
      quarter: "Q2 2023",
      title: "Multi-Chain Support",
      description:
        "Expanded to support Polygon and Solana blockchains for lower gas fees and wider accessibility.",
      completed: true,
    },
    {
      quarter: "Q3 2023",
      title: "Mobile App Beta",
      description:
        "Launch of our mobile app beta for iOS and Android with core marketplace features.",
      completed: true,
    },
    {
      quarter: "Q4 2023",
      title: "Creator Tools",
      description:
        "Advanced tools for artists to create, mint, and promote their anime NFT collections.",
      completed: false,
    },
    {
      quarter: "Q1 2024",
      title: "Metaverse Integration",
      description:
        "Virtual gallery spaces to showcase your anime NFT collections in the metaverse.",
      completed: false,
    },
    {
      quarter: "Q2 2024",
      title: "Governance Token",
      description:
        "Introduction of $ANIME token for community governance and exclusive benefits.",
      completed: false,
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
    <section id="roadmap" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-1">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            Roadmap
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Journey & Future Plans
          </h2>
          <p className="text-muted-foreground max-w-[800px]">
            Follow our roadmap as we continue to build the ultimate anime NFT
            marketplace.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    milestone.completed
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground"
                  }`}
                />

                <Card
                  className={`w-full max-w-lg ${
                    index % 2 === 0
                      ? "mr-8 md:mr-[calc(50%-16px)]"
                      : "ml-8 md:ml-[calc(50%-16px)]"
                  } border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20`}
                >
                  <CardHeader className="pb-2">
                    <Badge
                      variant={milestone.completed ? "default" : "outline"}
                      className="w-fit mb-2"
                    >
                      {milestone.quarter}
                    </Badge>
                    <CardTitle>{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Our roadmap is constantly evolving based on community feedback and
            market trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
