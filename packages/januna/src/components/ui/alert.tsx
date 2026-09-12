import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-regular border px-4 py-3 text-left text-copy-14 has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-divider bg-surface-primary text-content-primary",
        success: "border-status-success/20 bg-surface-success text-content-primary *:[svg]:text-status-success",
        warning: "border-status-warning/20 bg-surface-warning text-content-primary *:[svg]:text-status-warning",
        info: "border-status-info/20 bg-surface-info text-content-primary *:[svg]:text-status-info",
        destructive:
          "border-status-danger/20 bg-surface-danger text-status-danger *:data-[slot=alert-description]:text-status-danger/90 *:[svg]:text-current",
      },
      /** `sm` is the inline note: one line beside its field or section, the
       *  icon, the words and an optional action on one row. */
      size: {
        default: "",
        sm: "flex items-center gap-2.5 px-3 py-2 text-label-13 has-data-[slot=alert-action]:pr-3 *:[svg]:translate-y-0 *:[svg:not([class*='size-'])]:size-3.5 *:data-[slot=alert-title]:text-label-13 *:data-[slot=alert-description]:text-label-13 *:data-[slot=alert-action]:static *:data-[slot=alert-action]:ml-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Alert({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      data-size={size}
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "text-heading-14 group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-copy-14 text-balance text-content-secondary md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-content-primary [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2.5 right-3", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
