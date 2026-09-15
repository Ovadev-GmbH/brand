"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

type FormProps = Omit<React.ComponentProps<"form">, "onSubmit"> & {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};


/* The Ovadev mark, cut on eight cells: ink, the counter punched, the red
   block seated in the lower right. Every auth screen carries it, with the
   words, because the sign-in is Ovadev's wherever the screen is. */
function OvadevMark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg data-slot="ovadev-mark" viewBox="0 0 8 8" width="16" height="16" aria-hidden="true" className={cn("shrink-0", className)} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 0h8v5H5v3H0Zm3 3v2h2V3Z" />
      <path fill="#e8202a" d="M5 5h3v3H5Z" />
    </svg>
  );
}

/* "Secured by Ovadev", the mark beside it. Under every auth card. */
function SecuredBy({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p data-slot="secured-by" className={cn("flex items-center justify-center gap-space-2 text-label-12 text-content-tertiary", className)} {...props}>
      <OvadevMark className="text-content-primary" />
      Secured by Ovadev
    </p>
  );
}

/* The page around an auth card: the taupe island edge to edge, the brand
   above the card, a line of small print below. Everything is centred and
   the card keeps its width on any screen. */
function AuthLayout({
  brand,
  footer,
  className,
  children,
  ...props
}: React.ComponentProps<"main"> & { brand?: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <main
      data-slot="auth-layout"
      className={cn("flex min-h-svh w-full flex-col items-center justify-center gap-space-6 bg-surface-tertiary p-space-6", className)}
      {...props}
    >
      {brand ? (
        <div data-slot="auth-layout-brand" className="flex items-center justify-center text-content-primary">
          {brand}
        </div>
      ) : null}
      {children}
      <SecuredBy />
      {footer ? (
        <div data-slot="auth-layout-footer" className="max-w-sm text-center text-label-13 text-content-secondary [&_a]:text-content-brand [&_a]:underline-offset-4 [&_a:hover]:underline">
          {footer}
        </div>
      ) : null}
    </main>
  );
}

/* The card: what the reader is here to do, one line on how, then the form. */
function AuthCard({
  title,
  description,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card> & { title: React.ReactNode; description?: React.ReactNode }) {
  return (
    <Card data-slot="auth-card" className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-heading-20">{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

/* A line under a form that points somewhere else: "New here? Create an account". */
function AuthLink({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="auth-link"
      className={cn("text-center text-copy-14 text-content-secondary [&_a]:text-content-brand [&_a]:underline-offset-4 [&_a:hover]:underline", className)}
      {...props}
    />
  );
}

/* The one-time code from the phone: six cells drawn as one control, the
   submit, and a way to get a fresh code. */
function OtpForm({
  onSubmit,
  onResend,
  length = 6,
  className,
  ...props
}: FormProps & { onResend?: () => void; length?: number }) {
  const id = React.useId();
  return (
    <form data-slot="otp-form" className={cn("flex flex-col gap-space-6", className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-code`}>Verification code</FieldLabel>
          <InputOTP id={`${id}-code`} name="code" maxLength={length} autoComplete="one-time-code" required>
            <InputOTPGroup>
              {Array.from({ length }, (_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>Enter the {length}-digit code we sent to your phone.</FieldDescription>
        </Field>
        <Button type="submit" className="w-full">
          Verify
        </Button>
      </FieldGroup>
      <AuthLink>
        Didn't get a code?{" "}
        <Button type="button" variant="link" className="h-auto p-0 text-copy-14" onClick={onResend}>
          Resend code
        </Button>
      </AuthLink>
    </form>
  );
}


/* Sign in with a Swiss mobile number: the country code is fixed, the
   number is typed the way it is said, and the code arrives by WhatsApp or
   SMS. The next screen is OtpForm. */
function PhoneSignInForm({ onSubmit, className, ...props }: FormProps) {
  const id = React.useId();
  return (
    <form data-slot="phone-sign-in-form" className={cn("flex flex-col gap-space-6", className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-phone`}>Mobile number</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>+41</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="79 123 45 67"
              pattern="[0-9 ]{9,13}"
              required
            />
          </InputGroup>
          <FieldDescription>We send a code by WhatsApp, or by SMS if you prefer.</FieldDescription>
        </Field>
        <Button type="submit" className="w-full">
          Send code
        </Button>
      </FieldGroup>
    </form>
  );
}

export { AuthLayout, AuthCard, AuthLink, OvadevMark, SecuredBy, PhoneSignInForm, OtpForm };
