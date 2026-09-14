import { AuthCard, AuthLayout, LoginForm } from "@ovadev-gmbh/ui-internal/blocks";

export default function LoginExample() {
  return (
    <AuthLayout
      className="min-h-[640px]"
      brand="Ovadev Internal"
      footer="Staff only. Every sign-in is written to the audit log with its IP and device."
    >
      <AuthCard title="Sign in" description="Use your ova.dev account.">
        <LoginForm onSubmit={(event) => event.preventDefault()} forgotHref="/forgot-password" signupHref="/signup" />
      </AuthCard>
    </AuthLayout>
  );
}
