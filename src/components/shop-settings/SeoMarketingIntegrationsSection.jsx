"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Copy, ChevronUp } from "lucide-react";

const SeoMarketingIntegrationsSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Marketing & SEO Tools</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Sitemaps for Search Engine</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Add sitemaps to 'Google Search Console' to Rank your website.
          </p>
          <div className="flex items-center gap-2">
            <Input defaultValue="https://scalebiz.com/api/sitemaps.xml" readOnly className="flex-1 bg-muted" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Facebook Data Feed</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Add/Upload data feed to the Facebook catalog.
          </p>
          <div className="flex items-center gap-2">
            <Input defaultValue="https://scalebiz.com/api/facebook-product-feed.xml" readOnly className="flex-1 bg-muted" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Setup Google Tag Manager</h3>
          <div className="mb-4">
            <Label htmlFor="gtmId">GTM ID</Label>
            <Input id="gtmId" defaultValue="GTM-PN7KJ5QC" className="mt-1" />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Setup Facebook Conversion API and Pixel</h3>
          <div className="mb-4">
            <Label htmlFor="pixelId">Pixel ID</Label>
            <Input id="pixelId" placeholder="Pixel ID" className="mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="pixelAccessToken">Pixel Access Token</Label>
            <Input id="pixelAccessToken" placeholder="Pixel Access Token" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="pixelTestEventId">Pixel Test Event Id</Label>
            <Input id="pixelTestEventId" placeholder="Pixel Test Event Id (Used to test. Clear after testing is done)" className="mt-1" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button>Update</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeoMarketingIntegrationsSection;