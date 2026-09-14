import { AuthCard, AuthLayout, PhoneSignInForm } from "@ovadev-gmbh/ui-januna/blocks";

/** The restaurant signs in with a mobile number; the code follows on
 *  the next screen (see Verify Code). */
export default function PhoneExample() {
  return (
    <AuthLayout className="min-h-[640px]" brand={<span className="text-heading-20">Januna</span>}>
      <AuthCard title="Sign in" description="Enter the mobile number of the restaurant.">
        <PhoneSignInForm onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
