import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const statusDotVariants = cva(
  "inline-block shrink-0 rounded-pill",
  {
    variants: {
      state: {
        pending: "bg-status-warning",
        active:
          "bg-brand-bright animate-pulse motion-reduce:animate-none",
        ready: "bg-status-success",
        error: "bg-status-danger",
        canceled: "bg-content-tertiary",
        archived: "bg-content-disabled",
      },
      size: {
        default: "size-2",
        sm: "size-1.5",
      },
    },
    defaultVariants: {
      state: "pending",
      size: "default",
    },
  }
)

type StatusDotState = NonNullable<VariantProps<typeof statusDotVariants>["state"]>

/* The label shown after the dot, and how the title reads it out. */
const statusDotText: Record<StatusDotState, { label: string; phrase: string }> = {
  pending: { label: "Pending", phrase: "is pending" },
  active: { label: "Active", phrase: "is active" },
  ready: { label: "Ready", phrase: "is ready" },
  error: { label: "Error", phrase: "has an error" },
  canceled: { label: "Canceled", phrase: "is canceled" },
  archived: { label: "Archived", phrase: "is archived" },
}

function StatusDot({
  className,
  state,
  size = "default",
  label = false,
  titlePrefix = "This item",
  ...props
}: Omit<React.ComponentProps<"span">, "children"> &
  VariantProps<typeof statusDotVariants> & {
    state: StatusDotState
    /** Writes the state after the dot. */
    label?: boolean
    /** Subject of the title: "This deployment is pending". */
    titlePrefix?: string
  }) {
  const text = statusDotText[state]
  const title = `${titlePrefix} ${text.phrase}`

  return (
    <span
      data-slot="status-dot"
      data-state={state}
      data-size={size}
      title={title}
      role={label ? undefined : "img"}
      aria-label={label ? undefined : title}
      className={cn(
        "inline-flex items-center gap-1.5 align-middle",
        className
      )}
      {...props}
    >
      <span
        data-slot="status-dot-indicator"
        aria-hidden="true"
        className={statusDotVariants({ state, size })}
      />
      {label && (
        <span
          data-slot="status-dot-label"
          className="text-label-13 text-content-secondary"
        >
          {text.label}
        </span>
      )}
    </span>
  )
}

export { StatusDot, statusDotVariants }
