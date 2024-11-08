import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>((***REMOVED*** className, value, ...props ***REMOVED***, ref) => (
  <ProgressPrimitive.Root
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-main2 transition-all"
      style=***REMOVED******REMOVED*** transform: `translateX(-$***REMOVED***100 - (value || 0)***REMOVED***%)` ***REMOVED******REMOVED***
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export ***REMOVED*** Progress ***REMOVED***
