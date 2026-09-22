import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "*:data-[slot=bubble-content]:bg-brand *:data-[slot=bubble-content]:text-content-inverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-brand-hover",
        secondary:
          "*:data-[slot=bubble-content]:bg-gray-alpha-200 *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-gray-alpha-300",
        muted:
          "*:data-[slot=bubble-content]:bg-surface-secondary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-quaternary",
        tinted:
          "*:data-[slot=bubble-content]:bg-brand-subtle *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-gray-300",
        outline:
          "*:data-[slot=bubble-content]:border-divider *:data-[slot=bubble-content]:bg-surface-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-hover [&>[data-slot=bubble-content]:is(button,a):hover]:text-content-primary",
        ghost:
          "border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-hover [&>[data-slot=bubble-content]:is(button,a):hover]:text-content-primary",
        destructive:
          "*:data-[slot=bubble-content]:bg-status-danger/10 *:data-[slot=bubble-content]:text-status-danger [&>[data-slot=bubble-content]:is(button,a):hover]:bg-status-danger/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "w-fit max-w-full min-w-0 overflow-hidden rounded-regular border border-transparent px-2.5 py-2 text-copy-13 wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-[color,background-color,border-color,box-shadow,transform] [button,a]:duration-fast [button,a]:ease-brand [button,a]:outline-none [button,a]:focus-visible:ring-1 [button,a]:focus-visible:ring-brand-bright",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bubble-content",
    },
  })
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-regular bg-surface-secondary px-1.5 py-0.5 text-label-12 ring-2 ring-surface-primary has-[button]:p-0",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-3/4",
        bottom: "bottom-0 translate-y-3/4",
      },
      align: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
