import ***REMOVED*** CaretSortIcon, CheckIcon ***REMOVED*** from "@radix-ui/react-icons"
import * as React from "react"

import ***REMOVED*** Button ***REMOVED*** from "../components/ui/button"
import ***REMOVED***
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
***REMOVED*** from "../components/ui/command"
import ***REMOVED***
  Popover,
  PopoverContent,
  PopoverTrigger,
***REMOVED*** from "../components/ui/popover"
import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

interface ComboboxDemoProps ***REMOVED***
  lists: ***REMOVED***
    value: string
    label: string
  ***REMOVED***[];
  title: string;
***REMOVED***

export function ComboboxDemo(***REMOVED*** lists,title ***REMOVED***: ComboboxDemoProps) ***REMOVED***
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className="mb-4">
    <Popover open=***REMOVED***open***REMOVED*** onOpenChange=***REMOVED***setOpen***REMOVED***>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded=***REMOVED***open***REMOVED***
          className="w-[150px] h-[30px] justify-between"
        >
          ***REMOVED***value
            ? lists.find((list) => list.value === value)?.label
            : title***REMOVED***
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              ***REMOVED***lists.map((list) => (
                <CommandItem
                  key=***REMOVED***list.value***REMOVED***
                  value=***REMOVED***list.value***REMOVED***
                  onSelect=***REMOVED***(currentValue) => ***REMOVED***
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  ***REMOVED******REMOVED***
                >
                  ***REMOVED***list.label***REMOVED***
                  <CheckIcon
                    className=***REMOVED***cn(
                      "ml-auto h-4 w-4",
                      value === list.value ? "opacity-100" : "opacity-0"
                    )***REMOVED***
                  />
                </CommandItem>
              ))***REMOVED***
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
***REMOVED***

