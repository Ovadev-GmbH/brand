import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { HugeiconsIcon } from "@hugeicons/react"
import { HelpCircleIcon } from "@hugeicons/core-free-icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"
import { cn } from "../../lib/utils"

/* A title over a value: "Table — 12". Several of them make a grid. */
function Description({
  className,
  title,
  content,
  tooltip,
  right = false,
  ellipsis = false,
  ...props
}: Omit<React.ComponentProps<"dl">, "title" | "content"> & {
  title: string
  content: React.ReactNode
  /** Explains the title from a small help icon after it. */
  tooltip?: string
  right?: boolean
  /** Keeps title and content on one line and puts the full text in `title`. */
  ellipsis?: boolean
}) {
  const contentTitle =
    ellipsis && (typeof content === "string" || typeof content === "number")
      ? String(content)
      : undefined

  return (
    <dl
      data-slot="description"
      data-right={right || undefined}
      data-ellipsis={ellipsis || undefined}
      className={cn(
        "group/description flex min-w-0 flex-col gap-1",
        right && "text-right",
        className
      )}
      {...props}
    >
      <dt
        data-slot="description-title"
        className={cn(
          "flex min-w-0 items-center gap-1 text-label-13 text-content-secondary",
          right && "justify-end"
        )}
      >
        <span
          data-slot="description-title-text"
          className={cn(ellipsis && "truncate")}
          title={ellipsis ? title : undefined}
        >
          {title}
        </span>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger
              data-slot="description-tooltip-trigger"
              aria-label={tooltip}
              className="inline-flex size-4 shrink-0 items-center justify-center rounded-pill text-content-tertiary transition-colors duration-fast ease-brand outline-none hover:text-content-primary focus-visible:ring-1 focus-visible:ring-brand-bright data-popup-open:text-content-primary [&_svg]:pointer-events-none [&_svg]:size-3.5"
            >
              <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />
            </TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
          </Tooltip>
        )}
      </dt>
      <dd
        data-slot="description-content"
        className={cn(
          "min-w-0 text-label-14 text-content-primary",
          ellipsis && "truncate"
        )}
        title={contentTitle}
      >
        {content}
      </dd>
    </dl>
  )
}

const descriptionListVariants = cva("grid gap-x-6 gap-y-4", {
  variants: {
    columns: {
      2: "grid-cols-2",
      3: "grid-cols-2 sm:grid-cols-3",
      4: "grid-cols-2 sm:grid-cols-4",
    },
  },
  defaultVariants: {
    columns: 2,
  },
})

function DescriptionList({
  className,
  columns = 2,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof descriptionListVariants>) {
  return (
    <div
      data-slot="description-list"
      data-columns={columns}
      className={cn(descriptionListVariants({ columns }), className)}
      {...props}
    />
  )
}

export { Description, DescriptionList, descriptionListVariants }
