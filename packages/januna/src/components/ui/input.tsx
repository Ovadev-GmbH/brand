import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "../../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-regular border border-transparent bg-surface-primary shadow-small px-3.5 py-1 text-copy-16 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-button-14 file:text-content-primary placeholder:text-content-tertiary focus-visible:ring-1 focus-visible:ring-brand-bright disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 aria-invalid:ring-status-danger md:text-copy-14",
        className
      )}
      {...props}
    />
  )
}

export { Input }
