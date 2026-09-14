"use client";

import * as React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../components/ui/field";
import { Input } from "../components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { cn } from "../lib/utils";


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

/* The sign-in page: the brand above, the card in the middle, a footer line
   beneath. Full height by default; a className fits it into a box. */
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
      className={cn("flex min-h-svh flex-col items-center justify-center gap-space-6 bg-surface-primary p-space-6", className)}
      {...props}
    >
      {brand ? (
        <div data-slot="auth-layout-brand" className="flex items-center gap-space-2 text-label-14 text-content-primary">
          {brand}
        </div>
      ) : null}
      <div data-slot="auth-layout-body" className="w-full max-w-sm">
        {children}
      </div>
      <SecuredBy />
      {footer ? (
        <div data-slot="auth-layout-footer" className="max-w-sm text-center text-label-12 text-content-tertiary">
          {footer}
        </div>
      ) : null}
    </main>
  );
}

/* The card a form sits in: a title, one line on what the form does. */
function AuthCard({
  title,
  description,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card> & { title: React.ReactNode; description?: React.ReactNode }) {
  return (
    <Card data-slot="auth-card" className={cn("w-full [--card-spacing:--spacing(6)]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

const linkClass = "text-content-brand underline-offset-4 hover:underline";

type FormProps = Omit<React.ComponentProps<"form">, "onSubmit"> & {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

/* E-mail and password. The form is uncontrolled; read the fields from the
   event's FormData in onSubmit. */
function LoginForm({ onSubmit, forgotHref, signupHref, className, ...props }: FormProps & { forgotHref?: string; signupHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="auth-login-form" className={cn(className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>E-mail</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@ova.dev" required />
        </Field>
        <Field>
          <div className="flex items-center justify-between gap-space-2">
            <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
            {forgotHref ? (
              <a href={forgotHref} className={cn("text-label-12", linkClass)}>
                Forgot password?
              </a>
            ) : null}
          </div>
          <Input id={`${id}-password`} name="password" type="password" autoComplete="current-password" required />
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Sign in
          </Button>
          {signupHref ? (
            <FieldDescription className="text-center">
              No account yet? <a href={signupHref}>Create one</a>
            </FieldDescription>
          ) : null}
        </Field>
      </FieldGroup>
    </form>
  );
}

/* Name, e-mail, password and the terms. */
function SignupForm({
  onSubmit,
  termsHref,
  loginHref,
  className,
  ...props
}: FormProps & { termsHref?: string; loginHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="auth-signup-form" className={cn(className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-name`}>Name</FieldLabel>
          <Input id={`${id}-name`} name="name" autoComplete="name" placeholder="Robin Markant" required />
        </Field>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>E-mail</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@ova.dev" required />
        </Field>
        <Field>
          <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
          <Input id={`${id}-password`} name="password" type="password" autoComplete="new-password" minLength={12} required />
          <FieldDescription>At least 12 characters.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id={`${id}-terms`} name="terms" required />
          <FieldLabel htmlFor={`${id}-terms`}>
            <span>
              I agree to the {termsHref ? <a href={termsHref} className={linkClass}>terms of service</a> : "terms of service"}
            </span>
          </FieldLabel>
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Create account
          </Button>
          {loginHref ? (
            <FieldDescription className="text-center">
              Already have an account? <a href={loginHref}>Sign in</a>
            </FieldDescription>
          ) : null}
        </Field>
      </FieldGroup>
    </form>
  );
}

/* One field: where to send the reset link. */
function ForgotPasswordForm({ onSubmit, loginHref, className, ...props }: FormProps & { loginHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="auth-forgot-password-form" className={cn(className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>E-mail</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@ova.dev" required />
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Send reset link
          </Button>
          {loginHref ? (
            <FieldDescription className="text-center">
              <a href={loginHref}>Back to sign in</a>
            </FieldDescription>
          ) : null}
        </Field>
      </FieldGroup>
    </form>
  );
}

/* The one-time code, one cell per digit. `onResend` asks for a new code. */
function OtpForm({
  onSubmit,
  onResend,
  length = 6,
  className,
  ...props
}: FormProps & { onResend?: () => void; length?: number }) {
  const id = React.useId();
  return (
    <form data-slot="auth-otp-form" className={cn(className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-code`}>Code</FieldLabel>
          <InputOTP id={`${id}-code`} name="code" maxLength={length} autoComplete="one-time-code" containerClassName="w-fit">
            <InputOTPGroup>
              {Array.from({ length }, (_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            The {length}-digit code from your authenticator app or the e-mail we sent.
          </FieldDescription>
        </Field>
        <Field>
          <Button type="submit" size="lg" className="w-full">
            Verify
          </Button>
          <FieldDescription className="text-center">
            <button type="button" className={cn("text-copy-13", linkClass)} onClick={onResend}>
              Resend code
            </button>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}


/* Sign in with a Google account: one button, and a line on whose accounts
   are let in. The G is Google's own, in its colours, as its guidelines ask. */
function GoogleSignInForm({ onSubmit, hint = "Only Ovadev accounts can sign in.", className, ...props }: FormProps & { hint?: React.ReactNode }) {
  return (
    <form data-slot="google-sign-in-form" className={cn("flex flex-col gap-space-4", className)} onSubmit={onSubmit} {...props}>
      <Button type="submit" variant="outline" size="lg" className="w-full">
        <svg data-icon="inline-start" viewBox="0 0 18 18" aria-hidden="true">
          <path fill="#4285f4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z" />
          <path fill="#34a853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z" />
          <path fill="#fbbc05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33Z" />
          <path fill="#ea4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z" />
        </svg>
        Continue with Google
      </Button>
      {hint ? <p className="text-center text-label-12 text-content-tertiary">{hint}</p> : null}
    </form>
  );
}

export { AuthLayout, AuthCard, LoginForm, SignupForm, ForgotPasswordForm, OtpForm, OvadevMark, SecuredBy, GoogleSignInForm };
