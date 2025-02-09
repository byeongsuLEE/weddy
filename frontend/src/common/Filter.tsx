import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "../components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "../components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ComboboxDemoProps {
  lists: {
    value: string
    label: string
  }[];
  title: string;
  onSelect: (selectedValue: string) => void;
}

export function ComboboxDemo({ lists,title, onSelect }: ComboboxDemoProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = ( currentValue: string ) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);
    onSelect(newValue);
  };

  return (
    <div className="mb-4">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] h-[30px] justify-between"
        >
          {value
            ? lists.find((list) => list.value === value)?.label
            : title}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {lists.map((list) => (
                <CommandItem
                  key={list.value}
                  value={list.value}
                  onSelect={handleSelect}
                >
                  {list.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === list.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}

