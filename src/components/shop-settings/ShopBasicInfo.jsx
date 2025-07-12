"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { toast } from "@/utils/toast.js";

const ShopBasicInfo = () => {
  const handleUpdateShopInfo = () => {
    toast.success("Shop basic information updated successfully!");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Basic Info</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="businessId">Business ID</Label>
            <Input id="businessId" defaultValue="107515" readOnly className="mt-1 bg-muted" />
          </div>
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" defaultValue="Scalebiz" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Select defaultValue="Clothing & Apparel">
              <SelectTrigger id="businessType" className="mt-1">
                <SelectValue placeholder="Select Business Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Clothing & Apparel">Clothing & Apparel</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="shopEmail">Shop Email</Label>
            <Input id="shopEmail" defaultValue="info.scalebiz@gmail.com" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="shopPhoneNumber">Shop Phone Number</Label>
            <Input id="shopPhoneNumber" defaultValue="+8801708378659" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="Bangladesh">
              <SelectTrigger id="country" className="mt-1">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="shopAddress">Shop Address</Label>
          <Textarea id="shopAddress" defaultValue="Dhaka, Bangladesh" rows={3} className="mt-1" />
        </div>
        <div className="mb-4">
          <Label htmlFor="shopDetails">Shop Details (SEO & Data Feed)</Label>
          <Textarea id="shopDetails" defaultValue="🛍️ আমাদের অফার গুলো-Scalebiz 🎁" rows={2} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="topbarAnnouncement">Topbar Announcement Message</Label>
          <Input id="topbarAnnouncement" defaultValue="Welcome to Scalebiz" className="mt-1" />
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdateShopInfo}>Update Shop Info</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopBasicInfo;