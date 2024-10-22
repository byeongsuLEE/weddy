import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <TabsPrimitive.List
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <TabsPrimitive.Trigger
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      " inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-main1 data-[state=active]:text-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <TabsPrimitive.Content
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export ***REMOVED*** Tabs, TabsList, TabsTrigger, TabsContent ***REMOVED***
