import * as React from "react"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <div
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "text-card-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <div
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("flex flex-col space-y-1.5", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <h3
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("font-semibold leading-none tracking-tight", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <p
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("text-sm text-muted-foreground", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <div ref=***REMOVED***ref***REMOVED*** className=***REMOVED***cn("w-full", className)***REMOVED*** ***REMOVED***...props***REMOVED*** />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <div
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("flex items-center", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
CardFooter.displayName = "CardFooter"

export ***REMOVED*** Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent ***REMOVED***
