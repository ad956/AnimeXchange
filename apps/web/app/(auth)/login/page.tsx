"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
      </div>

      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AnimeXchange
            </h1>
            <div className="text-sm text-gray-600 mt-2">
              🎌 Welcome to Your Anime NFT Journey ✨
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Username</Label>
              <Input
                placeholder="Enter your username"
                className="h-12 bg-white/50 border-purple-200 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="h-12 bg-white/50 border-purple-200 focus:border-purple-500"
              />
            </div>

            <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Login to Marketplace
            </Button>

            <div className="text-center space-y-4">
              <Button variant="link" className="text-purple-600">
                Forgot Password?
              </Button>

              <div className="text-sm text-gray-600">
                New to AnimeXchange?{" "}
                <Button variant="link" className="text-purple-600 p-0">
                  Create Account
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-xs text-center text-gray-500">
              By continuing, you agree to AnimeXchange's Terms of Service and
              NFT Trading Policy
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
