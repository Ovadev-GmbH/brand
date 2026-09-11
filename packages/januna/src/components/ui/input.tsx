import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "../../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-regular border border-transparent bg-surface-primary shadow-small px-2.5 py-1 text-copy-16 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-button-14 file:text-content-primary placeholder:text-content-tertiary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-copy-14",
        className
      )}
      {...props}
    />
  )
}

export { Input }
