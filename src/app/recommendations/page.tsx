
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/lib/data';
import type { Experience } from '@/lib/types';
import ExperienceCard from '@/components/ExperienceCard';

export default function RecommendationsPage() {
    const { language, translations } = useLanguage();
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    const t = translations.recommendationsPage;

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<Experience | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setResult(null);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Hardcoded result for the prototype
        const recommendedExperience = experiences.find(exp => exp.id === 'exp-6');
        
        setResult(recommendedExperience || null);
        setIsLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">{t.title}</h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{t.form.title}</CardTitle>
                    <CardDescription>{t.form.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="interests" className="text-lg font-medium">{t.form.interests.label}</label>
                            <Textarea
                                id="interests"
                                placeholder={t.form.interests.placeholder}
                                className="min-h-[120px]"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    {t.form.loadingButton}
                                </>
                            ) : (
                                <>
                                    <Wand2 className="mr-2 h-5 w-5" />
                                    {t.form.submitButton}
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {isLoading && (
                 <div className="text-center py-12">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <h3 className="text-xl font-semibold mt-4">{t.results.loading.title}</h3>
                </div>
            )}

            {result && (
                <div className="mt-12">
                    <h2 className="text-3xl font-headline font-bold mb-6 text-center">{t.results.successTitle}</h2>
                    <div className="max-w-2xl mx-auto">
                       <ExperienceCard experience={result} />
                    </div>
                </div>
            )}
        </div>
    );
}
