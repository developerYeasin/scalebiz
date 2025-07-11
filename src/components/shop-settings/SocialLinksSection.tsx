"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const SocialLinksSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Social Links</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="facebookLink">Facebook</Label>
            <Input id="facebookLink" defaultValue="https://www.facebook.com/profile.php?id=6155567706512" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="instagramLink">Instagram</Label>
            <Input id="instagramLink" defaultValue="https://www.instagram.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="linkedinLink">LinkedIn</Label>
            <Input id="linkedinLink" defaultValue="https://www.linkedin.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="youtubeLink">Youtube</Label>
            <Input id="youtubeLink" defaultValue="https://www.youtube.com/@OmniOnlineShopBD" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="tiktokLink">Tiktok</Label>
            <Input id="tiktokLink" defaultValue="https://www.tiktok.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="discordLink">Discord</Label>
            <Input id="discordLink" defaultValue="https://www.discord.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="telegramLink">Telegram</Label>
            <Input id="telegramLink" defaultValue="https://www.telegram.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="darazLink">Daraz</Label>
            <Input id="darazLink" defaultValue="https://www.daraz.com.bd/shop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="amazonLink">Amazon</Label>
            <Input id="amazonLink" defaultValue="https://www.amazon.com/myshop" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="walmartLink">Walmart</Label>
            <Input id="walmartLink" defaultValue="https://www.walmart.com/myshop" className="mt-1" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Update Social Links</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinksSection;