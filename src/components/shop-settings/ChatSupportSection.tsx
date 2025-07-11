"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ChatSupportSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Chat Support</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="facebookChat" defaultChecked />
            <Label htmlFor="facebookChat">Facebook</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="whatsappChat" defaultChecked />
            <Label htmlFor="whatsappChat">Whatsapp</Label>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="whatsappNumber">Whatsapp number (Ex:- +8801*******)</Label>
          <Input id="whatsappNumber" defaultValue="01302144505" className="mt-1" />
        </div>

        <div className="flex justify-end">
          <Button>Update Chat Support Info</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatSupportSection;