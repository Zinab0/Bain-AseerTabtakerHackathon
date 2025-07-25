
"use client"
import { experiences } from '@/lib/data';
import ExperienceCard from '@/components/ExperienceCard';
import FilterSidebar from '@/components/FilterSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperiencesPage() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.experiencesPage;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{t.title}</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <FilterSidebar />
        <main className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
