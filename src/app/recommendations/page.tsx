
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2, Star, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/lib/data';
import type { Experience } from '@/lib/types';
import ExperienceCard from '@/components/ExperienceCard';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

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
    
    const tExpCard = translations.experienceCard;
    const expT = result ? translations.experiences[result.id as keyof typeof translations.experiences] : null;


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

            {result && expT && (
                <div className="mt-12">
                    <h2 className="text-3xl font-headline font-bold mb-6 text-center">{t.results.successTitle}</h2>
                    <div className="max-w-2xl mx-auto">
                        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group border-2 border-transparent hover:border-primary">
                            <CardHeader className="p-0 relative">
                                <Link href={`/experiences/${result.id}`} className="block overflow-hidden">
                                <Image
                                    src={result.image}
                                    alt={expT.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    data-ai-hint={result.aiHint}
                                />
                                </Link>
                                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{expT.category}</Badge>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow">
                                <h3 className="text-lg font-headline font-bold text-card-foreground">{expT.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{expT.description}</p>
                                <div className="flex items-center text-sm text-muted-foreground mt-3">
                                <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                                <span>{expT.location}</span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 flex justify-between items-center bg-muted/50">
                                <div className="flex flex-col items-start">
                                    <p className="font-bold text-xl text-foreground">35 SAR</p>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                                        <span className="font-bold text-card-foreground">{result.rating.toFixed(1)}</span>
                                        <span className="ml-1.5">({result.reviewsCount})</span>
                                    </div>
                                </div>
                                <Link href={`/experiences/${result.id}`}>
                                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                                    {tExpCard.details} <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}
