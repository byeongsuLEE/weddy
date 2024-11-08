import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    ***REMOVED*** className, orientation = "horizontal", decorative = true, ...props ***REMOVED***,
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref=***REMOVED***ref***REMOVED***
      decorative=***REMOVED***decorative***REMOVED***
      orientation=***REMOVED***orientation***REMOVED***
      className=***REMOVED***cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export ***REMOVED*** Separator ***REMOVED***
