"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Sparkles } from "lucide-react";
import { toast } from "@/utils/toast.js";

const ApplyThemeButton = () => {
  const handleApplyTheme = () => {
    toast.success("Landing page theme applied successfully!");
  };

  return (
    <div className="flex justify-end mt-6">
      <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleApplyTheme}>
        <Sparkles className="h-4 w-4 mr-2" />
        Apply Theme
      </Button>
    </div>
  );
};

export default ApplyThemeButton;