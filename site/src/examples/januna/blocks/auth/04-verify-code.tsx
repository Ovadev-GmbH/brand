import { AuthCard, AuthLayout, OtpForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function VerifyCodeExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-20">Januna</span>}>
      <AuthCard title="Check your e-mail" description="We sent a code to lena@trattoriasole.ch.">
        <OtpForm onSubmit={(event) => event.preventDefault()} onResend={() => undefined} />
      </AuthCard>
    </AuthLayout>
  );
}
