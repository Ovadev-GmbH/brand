// Form controls on the Ovadev Design System classes, sized for tool UIs, and
// the toolbar that lines them up: filters left, count and actions right.

import * as React from "react";
import { useLink } from "./link";

export function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="search" {...props} className={`ov-input ov-input--sm ui-search ${props.className ?? ""}`} />;
}

export function Select({ children, className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className={`ov-select__wrap ui-select ${className ?? ""}`}>
      <select {...props} className="ov-select ov-select--sm">
        {children}
      </select>
      <span className="ov-select__caret" aria-hidden="true" />
    </span>
  );
}

export function Toolbar({
  children,
  meta,
  actions,
}: {
  children: React.ReactNode;
  /** Result count or similar, right of the filters. */
  meta?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="ui-toolbar">
      <div className="ui-toolbar__filters">{children}</div>
      {meta || actions ? (
        <div className="ui-toolbar__right">
          {meta ? <span className="ui-toolbar__meta ui-num">{meta}</span> : null}
          {actions ? <span className="ui-toolbar__actions">{actions}</span> : null}
        </div>
      ) : null}
    </div>
  );
}

export type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md";
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

/** Button or link in button clothes. `href` starting with mailto:/tel:/http renders a plain <a>. */
export function Button({ variant = "outline", size = "sm", href, external, disabled, onClick, children, className, title }: ButtonProps) {
  const Link = useLink();
  const cls = `ov-btn ov-btn--${variant} ov-btn--${size} ${className ?? ""}`;
  if (href) {
    if (external || /^(mailto:|tel:|https?:)/.test(href)) {
      return (
        <a className={cls} href={href} title={title} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} disabled={disabled} title={title}>
      {children}
    </button>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { value: T; label: React.ReactNode; off?: boolean }[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel?: string;
}) {
  return (
    <div className="ui-seg" role="group" aria-label={ariaLabel}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`ui-seg__btn ${value === o.value ? "ui-seg__btn--active" : ""} ${o.off ? "ui-seg__btn--off" : ""}`}
          onClick={() => !o.off && onChange(o.value)}
          aria-pressed={value === o.value}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Copy-to-clipboard button with a short confirmation state. */
export function CopyButton({ text, label, disabled }: { text: () => string; label: string; disabled?: boolean }) {
  const [done, setDone] = React.useState(false);
  return (
    <Button
      disabled={disabled}
      onClick={async () => {
        const t = text();
        try {
          await navigator.clipboard.writeText(t);
          setDone(true);
          window.setTimeout(() => setDone(false), 1600);
        } catch {
          window.prompt("Kopieren:", t);
        }
      }}
    >
      {done ? "Kopiert" : label}
    </Button>
  );
}
