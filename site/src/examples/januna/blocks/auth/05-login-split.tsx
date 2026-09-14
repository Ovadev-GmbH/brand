import { LoginForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function LoginSplitExample() {
  return (
    <main className="grid min-h-[640px] w-full bg-surface-primary md:grid-cols-2">
      <section className="flex flex-col items-center justify-center p-space-8">
        <div className="flex w-full max-w-sm flex-col gap-space-8">
          <span className="text-heading-20">Januna</span>
          <div className="flex flex-col gap-space-2">
            <h1 className="text-heading-24">Sign in</h1>
            <p className="text-copy-14 text-content-secondary">Enter the e-mail you use for the restaurant.</p>
          </div>
          <LoginForm forgotHref="/forgot-password" signupHref="/signup" onSubmit={(event) => event.preventDefault()} />
        </div>
      </section>
      <aside className="hidden flex-col justify-end bg-brand p-space-12 text-content-inverse md:flex">
        <p className="max-w-md text-heading-24">The evening runs itself when every table knows who is coming.</p>
      </aside>
    </main>
  );
}
