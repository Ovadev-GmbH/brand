import { AuthCard, AuthLayout, GoogleSignInForm, OvadevMark } from "@ovadev-gmbh/ui-ovadev/blocks";

/** master.ova.dev: the one door for the people who run things, opened with
 *  a Google account. */
export default function GoogleExample() {
  return (
    <AuthLayout
      brand={
        <>
          <OvadevMark width={20} height={20} />
          <span className="text-label-14">master.ova.dev</span>
        </>
      }
    >
      <AuthCard title="Sign in" description="Use your Ovadev Google account.">
        <GoogleSignInForm onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
