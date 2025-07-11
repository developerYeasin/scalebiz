"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ApplyThemeButton = () => {
  return (
    <div className="flex justify-end mt-6">
      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
        <Sparkles className="h-4 w-4 mr-2" />
        Apply Theme
      </Button>
    </div>
  );
};

export default ApplyThemeButton;