
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from "date-fns";
import { recommendExperiences, type RecommendExperiencesOutput } from '@/ai/flows/recommend-experiences';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wand2, Frown, CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  interests: z.string().min(10, 'Please describe your interests in a bit more detail (e.g., "love hiking, history, and trying new food").'),
  travelDates: z.object({
    from: z.date(),
    to: z.date(),
  }, {
    required_error: "Please select your travel dates.",
  }),
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
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    const formattedValues = {
      ...values,
      travelDates: `From ${format(values.travelDates.from, "LLL dd, y")} to ${format(values.travelDates.to, "LLL dd, y")}`,
    };

    try {
      const result = await recommendExperiences(formattedValues);
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
                        placeholder={"I am an artist and I love to see the art from different cultures"}
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
                   <FormItem className="flex flex-col">
                    <FormLabel className="text-lg">{t.form.dates.label}</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? (
                              field.value.to ? (
                                <>
                                  {format(field.value.from, "LLL dd, y")} -{" "}
                                  {format(field.value.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(field.value.from, "LLL dd, y")
                              )
                            ) : (
                              <span>{t.form.dates.placeholder}</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field.value?.from}
                          selected={field.value}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
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
