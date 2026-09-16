import { AuthCard, AuthLayout, PhoneSignInForm } from "@ovadev-gmbh/ui-ticketova/blocks";

/** Staff sign in to the dashboard with their mobile number; the code
 *  follows by WhatsApp on the next screen (see Verify Code). */
export default function PhoneExample() {
  return (
    <AuthLayout brand={<span className="text-heading-24">TICKETOVA</span>}>
      <AuthCard title="Sign in" description="Enter the mobile number your pool registered for you.">
        <PhoneSignInForm onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
