import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-regular border border-transparent px-2 py-0.5 text-label-12 whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-brand focus-visible:ring-1 focus-visible:ring-brand-bright has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:ring-1 aria-invalid:ring-status-danger [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-brand text-content-inverse [a]:hover:bg-brand-hover",
        secondary:
          "bg-gray-alpha-200 text-content-primary [a]:hover:bg-gray-alpha-300",
        destructive:
          "bg-status-danger/10 text-status-danger focus-visible:ring-status-danger [a]:hover:bg-status-danger/20",
        outline:
          "bg-surface-primary text-content-primary shadow-base [a]:hover:bg-surface-hover [a]:hover:text-content-secondary",
        ghost:
          "hover:bg-surface-hover hover:text-content-secondary",
        link: "text-content-brand underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
