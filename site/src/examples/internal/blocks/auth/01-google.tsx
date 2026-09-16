import { AuthCard, AuthLayout, GoogleSignInForm, OvadevMark } from "@ovadev-gmbh/ui-internal/blocks";

export default function GoogleExample() {
  return (
    <AuthLayout
      brand={
        <>
          <OvadevMark width={20} height={20} />
          <span className="text-label-14">Ovadev Internal</span>
        </>
      }
    >
      <AuthCard title="Sign in" description="Use your Ovadev Google account.">
        <GoogleSignInForm onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
