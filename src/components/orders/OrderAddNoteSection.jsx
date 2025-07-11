"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { ChevronUp } from "lucide-react";

const OrderAddNoteSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Add Note</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Textarea placeholder="Order Note" rows={5} />
      </CardContent>
    </Card>
  );
};

export default OrderAddNoteSection;