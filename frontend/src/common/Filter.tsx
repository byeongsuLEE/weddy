import ***REMOVED*** CaretSortIcon, CheckIcon ***REMOVED*** from "@radix-ui/react-icons"
import ***REMOVED*** Button ***REMOVED*** from "../components/ui/button"
import ***REMOVED*** Command, CommandEmpty, CommandGroup, CommandItem, CommandList ***REMOVED*** from "../components/ui/command"
import ***REMOVED*** Popover, PopoverContent, PopoverTrigger ***REMOVED*** from "../components/ui/popover"
import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"
import ***REMOVED*** useState ***REMOVED*** from "react"

interface ComboboxDemoProps ***REMOVED***
  lists: ***REMOVED***
    value: string
    label: string
  ***REMOVED***[];
  title: string;
  onSelect: (selectedValue: string) => void;
***REMOVED***

export function ComboboxDemo(***REMOVED*** lists,title, onSelect ***REMOVED***: ComboboxDemoProps) ***REMOVED***
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = ( currentValue: string ) => ***REMOVED***
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);
    onSelect(newValue);
  ***REMOVED***;

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
                  onSelect=***REMOVED***handleSelect***REMOVED***
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

