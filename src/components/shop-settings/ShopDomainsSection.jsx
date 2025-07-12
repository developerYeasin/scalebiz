"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Copy, Trash2 } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast.js";

const ShopDomainsSection = () => {
  const handleSaveDomain = () => {
    showSuccess("Domain saved successfully!");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showSuccess("Copied to clipboard!");
  };

  const handleDeleteDomain = () => {
    showError("Domain deleted (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Domains</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Your Free Domain</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Button variant="outline" className="px-4 py-2 rounded-md" onClick={() => handleCopy("scalebiz.com")}>scalebiz.com</Button>
          <Button variant="outline" className="px-4 py-2 rounded-md" onClick={() => handleCopy("sellbd.shop")}>sellbd.shop</Button>
          <Button variant="outline" className="px-4 py-2 rounded-md" onClick={() => handleCopy("myecom.site")}>myecom.site</Button>
          <Button variant="outline" className="px-4 py-2 rounded-md" onClick={() => handleCopy("bdcsite.net")}>bdcsite.net</Button>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <Input placeholder="myshop" className="flex-1" />
          <span className="text-muted-foreground">.scalebiz.com</span>
          <Button onClick={handleSaveDomain}>Save Domain</Button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Your Custom Domain</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Configure DNS Settings in Cloudflare
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Ensure you add the following DNS records to your <a href="#" className="text-blue-500 hover:underline">Cloudflare DNS</a> with the TTL set to Auto and the Proxy Status set to Proxied. Then, set the SSL mode to Flexible. After adding the records, please allow up to 24 hours for your domain to be verified For any assistance, feel free to contact us.
        </p>
        <a href="#" className="text-blue-500 hover:underline text-sm mb-4 block">Full guide line - Click Here</a>

        <div className="rounded-md border overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-2 font-semibold">Type</th>
                <th className="text-left p-2 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">CNAME</td>
                <td className="p-2 flex items-center justify-between">
                  <span>procname.scalebiz.com</span>
                  <Button variant="ghost" size="icon" onClick={() => handleCopy("procname.scalebiz.com")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Input defaultValue="scalebiz.com" readOnly className="flex-1 bg-muted" />
          <Button variant="outline" size="icon" onClick={() => handleCopy("scalebiz.com")}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteDomain()}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Your domain IPs:</span>
          <span className="flex items-center gap-1">
            172.67.142.89
            <Button variant="ghost" size="icon" className="h-auto w-auto p-1" onClick={() => handleCopy("172.67.142.89")}>
              <Copy className="h-3 w-3" />
            </Button>
          </span>
          <span className="flex items-center gap-1">
            104.21.87.74
            <Button variant="ghost" size="icon" className="h-auto w-auto p-1" onClick={() => handleCopy("104.21.87.74")}>
              <Copy className="h-3 w-3" />
            </Button>
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          To change the domain delete existing domain and add new one
        </p>
      </CardContent>
    </Card>
  );
};

export default ShopDomainsSection;