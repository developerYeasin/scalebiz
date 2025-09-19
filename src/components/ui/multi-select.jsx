"use client";

import * as React from "react";
import { X, Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils.js";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";

const MultiSelect = ({
  options, // Array of { value: string, label: string }
  selected, // Array of selected values (strings)
  onSelect, // Function to call when selection changes: (newSelectedValues: string[]) => void
  placeholder,
  className,
  disabled = false,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleToggleItem = React.useCallback((value) => {
    onSelect((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  }, [onSelect]);

  const handleRemoveItem = React.useCallback((value) => {
    onSelect((prevSelected) => prevSelected.filter((item) => item !== value));
  }, [onSelect]);

  const selectedLabels = React.useMemo(() => {
    return selected
      .map((value) => options.find((option) => option.value === value)?.label)
      .filter(Boolean);
  }, [selected, options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between h-auto min-h-[40px] px-3 py-2", className)}
          disabled={disabled}
          onClick={() => setOpen(true)} // Ensure button click opens popover
          {...props}
        >
          <div className="flex flex-wrap gap-1 items-center">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              selectedLabels.map((label, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1 pr-1">
                  {label}
                  <X
                    className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent popover from closing
                      const valueToRemove = options.find(opt => opt.label === label)?.value;
                      if (valueToRemove) {
                        handleRemoveItem(valueToRemove);
                      }
                    }}
                  />
                </Badge>
              ))
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label} // Use label for searchability
                  onSelect={() => handleToggleItem(option.value)}
                  className="flex items-center cursor-pointer"
                >
                  <Checkbox
                    checked={selected.includes(option.value)}
                    onCheckedChange={() => handleToggleItem(option.value)} // Keep this for direct checkbox interaction
                    className="mr-2"
                    disabled={disabled}
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