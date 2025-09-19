"use client";

import * as React from "react";
import { X, Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils.js";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command.jsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";

const MultiSelect = ({
  options,
  selected,
  onSelect,
  placeholder = "Select items...",
  disabled = false,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelect(newSelected);
  };

  const handleRemove = (value) => {
    onSelect(selected.filter((item) => item !== value));
  };

  const selectedLabels = selected
    .map((value) => options.find((option) => option.value === value)?.label)
    .filter(Boolean);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between h-auto min-h-[38px] flex-wrap",
            selected.length > 0 ? "pr-2" : "pr-3",
            className
          )}
          disabled={disabled}
        >
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selectedLabels.map((label, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(options.find(opt => opt.label === label)?.value);
                    }}
                  />
                </Badge>
              ))}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selected.includes(option.value)}
                    onCheckedChange={() => handleSelect(option.value)}
                  />
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { MultiSelect };