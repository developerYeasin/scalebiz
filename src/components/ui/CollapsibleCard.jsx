"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils.js";

const CollapsibleCard = ({ title, children, defaultCollapsed = false, className, headerClassName, contentClassName, titleClassName, iconClassName }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Card className={cn("mb-6", className)}>
      <CardHeader
        className={cn("flex flex-row items-center justify-between cursor-pointer", headerClassName)}
        onClick={toggleCollapse}
      >
        <CardTitle className={cn("text-lg font-semibold", titleClassName)}>{title}</CardTitle>
        <ChevronUp
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isCollapsed ? "rotate-180" : "rotate-0",
            iconClassName
          )}
        />
      </CardHeader>
      {!isCollapsed && (
        <CardContent className={cn("pt-0", contentClassName)}>
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default CollapsibleCard;