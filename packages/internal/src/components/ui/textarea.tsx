import * as React from "react"
import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-regular border border-transparent bg-surface-primary shadow-base px-2.5 py-1.5 text-copy-13 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none placeholder:text-content-tertiary focus-visible:ring-1 focus-visible:ring-brand-bright disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 aria-invalid:ring-status-danger",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
