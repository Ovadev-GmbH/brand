"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../components/ui/field";
import { Input } from "../components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

type FormProps = Omit<React.ComponentProps<"form">, "onSubmit"> & {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

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

function LoginForm({
  onSubmit,
  forgotHref,
  signupHref,
  className,
  ...props
}: FormProps & { forgotHref?: string; signupHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="login-form" className={cn("flex flex-col gap-space-6", className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>Email</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@restaurant.ch" required />
        </Field>
        <Field>
          <div className="flex items-center justify-between gap-space-2">
            <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
            {forgotHref ? (
              <a href={forgotHref} className="text-label-13 text-content-brand underline-offset-4 hover:underline">
                Forgot password?
              </a>
            ) : null}
          </div>
          <Input id={`${id}-password`} name="password" type="password" autoComplete="current-password" required />
        </Field>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </FieldGroup>
      {signupHref ? (
        <AuthLink>
          New to Januna? <a href={signupHref}>Create an account</a>
        </AuthLink>
      ) : null}
    </form>
  );
}

function SignupForm({
  onSubmit,
  loginHref,
  termsHref = "#",
  privacyHref = "#",
  className,
  ...props
}: FormProps & { loginHref?: string; termsHref?: string; privacyHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="signup-form" className={cn("flex flex-col gap-space-6", className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-name`}>Name</FieldLabel>
          <Input id={`${id}-name`} name="name" autoComplete="name" placeholder="Lena Brunner" required />
        </Field>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>Email</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@restaurant.ch" required />
        </Field>
        <Field>
          <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
          <Input id={`${id}-password`} name="password" type="password" autoComplete="new-password" minLength={12} required />
          <FieldDescription>At least 12 characters.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id={`${id}-terms`} name="terms" required />
          <FieldLabel htmlFor={`${id}-terms`} className="inline text-copy-14 [&_a]:text-content-brand [&_a]:underline-offset-4 [&_a:hover]:underline">
            I agree to the <a href={termsHref}>terms of service</a> and the <a href={privacyHref}>privacy policy</a>
          </FieldLabel>
        </Field>
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </FieldGroup>
      {loginHref ? (
        <AuthLink>
          Already have an account? <a href={loginHref}>Sign in</a>
        </AuthLink>
      ) : null}
    </form>
  );
}

function ForgotPasswordForm({ onSubmit, backHref, className, ...props }: FormProps & { backHref?: string }) {
  const id = React.useId();
  return (
    <form data-slot="forgot-password-form" className={cn("flex flex-col gap-space-6", className)} onSubmit={onSubmit} {...props}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={`${id}-email`}>Email</FieldLabel>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@restaurant.ch" required />
        </Field>
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </FieldGroup>
      {backHref ? (
        <AuthLink>
          <a href={backHref}>Back to sign in</a>
        </AuthLink>
      ) : null}
    </form>
  );
}

/* The one-time code from the e-mail: six cells drawn as one control, the
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
          <FieldDescription>Enter the {length}-digit code we sent to your e-mail.</FieldDescription>
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

export { AuthLayout, AuthCard, AuthLink, LoginForm, SignupForm, ForgotPasswordForm, OtpForm };
