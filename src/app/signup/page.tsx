
"use client"

import UserAuthForm from "@/components/UserAuthForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SignUpPage() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className="container mx-auto flex h-full items-center justify-center px-4 py-8 md:py-12" dir={dir}>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight font-headline">
            {translations.signupPage.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {translations.signupPage.subtitle}
          </p>
        </div>
        <UserAuthForm mode="signup" />
      </div>
    </div>
  );
}
