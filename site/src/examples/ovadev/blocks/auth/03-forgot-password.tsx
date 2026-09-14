import { AuthCard, AuthLayout, ForgotPasswordForm } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function ForgotPasswordExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand="Ovadev Internal">
      <AuthCard title="Reset your password" description="We send a link that is valid for 30 minutes.">
        <ForgotPasswordForm onSubmit={(event) => event.preventDefault()} loginHref="/login" />
      </AuthCard>
    </AuthLayout>
  );
}
