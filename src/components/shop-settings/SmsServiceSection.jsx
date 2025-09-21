"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const SmsServiceSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>SMS Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>SMS Service</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Configure BULK SMS BD</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Create an account on <a href="#" className="text-blue-500 hover:underline">BULK SMS BD</a> to obtain your credentials.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-6">
          <div>
            <label htmlFor="apiKey">Api key <span className="text-destructive">*</span></label>
            <Input
              id="apiKey"
              placeholder="Api key"
              className="mt-1"
              value={config.notification_settings?.sms?.api_key || ''}
              onChange={(e) => updateNested('notification_settings.sms.api_key', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="senderId">Sender ID <span className="text-destructive">*</span></label>
            <Input
              id="senderId"
              placeholder="Sender ID"
              className="mt-1"
              value={config.notification_settings?.sms?.sender_id || ''}
              onChange={(e) => updateNested('notification_settings.sms.sender_id', e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Update SMS Settings'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmsServiceSection;