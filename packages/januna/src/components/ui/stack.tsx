import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "../../lib/utils"

// A flex box with the brand's spacing steps as its only vocabulary. Every
// prop takes one value or a `{ base, sm, md, lg }` object. Tailwind can only
// generate a class it reads in full, so the tables below spell out each
// combination; nothing here builds a class name from parts.

type Breakpoint = "base" | "sm" | "md" | "lg"
type Responsive<T> = T | { base?: T; sm?: T; md?: T; lg?: T }

type StackDirection = "row" | "column"
type StackSpace = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12
type StackAlign = "start" | "center" | "end" | "stretch" | "baseline"
type StackJustify = "start" | "center" | "end" | "between"

const BREAKPOINTS: Breakpoint[] = ["base", "sm", "md", "lg"]

const DIRECTION: Record<Breakpoint, Record<StackDirection, string>> = {
  base: { row: "flex-row", column: "flex-col" },
  sm: { row: "sm:flex-row", column: "sm:flex-col" },
  md: { row: "md:flex-row", column: "md:flex-col" },
  lg: { row: "lg:flex-row", column: "lg:flex-col" },
}

const GAP: Record<Breakpoint, Record<StackSpace, string>> = {
  base: {
    0: "gap-0",
    1: "gap-space-1",
    2: "gap-space-2",
    3: "gap-space-3",
    4: "gap-space-4",
    6: "gap-space-6",
    8: "gap-space-8",
    12: "gap-space-12",
  },
  sm: {
    0: "sm:gap-0",
    1: "sm:gap-space-1",
    2: "sm:gap-space-2",
    3: "sm:gap-space-3",
    4: "sm:gap-space-4",
    6: "sm:gap-space-6",
    8: "sm:gap-space-8",
    12: "sm:gap-space-12",
  },
  md: {
    0: "md:gap-0",
    1: "md:gap-space-1",
    2: "md:gap-space-2",
    3: "md:gap-space-3",
    4: "md:gap-space-4",
    6: "md:gap-space-6",
    8: "md:gap-space-8",
    12: "md:gap-space-12",
  },
  lg: {
    0: "lg:gap-0",
    1: "lg:gap-space-1",
    2: "lg:gap-space-2",
    3: "lg:gap-space-3",
    4: "lg:gap-space-4",
    6: "lg:gap-space-6",
    8: "lg:gap-space-8",
    12: "lg:gap-space-12",
  },
}

const PADDING: Record<Breakpoint, Record<StackSpace, string>> = {
  base: {
    0: "p-0",
    1: "p-space-1",
    2: "p-space-2",
    3: "p-space-3",
    4: "p-space-4",
    6: "p-space-6",
    8: "p-space-8",
    12: "p-space-12",
  },
  sm: {
    0: "sm:p-0",
    1: "sm:p-space-1",
    2: "sm:p-space-2",
    3: "sm:p-space-3",
    4: "sm:p-space-4",
    6: "sm:p-space-6",
    8: "sm:p-space-8",
    12: "sm:p-space-12",
  },
  md: {
    0: "md:p-0",
    1: "md:p-space-1",
    2: "md:p-space-2",
    3: "md:p-space-3",
    4: "md:p-space-4",
    6: "md:p-space-6",
    8: "md:p-space-8",
    12: "md:p-space-12",
  },
  lg: {
    0: "lg:p-0",
    1: "lg:p-space-1",
    2: "lg:p-space-2",
    3: "lg:p-space-3",
    4: "lg:p-space-4",
    6: "lg:p-space-6",
    8: "lg:p-space-8",
    12: "lg:p-space-12",
  },
}

const ALIGN: Record<Breakpoint, Record<StackAlign, string>> = {
  base: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  },
  sm: {
    start: "sm:items-start",
    center: "sm:items-center",
    end: "sm:items-end",
    stretch: "sm:items-stretch",
    baseline: "sm:items-baseline",
  },
  md: {
    start: "md:items-start",
    center: "md:items-center",
    end: "md:items-end",
    stretch: "md:items-stretch",
    baseline: "md:items-baseline",
  },
  lg: {
    start: "lg:items-start",
    center: "lg:items-center",
    end: "lg:items-end",
    stretch: "lg:items-stretch",
    baseline: "lg:items-baseline",
  },
}

const JUSTIFY: Record<Breakpoint, Record<StackJustify, string>> = {
  base: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  },
  sm: {
    start: "sm:justify-start",
    center: "sm:justify-center",
    end: "sm:justify-end",
    between: "sm:justify-between",
  },
  md: {
    start: "md:justify-start",
    center: "md:justify-center",
    end: "md:justify-end",
    between: "md:justify-between",
  },
  lg: {
    start: "lg:justify-start",
    center: "lg:justify-center",
    end: "lg:justify-end",
    between: "lg:justify-between",
  },
}

function classesFor<T extends string | number>(
  value: Responsive<T> | undefined,
  table: Record<Breakpoint, Record<T, string>>
): string[] {
  if (value === undefined) return []
  if (typeof value === "object") {
    return BREAKPOINTS.flatMap((breakpoint) => {
      const step = value[breakpoint]
      return step === undefined ? [] : [table[breakpoint][step]]
    })
  }
  return [table.base[value]]
}

function Stack({
  className,
  direction = "column",
  gap,
  align,
  justify,
  wrap = false,
  padding,
  render,
  ...props
}: useRender.ComponentProps<"div"> & {
  direction?: Responsive<StackDirection>
  gap?: Responsive<StackSpace>
  align?: Responsive<StackAlign>
  justify?: Responsive<StackJustify>
  wrap?: boolean
  padding?: Responsive<StackSpace>
}) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex",
          wrap && "flex-wrap",
          classesFor(direction, DIRECTION),
          classesFor(gap, GAP),
          classesFor(align, ALIGN),
          classesFor(justify, JUSTIFY),
          classesFor(padding, PADDING),
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "stack",
    },
  })
}

export { Stack }
