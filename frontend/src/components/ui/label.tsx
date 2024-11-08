import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import ***REMOVED*** cva, type VariantProps ***REMOVED*** from "class-variance-authority"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <LabelPrimitive.Root
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(labelVariants(), className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export ***REMOVED*** Label ***REMOVED***
