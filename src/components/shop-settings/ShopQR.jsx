"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp, Download } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";

const ShopQR = () => {
  const handleSaveQR = () => {
    showSuccess("QR Code saved (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop QR</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-md mb-4">
          <img src="https://picsum.photos/seed/shop-qr/150/150" alt="Shop QR Code" className="w-32 h-32 mb-2" />
          <p className="text-sm text-muted-foreground mb-2">Scan the QR code to visit your shop</p>
          <a href="https://scalebiz.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
            https://scalebiz.com
          </a>
        </div>
        <Button variant="outline" className="w-full" onClick={handleSaveQR}>
          <Download className="h-4 w-4 mr-2" />
          Save QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopQR;