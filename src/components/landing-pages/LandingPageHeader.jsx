"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Sparkles } from "lucide-react";

const LandingPageHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-600" />
        <h1 className="text-2xl font-bold">Your Single Product Page</h1>
        <p className="text-muted-foreground text-sm hidden sm:block">
          You can modify data and visual impact of the page
        </p>
      </div>
      <div className="w-full md:w-auto">
        <Select defaultValue="Lahori Three Piece">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Lahori Three Piece">Lahori Three Piece</SelectItem>
            <SelectItem value="Torrey Three Piece">Torrey Three Piece</SelectItem>
            <SelectItem value="Iiraa Three Piece">Iiraa Three Piece</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LandingPageHeader;