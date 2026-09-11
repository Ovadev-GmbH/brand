import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-regular border border-transparent bg-clip-padding text-button-14 whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand outline-none select-none focus-visible:ring-1 focus-visible:ring-brand-bright active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-1 aria-invalid:ring-status-danger [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-brand text-content-inverse hover:bg-brand-hover",
        outline:
          "border-transparent bg-surface-primary shadow-small text-content-primary hover:bg-surface-secondary aria-expanded:bg-surface-secondary",
        secondary:
          "bg-gray-alpha-200 text-content-primary hover:bg-gray-alpha-300 aria-expanded:bg-gray-alpha-300",
        ghost:
          "hover:bg-surface-hover hover:text-content-primary aria-expanded:bg-surface-hover aria-expanded:text-content-primary",
        destructive:
          "bg-status-danger/10 text-status-danger hover:bg-status-danger/20 focus-visible:border-status-danger/40 focus-visible:ring-status-danger",
        link: "text-content-brand underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-7 gap-1 px-2.5 text-button-12 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-12 gap-2 px-6 text-button-16 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
