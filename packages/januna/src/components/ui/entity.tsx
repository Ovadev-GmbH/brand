"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

// A row of descriptive content with one or two controls: an avatar or icon
// on the left, fields in the middle, at most two Buttons on the right. Inside
// an EntityList a row is an <li>; on its own, a <div>. Pass `render` for
// anything else (a <button> that opens the booking, an <a>).

const EntityListContext = React.createContext(false)

function Entity({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
  children,
  render,
  ...props
}: useRender.ComponentProps<"div"> & {
  left?: React.ReactNode
  right?: React.ReactNode
  leftClassName?: string
  rightClassName?: string
}) {
  const inList = React.useContext(EntityListContext)
  return useRender({
    defaultTagName: inList ? "li" : "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "group/entity flex w-full items-center gap-space-3 py-space-3 text-left text-label-14 text-content-primary outline-none focus-visible:ring-1 focus-visible:ring-brand-bright [button]:cursor-pointer [button]:transition-colors [button]:duration-fast [button]:ease-brand [button]:hover:bg-surface-hover [a]:transition-colors [a]:hover:bg-surface-hover",
          className
        ),
        children: (
          <>
            {left !== undefined && (
              <div
                data-slot="entity-left"
                className={cn(
                  "flex shrink-0 items-center justify-center text-content-secondary [&_svg:not([class*='size-'])]:size-4",
                  leftClassName
                )}
              >
                {left}
              </div>
            )}
            <div
              data-slot="entity-fields"
              className="flex min-w-0 flex-1 items-center gap-space-3"
            >
              {children}
            </div>
            {right !== undefined && (
              <div
                data-slot="entity-right"
                className={cn(
                  "ml-auto flex shrink-0 items-center gap-space-2",
                  rightClassName
                )}
              >
                {right}
              </div>
            )}
          </>
        ),
      },
      props
    ),
    render,
    state: {
      slot: "entity",
    },
  })
}

function EntityContent({
  className,
  title,
  description,
  fill = false,
  ...props
}: Omit<React.ComponentProps<"div">, "title"> & {
  title: string
  description?: string
  fill?: boolean
}) {
  return (
    <div
      data-slot="entity-content"
      data-fill={fill || undefined}
      className={cn(
        "flex min-w-0 flex-col gap-0.5 data-fill:flex-1",
        className
      )}
      {...props}
    >
      <span
        data-slot="entity-title"
        className="truncate text-label-14 text-content-primary"
      >
        {title}
      </span>
      {description !== undefined && (
        <span
          data-slot="entity-description"
          className="truncate text-label-13 text-content-secondary"
        >
          {description}
        </span>
      )}
    </div>
  )
}

const entityListVariants = cva(
  "group/entity-list flex w-full flex-col divide-y divide-divider",
  {
    variants: {
      bordered: {
        // Flush: the first row starts and the last row ends at the list's edge.
        false: "[&>[data-slot=entity]:first-child]:pt-0 [&>[data-slot=entity]:last-child]:pb-0",
        // Boxed: the rows keep their vertical padding; the box supplies the sides.
        true: "material-base px-space-4",
      },
    },
    defaultVariants: {
      bordered: false,
    },
  }
)

function EntityList({
  className,
  bordered = false,
  ...props
}: React.ComponentProps<"ul"> & VariantProps<typeof entityListVariants>) {
  return (
    <EntityListContext.Provider value={true}>
      <ul
        data-slot="entity-list"
        data-bordered={bordered || undefined}
        className={cn(entityListVariants({ bordered, className }))}
        {...props}
      />
    </EntityListContext.Provider>
  )
}

export { Entity, EntityContent, EntityList, entityListVariants }
