import { AuthCard, AuthLayout, OtpForm } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function VerifyCodeExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand="Ovadev">
      <AuthCard title="Check your authenticator" description="Signing in as robin@ova.dev from a new device.">
        <OtpForm onSubmit={(event) => event.preventDefault()} onResend={() => undefined} />
      </AuthCard>
    </AuthLayout>
  );
}
