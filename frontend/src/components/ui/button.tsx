import * as React from "react"
import ***REMOVED*** Slot ***REMOVED*** from "@radix-ui/react-slot"
import ***REMOVED*** cva, type VariantProps ***REMOVED*** from "class-variance-authority"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ***REMOVED***
    variants: ***REMOVED***
      variant: ***REMOVED***
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      ***REMOVED***,
      size: ***REMOVED***
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-10 rounded-xl px-8",
        icon: "h-9 w-9",
      ***REMOVED***,
    ***REMOVED***,
    defaultVariants: ***REMOVED***
      variant: "default",
      size: "default",
    ***REMOVED***,
  ***REMOVED***
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> ***REMOVED***
  asChild?: boolean
***REMOVED***

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (***REMOVED*** className, variant, size, asChild = false, ...props ***REMOVED***, ref) => ***REMOVED***
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className=***REMOVED***cn(buttonVariants(***REMOVED*** variant, size, className ***REMOVED***))***REMOVED***
        ref=***REMOVED***ref***REMOVED***
        ***REMOVED***...props***REMOVED***
      />
    )
  ***REMOVED***
)
Button.displayName = "Button"

export ***REMOVED*** Button, buttonVariants ***REMOVED***
