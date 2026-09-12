import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  AlertCircleIcon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "../../lib/utils"

/* A Note is one sentence, inline, with no dismiss control: the status colour
 * sits on the icon and the label, the sentence itself stays in ink. `fill`
 * trades the outline for a tinted surface. */
const noteVariants = cva(
  "group/note flex w-full items-start gap-2 border text-content-primary transition-[color,background-color,border-color,box-shadow] duration-fast ease-brand data-disabled:pointer-events-none data-disabled:opacity-50 data-disabled:select-none",
  {
    variants: {
      variant: {
        default:
          "**:data-[slot=note-icon]:text-content-secondary **:data-[slot=note-label]:text-content-primary",
        secondary:
          "text-content-secondary **:data-[slot=note-icon]:text-content-tertiary **:data-[slot=note-label]:text-content-secondary",
        success:
          "**:data-[slot=note-icon]:text-status-success **:data-[slot=note-label]:text-status-success",
        warning:
          "**:data-[slot=note-icon]:text-status-warning **:data-[slot=note-label]:text-status-warning",
        error:
          "**:data-[slot=note-icon]:text-status-danger **:data-[slot=note-label]:text-status-danger",
        info: "**:data-[slot=note-icon]:text-status-info **:data-[slot=note-label]:text-status-info",
      },
      size: {
        default: "min-h-10 px-3 py-2.5 text-copy-14",
        sm: "min-h-8 px-2.5 py-1.5 text-copy-13 *:data-[slot=note-icon]:mt-px",
      },
      fill: {
        false: "material-base border-transparent",
        true: "rounded-regular",
      },
    },
    compoundVariants: [
      { fill: true, variant: "default", className: "border-divider bg-surface-secondary" },
      { fill: true, variant: "secondary", className: "border-divider bg-surface-tertiary" },
      { fill: true, variant: "success", className: "border-status-success/20 bg-surface-success" },
      { fill: true, variant: "warning", className: "border-status-warning/20 bg-surface-warning" },
      { fill: true, variant: "error", className: "border-status-danger/20 bg-surface-danger" },
      { fill: true, variant: "info", className: "border-status-info/20 bg-surface-info" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      fill: false,
    },
  }
)

type NoteVariant = NonNullable<VariantProps<typeof noteVariants>["variant"]>

const noteIcons: Record<NoteVariant, typeof InformationCircleIcon> = {
  default: InformationCircleIcon,
  secondary: InformationCircleIcon,
  success: CheckmarkCircle02Icon,
  warning: Alert02Icon,
  error: AlertCircleIcon,
  info: InformationCircleIcon,
}

function Note({
  className,
  variant = "default",
  size = "default",
  fill = false,
  icon,
  disabled = false,
  children,
  render,
  ...props
}: useRender.ComponentProps<"div"> &
  Omit<VariantProps<typeof noteVariants>, "fill"> & {
    /** Tinted surface instead of the outline. */
    fill?: boolean
    /** Replaces the variant's icon; `null` shows none. */
    icon?: React.ReactNode | null
    disabled?: boolean
  }) {
  const resolvedVariant = variant ?? "default"
  const iconNode =
    icon === undefined ? (
      <HugeiconsIcon icon={noteIcons[resolvedVariant]} strokeWidth={2} />
    ) : (
      icon
    )

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        role: "note",
        "aria-disabled": disabled || undefined,
        className: cn(noteVariants({ variant, size, fill }), className),
        children: (
          <>
            {iconNode !== null && <NoteIcon>{iconNode}</NoteIcon>}
            {children}
          </>
        ),
      },
      props
    ),
    render,
    state: {
      slot: "note",
      variant: resolvedVariant,
      size: size ?? "default",
      fill,
      disabled,
    },
  })
}

function NoteIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="note-icon"
      aria-hidden="true"
      className={cn(
        "mt-0.5 flex size-4 shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NoteContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="note-content"
      className={cn(
        "min-w-0 flex-1 text-pretty wrap-break-word [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-content-primary",
        className
      )}
      {...props}
    />
  )
}

function NoteLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="note-label"
      className={cn("mr-1 font-medium", className)}
      {...props}
    />
  )
}

function NoteAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="note-action"
      className={cn(
        "-my-1 ml-auto flex shrink-0 items-center self-center",
        className
      )}
      {...props}
    />
  )
}

export { Note, NoteIcon, NoteContent, NoteLabel, NoteAction, noteVariants }
