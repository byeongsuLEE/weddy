import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import ***REMOVED*** CheckIcon ***REMOVED*** from "@radix-ui/react-icons"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CheckboxPrimitive.Root
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "peer h-6 w-6 shrink-0 rounded-lg border border-main2  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-main2 data-[state=checked]:text-main2-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  >
    <CheckboxPrimitive.Indicator
      className=***REMOVED***cn("flex items-center justify-center text-current")***REMOVED***
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export ***REMOVED*** Checkbox ***REMOVED***
