
"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Calendar, Utensils, Mountain, Palette } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function TripPlannerPage() {
  const [showPlan, setShowPlan] = useState(false);
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.aiTripPlanner;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowPlan(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{t.title}</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t.form.title}</CardTitle>
            <CardDescription>{t.form.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-lg font-medium">{t.form.interests.label}</Label>
              <Input id="interests" placeholder={t.form.interests.placeholder} defaultValue="food, history, nature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dates" className="text-lg font-medium">{t.form.dates.label}</Label>
              <Input id="dates" placeholder={t.form.dates.placeholder} defaultValue="2025-08-05 to 2025-08-08" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-lg font-medium">{t.form.budget.label}</Label>
              <Input id="budget" placeholder={t.form.budget.placeholder} defaultValue="medium" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
              <Wand2 className="mr-2 h-5 w-5" />
              {t.form.button}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {showPlan && (
        <div className="mt-12">
          <h2 className="text-3xl font-headline font-bold mb-6 text-center">{t.plan.title}</h2>
          <Card className="max-w-4xl mx-auto shadow-xl bg-muted/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{t.plan.header.title}</CardTitle>
              <CardDescription>{t.plan.header.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Calendar className="mr-3 h-6 w-6 text-primary" />
                  {t.plan.day1.title}
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  {t.plan.day1.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Mountain className="mr-3 h-6 w-6 text-primary" />
                   {t.plan.day2.title}
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                   {t.plan.day2.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Palette className="mr-3 h-6 w-6 text-primary" />
                   {t.plan.day3.title}
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  {t.plan.day3.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
               <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Utensils className="mr-3 h-6 w-6 text-primary" />
                   {t.plan.day4.title}
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  {t.plan.day4.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
