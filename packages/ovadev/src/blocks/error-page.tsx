"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/* A whole error screen: the status, what happened, what to do. The page is
   a centred column the height of the viewport; give it a className to fit
   it into a smaller box. */
function ErrorPage({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="error-page"
      className={cn("flex min-h-svh flex-col items-center justify-center gap-space-3 p-space-8 text-center", className)}
      {...props}
    />
  );
}

/* The status code as a meta line: caps mono at wide tracking, tertiary. */
function ErrorPageCode({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="error-page-code" className={cn("text-label-11-caps-mono text-content-tertiary", className)} {...props} />;
}

function ErrorPageTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 data-slot="error-page-title" className={cn("text-heading-24 text-content-primary", className)} {...props} />;
}

function ErrorPageDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="error-page-description"
      className={cn("max-w-md text-copy-14 text-balance text-content-secondary", className)}
      {...props}
    />
  );
}

/* The row of what to do next: the primary action first. */
function ErrorPageActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="error-page-actions"
      className={cn("flex flex-wrap items-center justify-center gap-space-2 pt-space-3", className)}
      {...props}
    />
  );
}

export { ErrorPage, ErrorPageCode, ErrorPageTitle, ErrorPageDescription, ErrorPageActions };
