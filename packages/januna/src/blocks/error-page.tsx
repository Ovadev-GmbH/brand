"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/* A whole error screen: the status, what happened in one line, what the
   reader can do about it. Centred on the sheet with more air than object;
   the parts stack in a column and the page takes the viewport unless a
   className says otherwise. */
function ErrorPage({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="error-page"
      className={cn("flex min-h-svh w-full flex-col items-center justify-center gap-space-4 bg-surface-primary p-space-8 text-center", className)}
      {...props}
    />
  );
}

/* The status code, in mono and the least important ink: a reference, not a headline. */
function ErrorPageCode({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="error-page-code" className={cn("text-label-13-mono text-content-tertiary", className)} {...props} />;
}

function ErrorPageTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 data-slot="error-page-title" className={cn("text-heading-32 text-content-primary", className)} {...props} />;
}

function ErrorPageDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="error-page-description" className={cn("max-w-md text-copy-16 text-content-secondary", className)} {...props} />;
}

/* The way out: one primary button, at most one secondary beside it. */
function ErrorPageActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="error-page-actions" className={cn("mt-space-2 flex flex-wrap items-center justify-center gap-space-2", className)} {...props} />;
}

export { ErrorPage, ErrorPageCode, ErrorPageTitle, ErrorPageDescription, ErrorPageActions };
