import { AuthCard, AuthLayout, SignupForm } from "@ovadev-gmbh/ui-internal/blocks";

export default function SignupExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand="Ovadev Internal">
      <AuthCard title="Create your account" description="An invitation from an admin is required; use the e-mail it was sent to.">
        <SignupForm onSubmit={(event) => event.preventDefault()} termsHref="/terms" loginHref="/login" />
      </AuthCard>
    </AuthLayout>
  );
}
