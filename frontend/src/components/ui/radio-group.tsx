import * as React from "react"
import ***REMOVED*** CheckIcon ***REMOVED*** from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => ***REMOVED***
  return (
    <RadioGroupPrimitive.Root
      className=***REMOVED***cn("grid gap-2", className)***REMOVED***
      ***REMOVED***...props***REMOVED***
      ref=***REMOVED***ref***REMOVED***
    />
  )
***REMOVED***)
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => ***REMOVED***
  return (
    <RadioGroupPrimitive.Item
      ref=***REMOVED***ref***REMOVED***
      className=***REMOVED***cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
***REMOVED***)
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export ***REMOVED*** RadioGroup, RadioGroupItem ***REMOVED***
