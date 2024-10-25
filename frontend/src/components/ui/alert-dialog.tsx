import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"
import ***REMOVED*** buttonVariants ***REMOVED*** from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPrimitive.Overlay
    className=***REMOVED***cn(
      "fixed inset-0 w-[414px]  left-1/2 transform -translate-x-1/2 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
    ref=***REMOVED***ref***REMOVED***
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref=***REMOVED***ref***REMOVED***
      className=***REMOVED***cn(
        "fixed left-[50%] top-[73%] w-[380px] h-[300px] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = (***REMOVED***
  className,
  ...props
***REMOVED***: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className=***REMOVED***cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = (***REMOVED***
  className,
  ...props
***REMOVED***: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className=***REMOVED***cn(
      "flex items-center justify-end gap-3",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPrimitive.Title
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("text-lg font-semibold", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPrimitive.Description
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("text-sm text-muted-foreground flex", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPrimitive.Action
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(buttonVariants(),"w-[100px]", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <AlertDialogPrimitive.Cancel
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      buttonVariants(***REMOVED*** variant: "outline" ***REMOVED***),
      "w-[100px]",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export ***REMOVED***
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
***REMOVED***
