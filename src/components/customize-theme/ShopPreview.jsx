"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Monitor, Smartphone, Search } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const ShopPreview = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Preview Your Shop</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t border-b h-[400px] overflow-hidden">
          {/* Placeholder for the actual shop preview iframe/component */}
          <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-start text-muted-foreground text-sm">
            <div className="w-full bg-black text-white p-2 flex justify-between items-center">
              <span>Welcome to Scalebiz</span>
              <div className="flex items-center gap-2">
                <img src="https://picsum.photos/seed/shop-logo-preview/20/20" alt="Logo" className="h-5 w-5 rounded-full" />
                <span>EN</span>
                <span>🛒</span>
              </div>
            </div>
            <div className="p-4 w-full">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Scalebiz</h2>
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search your desired product"
                  className="w-full p-2 pl-8 border rounded-md"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Button className="absolute right-0 top-0 h-full rounded-l-none">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="https://picsum.photos/seed/preview-cat1/96/96" alt="Category" className="w-full h-full object-cover rounded-md" />
                  <span className="absolute text-xs text-center text-white bg-black/50 p-1 rounded-md">All products</span>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="https://picsum.photos/seed/preview-cat2/96/96" alt="Category" className="w-full h-full object-cover rounded-md" />
                  <span className="absolute text-xs text-center text-white bg-black/50 p-1 rounded-md">Inner item</span>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="https://picsum.photos/seed/preview-cat3/96/96" alt="Category" className="w-full h-full object-cover rounded-md" />
                  <span className="absolute text-xs text-center text-white bg-black/50 p-1 rounded-md">Borka</span>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="https://picsum.photos/seed/preview-cat4/96/96" alt="Category" className="w-full h-full object-cover rounded-md" />
                  <span className="absolute text-xs text-center text-white bg-black/50 p-1 rounded-md">Gown</span>
                </div>
              </div>
              {/* More placeholder content for products */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-2 rounded-md shadow">
                  <img src="https://picsum.photos/seed/preview-prod1/150/150" alt="Product" className="w-full h-24 object-cover rounded-md mb-2" />
                  <p className="font-semibold text-foreground">Sample Product 1</p>
                  <p className="text-sm text-muted-foreground">৳ 1200</p>
                </div>
                <div className="bg-white p-2 rounded-md shadow">
                  <img src="https://picsum.photos/seed/preview-prod2/150/150" alt="Product" className="w-full h-24 object-cover rounded-md mb-2" />
                  <p className="font-semibold text-foreground">Sample Product 2</p>
                  <p className="text-sm text-muted-foreground">৳ 850</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopPreview;