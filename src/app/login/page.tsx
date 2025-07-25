import UserAuthForm from "@/components/UserAuthForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center px-4 py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to access your account
          </p>
        </div>
        <UserAuthForm mode="login" />
      </div>
    </div>
  );
}
