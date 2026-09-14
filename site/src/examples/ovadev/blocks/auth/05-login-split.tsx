import { LoginForm } from "@ovadev-gmbh/ui-ovadev/blocks";

export default function LoginSplitExample() {
  return (
    <div className="grid min-h-[640px] lg:grid-cols-2">
      <div className="flex flex-col gap-space-6 p-space-6">
        <span className="text-label-14">Ovadev</span>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-sm flex-col gap-space-6">
            <div className="flex flex-col gap-space-1">
              <h1 className="text-heading-24">Sign in to Ovadev</h1>
              <p className="text-copy-14 text-content-secondary">Use your ova.dev account.</p>
            </div>
            <LoginForm onSubmit={(event) => event.preventDefault()} forgotHref="/forgot-password" signupHref="/signup" />
          </div>
        </div>
        <p className="text-label-12 text-content-tertiary">Team only. Every sign-in is kept for 90 days.</p>
      </div>
      {/* Ink carrying paper, with the one red block of the screen seated into its corner. */}
      <div className="relative hidden flex-col justify-end bg-brand p-space-8 lg:flex">
        <p className="max-w-md text-heading-24 text-content-inverse">
          Software, built and run in Baar, Switzerland. TICKETOVA for pools and venues, JANUNA for restaurants.
        </p>
        <span aria-hidden="true" className="absolute right-0 bottom-0 size-8 bg-brand-signal" />
      </div>
    </div>
  );
}
