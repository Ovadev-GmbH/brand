import { LoginForm } from "@ovadev-gmbh/ui-internal/blocks";

export default function LoginSplitExample() {
  return (
    <div className="grid min-h-[640px] lg:grid-cols-2">
      <div className="flex flex-col gap-space-6 p-space-6">
        <span className="text-label-14">Ovadev Internal</span>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-sm flex-col gap-space-6">
            <div className="flex flex-col gap-space-1">
              <h1 className="text-heading-24">Sign in</h1>
              <p className="text-copy-14 text-content-secondary">Use your ova.dev account.</p>
            </div>
            <LoginForm onSubmit={(event) => event.preventDefault()} forgotHref="/forgot-password" signupHref="/signup" />
          </div>
        </div>
        <p className="text-label-12 text-content-tertiary">Staff only. Every sign-in is written to the audit log.</p>
      </div>
      <div className="hidden flex-col justify-end bg-brand p-space-8 lg:flex">
        <p className="max-w-md text-heading-24 text-content-inverse">
          Tenants, invoices, deployments and the audit log. One place, every day.
        </p>
      </div>
    </div>
  );
}
