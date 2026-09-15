import { AuthCard, AuthLayout, OtpForm } from "@ovadev-gmbh/ui-ticketova/blocks";

/** The code from WhatsApp, six cells, and a way to ask for a new one. */
export default function VerifyCodeExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-24">TICKETOVA</span>}>
      <AuthCard title="Enter the code" description="We sent it by WhatsApp to +41 79 123 45 67.">
        <OtpForm onSubmit={(event) => event.preventDefault()} onResend={() => undefined} />
      </AuthCard>
    </AuthLayout>
  );
}
