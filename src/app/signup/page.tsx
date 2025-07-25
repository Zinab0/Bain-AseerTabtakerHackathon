import UserAuthForm from "@/components/UserAuthForm";

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex h-full items-center justify-center px-4 py-8 md:py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Choose your role, enter your details, and select your preferred language.
          </p>
        </div>
        <UserAuthForm mode="signup" />
      </div>
    </div>
  );
}
