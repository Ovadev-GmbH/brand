import { AuthCard, AuthLayout, SignupForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function SignupExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-20">Januna</span>}>
      <AuthCard title="Create your account" description="Your restaurant can take its first booking tonight.">
        <SignupForm loginHref="/login" termsHref="/terms" privacyHref="/privacy" onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
