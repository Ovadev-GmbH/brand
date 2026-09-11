import * as React from "react"
import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-none rounded-regular border border-transparent bg-surface-primary shadow-small px-2.5 py-2 text-copy-16 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none placeholder:text-content-tertiary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-copy-14",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
