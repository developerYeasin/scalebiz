"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp, Download } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ShopQR = () => {
  const { config, isLoading } = useStoreConfig();

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shop QR</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>
    );
  }

  const shopUrl = config.hostname ? `https://${config.hostname}` : 'https://scalebiz.com';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(shopUrl)}`;

  const handleSaveQR = () => {
    // This creates a link and simulates a click to download the image
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'shop-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccess("QR Code download started.");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop QR</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-md mb-4">
          <img src={qrCodeUrl} alt="Shop QR Code" className="w-32 h-32 mb-2" />
          <p className="text-sm text-muted-foreground mb-2">Scan the QR code to visit your shop</p>
          <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline break-all">
            {shopUrl}
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