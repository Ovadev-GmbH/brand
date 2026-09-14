import { AuthCard, AuthLayout, OtpForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function VerifyCodeExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-20">Januna</span>}>
      <AuthCard title="Enter the code" description="We sent it by WhatsApp to +41 79 123 45 67.">
        <OtpForm onSubmit={(event) => event.preventDefault()} onResend={() => undefined} />
      </AuthCard>
    </AuthLayout>
  );
}
