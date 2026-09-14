import { AuthCard, AuthLayout, LoginForm } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function LoginExample() {
  return (
    <AuthLayout
      className="min-h-[640px]"
      brand="Ovadev"
      footer="Team only. Every sign-in is kept for 90 days with its IP and device."
    >
      <AuthCard title="Sign in to Ovadev" description="Use your ova.dev account.">
        <LoginForm onSubmit={(event) => event.preventDefault()} forgotHref="/forgot-password" signupHref="/signup" />
      </AuthCard>
    </AuthLayout>
  );
}
