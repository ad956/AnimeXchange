"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { UserPlus, Wallet, ArrowRightLeft, Info } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your account and set up your profile to start your NFT journey.",
      icon: <UserPlus className="h-10 w-10" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Connect Wallet",
      description:
        "Link your crypto wallet to buy, sell, and trade NFTs securely.",
      icon: <Wallet className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Trade NFTs",
      description:
        "Browse collections, make offers, and build your anime NFT portfolio.",
      icon: <ArrowRightLeft className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-1">
            <Info className="h-3.5 w-3.5 mr-1" />
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground max-w-[800px]">
            Get started with AnimeXchange in just a few simple steps and begin
            your journey into anime NFTs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {steps.map((step: any, index: number) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader className="pb-2">
                  <div
                    className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br text-white p-3"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--${step.color.split(" ")[0].replace("from-", "")}, var(--${step.color.split(" ")[1].replace("to-", "")}))`,
                    }}
                  >
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">
                    Step {index + 1}: {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
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
          <p className="text-muted-foreground">
            Need help getting started? Check out our{" "}
            <a href="#" className="text-primary hover:underline">
              detailed guide
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary hover:underline">
              contact support
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
