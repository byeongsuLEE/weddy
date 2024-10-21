import * as React from "react"
import ***REMOVED*** type DialogProps ***REMOVED*** from "@radix-ui/react-dialog"
import ***REMOVED*** MagnifyingGlassIcon ***REMOVED*** from "@radix-ui/react-icons"
import ***REMOVED*** Command as CommandPrimitive ***REMOVED*** from "cmdk"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"
import ***REMOVED*** Dialog, DialogContent ***REMOVED*** from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CommandPrimitive
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps ***REMOVED******REMOVED***

const CommandDialog = (***REMOVED*** children, ...props ***REMOVED***: CommandDialogProps) => ***REMOVED***
  return (
    <Dialog ***REMOVED***...props***REMOVED***>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          ***REMOVED***children***REMOVED***
        </Command>
      </DialogContent>
    </Dialog>
  )
***REMOVED***

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref=***REMOVED***ref***REMOVED***
      className=***REMOVED***cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CommandPrimitive.List
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref=***REMOVED***ref***REMOVED***
    className="py-6 text-center text-sm"
    ***REMOVED***...props***REMOVED***
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CommandPrimitive.Group
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CommandPrimitive.Separator
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn("-mx-1 h-px bg-border", className)***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>((***REMOVED*** className, ...props ***REMOVED***, ref) => (
  <CommandPrimitive.Item
    ref=***REMOVED***ref***REMOVED***
    className=***REMOVED***cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )***REMOVED***
    ***REMOVED***...props***REMOVED***
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = (***REMOVED***
  className,
  ...props
***REMOVED***: React.HTMLAttributes<HTMLSpanElement>) => ***REMOVED***
  return (
    <span
      className=***REMOVED***cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )***REMOVED***
      ***REMOVED***...props***REMOVED***
    />
  )
***REMOVED***
CommandShortcut.displayName = "CommandShortcut"

export ***REMOVED***
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
***REMOVED***
