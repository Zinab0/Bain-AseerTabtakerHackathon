
"use client"
import RecommendationClient from '@/components/RecommendationClient';
import { Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RecommendationsPage() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.recommendationsPage;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t.title}</h1>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>
        <RecommendationClient />
      </div>
    </div>
  );
}
