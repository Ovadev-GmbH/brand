import { AuthCard, AuthLayout, ForgotPasswordForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function ForgotPasswordExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-20">Januna</span>}>
      <AuthCard title="Reset your password" description="We'll e-mail you a link that is valid for one hour.">
        <ForgotPasswordForm backHref="/login" onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
