"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Globe, FileText, Truck, CreditCard, LineChart, MessageSquare, MessageCircle, Share2 } from "lucide-react";

const manageShopItems = [
  { name: "Shop Settings", description: "General shop configurations customize your shop's core settings for a seamless experience.", icon: Settings, href: "/manage-shop/settings" },
  { name: "Shop Domain", description: "Manage your shop's core configurations, including domain setup and general settings.", icon: Globe, href: "/manage-shop/domain" },
  { name: "Shop Policy", description: "Define and customize policies for your shop, including returns, refunds, and customer service guidelines.", icon: FileText, href: "/manage-shop/policy" },
  { name: "Delivery Support", description: "Manage your shop's delivery settings to ensure smooth and efficient order fulfillment.", icon: Truck, href: "/manage-shop/delivery" },
  { name: "Payment Gateway", description: "Integrate and manage payment options to provide customers with secure and flexible transaction methods.", icon: CreditCard, href: "/manage-shop/payment" },
  { name: "SEO & Marketing Integrations", description: "Enhance your shop's visibility by connecting SEO tools and marketing integrations for better engagement.", icon: LineChart, href: "/manage-shop/seo-marketing" },
  { name: "SMS Support", description: "Enable SMS notifications and support to keep your customers informed with real-time updates.", icon: MessageSquare, href: "/manage-shop/sms" },
  { name: "Chat Support", description: "Provide instant communication and assistance to customers with chat support system.", icon: MessageCircle, href: "/manage-shop/chat" },
  { name: "Social Links", description: "Connect your shop with social media platforms to enhance visibility and engagement.", icon: Share2, href: "/manage-shop/social-links" },
];

const ManageShop = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Shop</h1>
      <p className="text-lg text-gray-600 mb-8">
        Set up and customize your shop to ensure a smooth and efficient experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manageShopItems.map((item) => (
          <Link key={item.name} to={item.href}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <item.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManageShop;