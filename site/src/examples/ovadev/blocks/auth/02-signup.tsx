import { AuthCard, AuthLayout, SignupForm } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function SignupExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand="Ovadev">
      <AuthCard title="Create your account" description="An invitation from the team is required; use the e-mail it was sent to.">
        <SignupForm onSubmit={(event) => event.preventDefault()} termsHref="/terms" loginHref="/login" />
      </AuthCard>
    </AuthLayout>
  );
}
