"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { User } from "lucide-react";

const UserCard = ({ name, email, role, isYou = false }) => {
  return (
    <Card className="mb-4">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <p className="font-semibold text-lg">
              {name} {isYou && <span className="text-sm text-muted-foreground">(You)</span>}
            </p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary">{role}</Badge>
          {!isYou && (
            <Button variant="outline" className="text-destructive hover:text-destructive">
              Remove
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;