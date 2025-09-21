"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ChatSupportSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Chat Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Chat Support</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="facebookChat"
              checked={config.notification_settings?.chat?.facebook_enabled || false}
              onCheckedChange={(checked) => updateNested('notification_settings.chat.facebook_enabled', checked)}
            />
            <Label htmlFor="facebookChat">Facebook</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="whatsappChat"
              checked={config.notification_settings?.chat?.whatsapp_enabled || false}
              onCheckedChange={(checked) => updateNested('notification_settings.chat.whatsapp_enabled', checked)}
            />
            <Label htmlFor="whatsappChat">Whatsapp</Label>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="whatsappNumber">Whatsapp number (Ex:- +8801*******)</Label>
          <Input
            id="whatsappNumber"
            value={config.notification_settings?.chat?.whatsapp_number || ''}
            onChange={(e) => updateNested('notification_settings.chat.whatsapp_number', e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="flex justify-end">
          <Button onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Update Chat Support Info'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatSupportSection;