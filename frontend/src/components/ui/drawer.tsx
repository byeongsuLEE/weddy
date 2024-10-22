import * as React from "react"
import ***REMOVED*** Drawer as DrawerPrimitive ***REMOVED*** from "vaul"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"

const Drawer = (***REMOVED***
  shouldScaleBackground = true,
  ...props
***REMOVED***: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground=***REMOVED***shouldScaleBackground***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <DrawerPrimitive.Overlay
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("fixed inset-0 z-50", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>((***REMOVED*** className, children, ...props ***REMOVED***, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref=***REMOVED***ref***REMOVED***
      className=***REMOVED***cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-[350px] flex-col rounded-t-[10px] border bg-background",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      ***REMOVED***children***REMOVED***
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = (***REMOVED***
  className,
  ...props
***REMOVED***: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className=***REMOVED***cn("grid gap-1.5 p-4 text-center sm:text-left", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = (***REMOVED***
  className,
  ...props
***REMOVED***: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className=***REMOVED***cn("flex flex-col gap-2 px-4 mb-3", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <DrawerPrimitive.Title
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <DrawerPrimitive.Description
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("text-sm text-muted-foreground", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export ***REMOVED***
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
***REMOVED***
