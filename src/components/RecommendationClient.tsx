
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { recommendExperiences, type RecommendExperiencesOutput } from '@/ai/flows/recommend-experiences';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wand2, Frown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  interests: z.string().min(10, 'Please describe your interests in a bit more detail (e.g., "love hiking, history, and trying new food").'),
  travelDates: z.string().min(1, 'Please enter your travel dates (e.g., "October 15-22, 2024").'),
});

type FormValues = z.infer<typeof formSchema>;

export default function RecommendationClient() {
  const { language, translations } = useLanguage();
  const t = translations.recommendationsPage;
  const [recommendations, setRecommendations] = useState<RecommendExperiencesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      travelDates: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const result = await recommendExperiences(values);
      if (result.recommendations && result.recommendations.length > 0) {
        setRecommendations(result);
      } else {
        setError(t.results.noResults);
      }
    } catch (e) {
      console.error(e);
      setError(t.results.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-12">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t.form.title}</CardTitle>
          <CardDescription>{t.form.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{t.form.interests.label}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.form.interests.placeholder}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{t.form.dates.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.dates.placeholder} {...field} />
                    </FormControl>
                     <FormDescription>
                      {t.form.dates.description}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                {isLoading ? t.form.loadingButton : t.form.submitButton}
                <Wand2 className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && <LoadingSkeleton t={t.results.loading} />}
      {error && <ErrorAlert title={t.results.errorTitle} message={error} />}
      {recommendations && <ResultsDisplay recommendations={recommendations} t={t.results} />}
    </div>
  );
}

function LoadingSkeleton({ t }: {t: any}) {
  return (
    <div>
      <h2 className="text-3xl font-headline font-bold mb-6 text-center">{t.title}</h2>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ErrorAlert({ title, message }: { title: string, message: string }) {
  return (
    <Alert variant="destructive">
      <Frown className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

function ResultsDisplay({ recommendations, t }: { recommendations: RecommendExperiencesOutput, t: any }) {
  return (
    <div>
       <h2 className="text-3xl font-headline font-bold mb-6 text-center">{t.successTitle}</h2>
       <div className="space-y-4">
        {recommendations.recommendations.map((rec, index) => (
          <Card key={index} className="bg-background/80">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{rec.experienceName}</CardTitle>
              <CardDescription>{t.hostedBy} {rec.hostName}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{rec.description}</p>
              <p className="text-sm font-semibold text-muted-foreground">{t.availability}: <span className="font-normal">{rec.availability}</span></p>
            </CardContent>
          </Card>
        ))}
       </div>
    </div>
  );
}
