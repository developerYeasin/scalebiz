"use client";

import * as React from "react";
import { X, Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils.js";
import { Badge } from "@/components/ui/badge.jsx";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Button } from "@/components/ui/button.jsx";

const MultiSelect = ({ options, selected, onSelect, placeholder, disabled }) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelect(newSelected);
  };

  const handleClear = () => {
    onSelect([]);
  };

  const selectedLabels = selected.map(
    (value) => options.find((option) => option.value === value)?.label
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-auto min-h-[40px] flex flex-wrap items-center"
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
                      handleSelect(selected[index]);
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
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
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