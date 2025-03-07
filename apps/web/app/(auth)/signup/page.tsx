import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
      </div>

      <Card className="w-full max-w-xl bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join AnimeXchange
            </h1>
            <div className="text-sm text-gray-600 mt-2">
              ✨ Start Your NFT Collection Journey 🎌
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input className="h-12 bg-white/50 border-purple-200 focus:border-purple-500" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input className="h-12 bg-white/50 border-purple-200 focus:border-purple-500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Username</Label>
              <Input className="h-12 bg-white/50 border-purple-200 focus:border-purple-500" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                className="h-12 bg-white/50 border-purple-200 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Network</Label>
              <Select>
                <SelectTrigger className="h-12 bg-white/50 border-purple-200">
                  <SelectValue placeholder="Select blockchain network" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethereum">Ethereum</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="solana">Solana</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  className="h-12 bg-white/50 border-purple-200 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  className="h-12 bg-white/50 border-purple-200 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>

            <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Create Account ✨
            </Button>

            <div className="text-center">
              <div className="text-sm text-gray-600">
                Already have an account?{" "}
                <Button variant="link" className="text-purple-600 p-0">
                  Login here
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
