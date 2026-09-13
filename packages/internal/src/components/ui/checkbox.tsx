"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "../../lib/utils"
import { CheckIcon, MinusIcon } from "lucide-react"

/* Base UI renders the box as a <span>, so its states are data attributes:
   `data-disabled` dims it (a `disabled:` variant never matches a span), and
   `data-indeterminate` fills it and swaps the tick for a dash. */
function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group/checkbox peer relative flex size-4 shrink-0 items-center justify-center rounded-regular border border-divider-strong bg-surface-primary transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-1 focus-visible:ring-brand-bright data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:ring-1 aria-invalid:ring-status-danger data-checked:bg-brand data-checked:text-content-inverse data-indeterminate:bg-brand data-indeterminate:text-content-inverse",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon className="group-data-indeterminate/checkbox:hidden" />
        <MinusIcon className="hidden group-data-indeterminate/checkbox:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
