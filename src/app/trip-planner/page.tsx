
"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Palette, Utensils, Mountain, Car, Users, Info, DollarSign } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

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
              <Input id="interests" placeholder={t.form.interests.placeholder} defaultValue="art, food, mountains" />
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
            <CardContent className="space-y-8 p-6">
              
              {/* Day 1 */}
              <div className="p-4 border rounded-lg bg-background">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-4">
                  <Palette className="mr-3 h-6 w-6 text-primary" />
                  {t.plan.day1.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.experience}</p>
                      <p className="text-muted-foreground">{t.plan.day1.experienceName}</p>
                  </div>
                   <div>
                      <p className="font-semibold text-foreground">{t.plan.location}</p>
                      <p className="text-muted-foreground">{t.plan.day1.location}</p>
                  </div>
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.time}</p>
                      <p className="text-muted-foreground">{t.plan.day1.time}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.plan.cost}</p>
                    <p className="text-muted-foreground">{t.plan.day1.cost}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-foreground flex items-center"><Car className="mr-2 h-5 w-5"/>{t.plan.transportation}</p>
                    <p className="text-muted-foreground">{t.plan.day1.transportation}</p>
                  </div>
                </div>
                 <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-800 flex items-start">
                    <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/>
                    <span>{t.plan.day1.bookingNote}</span>
                </div>
              </div>

              {/* Day 2 */}
              <div className="p-4 border rounded-lg bg-background">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-4">
                  <Utensils className="mr-3 h-6 w-6 text-primary" />
                  {t.plan.day2.title}
                </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.experience}</p>
                      <p className="text-muted-foreground">{t.plan.day2.experienceName}</p>
                  </div>
                   <div>
                      <p className="font-semibold text-foreground">{t.plan.location}</p>
                      <p className="text-muted-foreground">{t.plan.day2.location}</p>
                  </div>
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.time}</p>
                      <p className="text-muted-foreground">{t.plan.day2.time}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.plan.cost}</p>
                    <p className="text-muted-foreground">{t.plan.day2.cost}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-foreground flex items-center"><Users className="mr-2 h-5 w-5"/>{t.plan.transportation}</p>
                    <p className="text-muted-foreground">{t.plan.day2.transportation}</p>
                  </div>
                </div>
              </div>
              
              {/* Day 3 */}
              <div className="p-4 border rounded-lg bg-background">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-4">
                  <Mountain className="mr-3 h-6 w-6 text-primary" />
                  {t.plan.day3.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.experience}</p>
                      <p className="text-muted-foreground">{t.plan.day3.experienceName}</p>
                  </div>
                   <div>
                      <p className="font-semibold text-foreground">{t.plan.location}</p>
                      <p className="text-muted-foreground">{t.plan.day3.location}</p>
                  </div>
                  <div>
                      <p className="font-semibold text-foreground">{t.plan.time}</p>
                      <p className="text-muted-foreground">{t.plan.day3.time}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.plan.cost}</p>
                    <p className="text-muted-foreground">{t.plan.day3.cost}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-foreground flex items-center"><Car className="mr-2 h-5 w-5"/>{t.plan.transportation}</p>
                    <p className="text-muted-foreground">{t.plan.day3.transportation}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/80 p-4 flex justify-end items-center gap-4">
              <span className="text-lg font-semibold">{t.plan.totalCost.label}</span>
              <span className="text-2xl font-bold text-primary">{t.plan.totalCost.value}</span>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
