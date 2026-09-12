import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

// A ring that shows how much of something is used: quota consumed, disk on a
// deployment. The primary arc grows clockwise from twelve; the rest is the track.
// The colour follows the value by default (grey, blue, yellow, green as it
// fills), or is fixed with `colors={{ primary, secondary }}`.

type GaugeSize = "tiny" | "sm" | "default" | "lg"

type GaugeColors =
  | { primary: string; secondary?: string }
  // Thresholds: the highest key at or below the value wins.
  | Record<string, string>

const TRACK = "var(--int-gray-alpha-200)"

const DEFAULT_COLORS: Record<string, string> = {
  "0": "var(--int-gray-500)",
  "14": "var(--int-blue-800)",
  "34": "var(--int-yellow-700)",
  "68": "var(--int-green-800)",
}

const GEOMETRY: Record<GaugeSize, { px: number; stroke: number }> = {
  tiny: { px: 20, stroke: 2 },
  sm: { px: 32, stroke: 3 },
  default: { px: 48, stroke: 5 },
  lg: { px: 64, stroke: 6 },
}

const gaugeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        tiny: "size-5",
        sm: "size-8",
        default: "size-12",
        lg: "size-16",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const gaugeValueVariants = cva(
  "pointer-events-none absolute inset-0 flex items-center justify-center text-content-primary select-none",
  {
    variants: {
      size: {
        tiny: "sr-only",
        sm: "text-label-12-mono",
        default: "text-label-13-mono",
        lg: "text-label-13-mono",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function resolveColors(
  colors: GaugeColors,
  value: number
): { primary: string; secondary: string } {
  const pair = colors as { primary?: unknown; secondary?: unknown }
  if (typeof pair.primary === "string") {
    return {
      primary: pair.primary,
      secondary: typeof pair.secondary === "string" ? pair.secondary : TRACK,
    }
  }
  const steps = Object.entries(colors)
    .map(([key, color]) => [Number(key), color] as const)
    .filter(([threshold]) => Number.isFinite(threshold))
    .sort((a, b) => a[0] - b[0])
  let primary = steps[0]?.[1] ?? TRACK
  for (const [threshold, color] of steps) {
    if (value >= threshold) primary = color
  }
  return { primary, secondary: TRACK }
}

function Gauge({
  className,
  value,
  size = "default",
  showValue = false,
  colors = DEFAULT_COLORS,
  arcPriority = "primary",
  indeterminate = false,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> &
  VariantProps<typeof gaugeVariants> & {
    /** 0–100. */
    value: number
    /** The rounded value in the centre; never on `tiny`, there is no room. */
    showValue?: boolean
    colors?: GaugeColors
    /** `equal` draws both arcs at the same weight with a gap, for a true ratio. */
    arcPriority?: "primary" | "equal"
    /** A turning partial arc while the value is unknown. */
    indeterminate?: boolean
  }) {
  const resolvedSize: GaugeSize = size ?? "default"
  const { px, stroke } = GEOMETRY[resolvedSize]
  const centre = px / 2
  const radius = (px - stroke) / 2
  const circumference = 2 * Math.PI * radius

  const clamped = Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0))
  const rounded = Math.round(clamped)
  const fraction = clamped / 100
  const { primary, secondary } = resolveColors(colors, clamped)

  // Round caps add half a stroke at each end, so a gap between two arcs must
  // leave room for both caps and still show daylight.
  const gap = arcPriority === "equal" && fraction > 0 && fraction < 1 ? stroke * 2 : 0
  const primaryLength = circumference * fraction - gap
  const secondaryLength = circumference * (1 - fraction) - gap

  const arcProps = {
    cx: centre,
    cy: centre,
    r: radius,
    fill: "none",
    strokeWidth: stroke,
    strokeLinecap: "round",
  } as const

  return (
    <div
      data-slot="gauge"
      data-size={resolvedSize}
      data-indeterminate={indeterminate || undefined}
      role={indeterminate ? "progressbar" : "meter"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : rounded}
      aria-valuetext={indeterminate ? undefined : `${rounded}%`}
      className={cn(gaugeVariants({ size: resolvedSize }), className)}
      {...props}
    >
      <svg
        data-slot="gauge-ring"
        viewBox={`0 0 ${px} ${px}`}
        aria-hidden="true"
        className={cn(
          "size-full",
          indeterminate && "animate-spin motion-reduce:animate-none"
        )}
      >
        <g transform={`rotate(-90 ${centre} ${centre})`}>
          {indeterminate ? (
            <>
              <circle
                data-slot="gauge-track"
                {...arcProps}
                strokeLinecap="butt"
                stroke={secondary}
              />
              <circle
                data-slot="gauge-arc"
                {...arcProps}
                stroke={primary}
                strokeDasharray={`${circumference * 0.25} ${circumference}`}
              />
            </>
          ) : arcPriority === "equal" ? (
            <>
              {secondaryLength > 0 && (
                <circle
                  data-slot="gauge-track"
                  {...arcProps}
                  stroke={secondary}
                  strokeDasharray={`${secondaryLength} ${circumference}`}
                  strokeDashoffset={-(circumference * fraction + gap / 2)}
                  className="transition-[stroke-dasharray,stroke-dashoffset] duration-base ease-brand"
                />
              )}
              {primaryLength > 0 && (
                <circle
                  data-slot="gauge-arc"
                  {...arcProps}
                  stroke={primary}
                  strokeDasharray={`${primaryLength} ${circumference}`}
                  strokeDashoffset={-(gap / 2)}
                  className="transition-[stroke-dasharray,stroke] duration-base ease-brand"
                />
              )}
            </>
          ) : (
            <>
              <circle
                data-slot="gauge-track"
                {...arcProps}
                strokeLinecap="butt"
                stroke={secondary}
              />
              {fraction > 0 && (
                <circle
                  data-slot="gauge-arc"
                  {...arcProps}
                  stroke={primary}
                  strokeDasharray={`${circumference * fraction} ${circumference}`}
                  className="transition-[stroke-dasharray,stroke] duration-base ease-brand"
                />
              )}
            </>
          )}
        </g>
      </svg>
      {showValue && !indeterminate && (
        <span
          data-slot="gauge-value"
          aria-hidden="true"
          className={cn(gaugeValueVariants({ size: resolvedSize }))}
        >
          {rounded}
        </span>
      )}
    </div>
  )
}

export { Gauge, gaugeVariants }
