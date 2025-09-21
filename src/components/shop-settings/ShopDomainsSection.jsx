"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Copy, Trash2, ChevronUp } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast.js";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ShopDomainsSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();
  const [subdomain, setSubdomain] = React.useState("");

  React.useEffect(() => {
    if (config?.hostname) {
      // Assuming hostname is like 'subdomain.maindomain.com' or just 'customdomain.com'
      const parts = config.hostname.split('.');
      if (parts.length > 2) { // Heuristic for subdomain
        setSubdomain(parts[0]);
      }
    }
  }, [config]);

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shop Domains</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showSuccess("Copied to clipboard!");
  };

  const handleDeleteDomain = () => {
    updateNested('hostname', ''); // Clear the hostname
    save();
    showError("Custom domain removed.");
  };

  const handleSaveSubdomain = () => {
    // This logic assumes a base domain. Let's use 'scalebiz.com' as an example.
    const newHostname = `${subdomain}.scalebiz.com`;
    updateNested('hostname', newHostname);
    save();
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Domains</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Your Free Domain</h3>
        <div className="flex items-center gap-2 mb-6">
          <Input
            placeholder="myshop"
            className="flex-1"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
          />
          <span className="text-muted-foreground">.scalebiz.com</span>
          <Button onClick={handleSaveSubdomain} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Save Domain'}
          </Button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Your Custom Domain</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To change the domain, delete the existing one and add a new one.
        </p>
        <div className="flex items-center gap-2 mb-4">
          <Input
            value={config.hostname || ''}
            onChange={(e) => updateNested('hostname', e.target.value)}
            placeholder="example.com"
            className="flex-1"
          />
          <Button variant="outline" size="icon" onClick={() => handleCopy(config.hostname || '')}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="text-destructive hover:text-destructive" onClick={handleDeleteDomain}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-end">
          <Button onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Update Custom Domain'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopDomainsSection;