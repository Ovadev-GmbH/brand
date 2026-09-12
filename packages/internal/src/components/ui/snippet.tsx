"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon } from "lucide-react"
import { Button } from "./button"
import { cn } from "../../lib/utils"

const COPIED_FOR = 1200

/* Copies to the clipboard and reports "copied" for a moment afterwards;
 * `copied` from outside takes over the report. */
function useCopy(onCopy?: () => void, controlled?: boolean) {
  const [copied, setCopied] = React.useState(false)
  const timer = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    }
  }, [])

  const copy = React.useCallback(
    (value: string) => {
      const write =
        typeof navigator !== "undefined" && navigator.clipboard
          ? navigator.clipboard.writeText(value)
          : Promise.resolve()
      void write.then(
        () => {
          onCopy?.()
          setCopied(true)
          if (timer.current !== null) window.clearTimeout(timer.current)
          timer.current = window.setTimeout(() => {
            setCopied(false)
            timer.current = null
          }, COPIED_FOR)
        },
        () => undefined
      )
    },
    [onCopy]
  )

  return { copied: controlled ?? copied, copy }
}

const snippetVariants = cva(
  "group/snippet flex w-full items-start gap-2 rounded-regular border px-3 py-3 text-label-13-mono transition-[color,background-color,border-color,box-shadow] duration-fast ease-brand",
  {
    variants: {
      variant: {
        default:
          "material-base border-transparent text-content-primary **:data-[slot=snippet-line]:before:text-content-tertiary",
        success:
          "border-status-success/30 bg-surface-success text-status-success **:data-[slot=snippet-line]:before:opacity-60",
        warning:
          "border-status-warning/30 bg-surface-warning text-status-warning **:data-[slot=snippet-line]:before:opacity-60",
        error:
          "border-status-danger/30 bg-surface-danger text-status-danger **:data-[slot=snippet-line]:before:opacity-60",
      },
      prompt: {
        true: "**:data-[slot=snippet-line]:before:mr-2 **:data-[slot=snippet-line]:before:content-['$'] **:data-[slot=snippet-line]:before:select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      prompt: true,
    },
  }
)

function Snippet({
  className,
  text,
  prompt = true,
  variant = "default",
  copyText,
  onCopy,
  copied: copiedProp,
  placeholder,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> &
  Omit<VariantProps<typeof snippetVariants>, "prompt"> & {
    /** One line per entry. */
    text: string | string[]
    /** A "$" before each line; not part of what is copied. */
    prompt?: boolean
    /** What the copy button writes; defaults to the lines joined by newlines. */
    copyText?: string
    onCopy?: () => void
    /** Controls the "copied" report. */
    copied?: boolean
    /** Shown in place of empty text. */
    placeholder?: string
  }) {
  const lines = Array.isArray(text) ? text : [text]
  const empty = lines.every((line) => line.length === 0)
  const { copied, copy } = useCopy(onCopy, copiedProp)
  const value = copyText ?? lines.join("\n")

  return (
    <div
      data-slot="snippet"
      data-variant={variant}
      data-copied={copied || undefined}
      className={cn(snippetVariants({ variant, prompt }), className)}
      {...props}
    >
      <div data-slot="snippet-lines" className="flex min-w-0 flex-1 flex-col">
        {empty ? (
          <span
            data-slot="snippet-line"
            data-placeholder=""
            className="truncate text-content-tertiary"
          >
            {placeholder}
          </span>
        ) : (
          lines.map((line, index) => (
            <span
              key={index}
              data-slot="snippet-line"
              className="truncate"
            >
              {line}
            </span>
          ))
        )}
      </div>
      <Button
        data-slot="snippet-copy"
        variant="ghost"
        size="icon-xs"
        className="-my-1.5 -mr-1.5 text-current hover:text-current"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        disabled={empty}
        onClick={() => copy(value)}
      >
        {copied ? (
          <CheckIcon className="size-4 text-status-success" />
        ) : (
          <CopyIcon className="size-4" />
        )}
      </Button>
    </div>
  )
}

const MASK = "••••••••••••"

function SecretValue({
  className,
  value,
  label = "secret",
  defaultRevealed = false,
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & {
  value: string
  /** Names the value for assistive technology: "Reveal API key". */
  label?: string
  defaultRevealed?: boolean
}) {
  const [revealed, setRevealed] = React.useState(defaultRevealed)

  return (
    <span
      data-slot="secret-value"
      data-revealed={revealed || undefined}
      className={cn(
        "inline-flex h-8 max-w-full items-center gap-1.5 rounded-regular bg-surface-secondary pr-1 pl-2.5 text-label-13-mono text-content-primary",
        className
      )}
      {...props}
    >
      <span
        data-slot="secret-value-text"
        className={cn("truncate", !revealed && "select-none tracking-wider")}
        aria-label={revealed ? undefined : `${label}, hidden`}
      >
        {revealed ? value : MASK}
      </span>
      <Button
        data-slot="secret-value-toggle"
        variant="ghost"
        size="icon-xs"
        className="-my-1 shrink-0 text-content-secondary"
        aria-pressed={revealed}
        aria-label={`${revealed ? "Hide" : "Reveal"} ${label}`}
        onClick={() => setRevealed((state) => !state)}
      >
        {revealed ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
      </Button>
    </span>
  )
}

export { Snippet, SecretValue, snippetVariants }
