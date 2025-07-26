
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";


export default function UserAuthForm({
  className,
  mode,
  ...props
}: {
  className?: string;
  mode: "login" | "signup";
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, setLanguage, translations } = useLanguage();
  const { toast } = useToast();
  const auth = getAuth(app);

  const t = translations.authForm;

  const signupSchema = z.object({
    name: z.string().min(1, t.validation.nameRequired),
    email: z.string().email(t.validation.invalidEmail),
    password: z.string().min(8, t.validation.passwordLength),
    role: z.enum(["tourist", "host"], {
      required_error: t.validation.roleRequired,
    }),
    language: z.string({
      required_error: t.validation.languageRequired,
    }),
  });

  const loginSchema = z.object({
    email: z.string().email(t.validation.invalidEmail),
    password: z.string().min(1, t.validation.passwordRequired),
    role: z.enum(["tourist", "host"]), // Role is kept for UI logic but not directly for Firebase auth
  });

  const formSchema = mode === "signup" ? signupSchema : loginSchema;
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: searchParams.get('role') === 'host' ? 'host' : "tourist",
      language: language,
    },
  });

  React.useEffect(() => {
    form.setValue('language', language);
  }, [language, form]);

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    
    if ('language' in data && data.language) {
      setLanguage(data.language as 'en' | 'ar');
    }

    try {
      if (mode === "signup") {
        const signupData = data as z.infer<typeof signupSchema>;
        const userCredential = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
        await updateProfile(userCredential.user, { displayName: signupData.name });
        // In a real app, you would set the user's role (host/tourist) in Firestore or via custom claims.
      } else {
        const loginData = data as z.infer<typeof loginSchema>;
        await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      }
      router.push('/profile');
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: error.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>{t.iAmA}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="tourist" />
                      </FormControl>
                      <FormLabel className="font-normal">{t.tourist}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="host" />
                      </FormControl>
                      <FormLabel className="font-normal">{t.host}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {mode === "signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.name}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.namePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.email}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.password}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {mode === "signup" && (
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.preferredLanguage}</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setLanguage(value as 'en' | 'ar');
                    }}
                    defaultValue={field.value}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t.languagePlaceholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ar">العربية (Arabic)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button disabled={isLoading} className="w-full" type="submit">
            {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === "login" ? t.loginButton : t.signupButton}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {mode === 'login'
              ? t.noAccount
              : t.haveAccount}
          </span>
        </div>
      </div>
       <Button variant="outline" asChild>
        <a href={mode === 'login' ? '/signup' : '/login'}>
            {mode === 'login' ? t.signupLink : t.loginLink}
        </a>
      </Button>
    </div>
  );
}
