import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>((***REMOVED*** className, align = "center", sideOffset = 4, ...props ***REMOVED***, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref=***REMOVED***ref***REMOVED***
      align=***REMOVED***align***REMOVED***
      sideOffset=***REMOVED***sideOffset***REMOVED***
      className=***REMOVED***cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none right-0 left-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=right]:slide-in-from-left-2",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export ***REMOVED*** Popover, PopoverTrigger, PopoverContent, PopoverAnchor ***REMOVED***
