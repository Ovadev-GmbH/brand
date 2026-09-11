import * as React from "react"
import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full resize-none rounded-regular border border-transparent bg-surface-primary shadow-small px-3.5 py-2.5 text-copy-16 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none placeholder:text-content-tertiary focus-visible:ring-1 focus-visible:ring-brand-bright disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 aria-invalid:ring-status-danger md:text-copy-14",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
