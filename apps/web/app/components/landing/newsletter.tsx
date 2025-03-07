"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4 mb-8"
          >
            <Badge variant="outline" className="px-4 py-1">
              <Mail className="h-3.5 w-3.5 mr-1" />
              Stay Updated
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Never Miss a Drop
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Subscribe to our newsletter to get updates on exclusive NFT drops,
              artist features, and platform news.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted/30 rounded-xl p-8 border-2 border-border"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Thank You for Subscribing!
                </h3>
                <p className="text-muted-foreground">
                  You're now on the list to receive exclusive updates and early
                  access to drops.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="sm:w-auto">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from AnimeXchange.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
