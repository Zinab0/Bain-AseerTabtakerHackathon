
import UserAuthForm from "@/components/UserAuthForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center px-4 py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            Welcome Back!
          </h1>
          <p className="text-sm text-muted-foreground">
            Select your role and enter your details to sign in.
          </p>
        </div>
        <UserAuthForm mode="login" />
      </div>
    </div>
  );
}
