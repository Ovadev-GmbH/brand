import { AuthCard, AuthLayout, LoginForm } from "@ovadev-gmbh/ui-januna/blocks";

export default function LoginExample() {
  return (
    <AuthLayout
      className="min-h-[640px]"
      brand={<span className="text-heading-20">Januna</span>}
      footer={
        <>
          By signing in you agree to the <a href="/terms">terms of service</a> and the <a href="/privacy">privacy policy</a>.
        </>
      }
    >
      <AuthCard title="Sign in" description="Enter the e-mail you use for the restaurant.">
        <LoginForm forgotHref="/forgot-password" signupHref="/signup" onSubmit={(event) => event.preventDefault()} />
      </AuthCard>
    </AuthLayout>
  );
}
