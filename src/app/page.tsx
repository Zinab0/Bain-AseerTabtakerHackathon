
"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences, bookings } from "@/lib/data";
import { ArrowRight, Wand2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import type { Experience } from "@/lib/types";

function RecommendedExperiences() {
    const { user } = useAuth();
    const { language, translations } = useLanguage();
    const t = translations.home;

    if (!user) {
        return null;
    }

    const userBookings = bookings.filter(b => b.guest.id === user.id);
    if (userBookings.length === 0) {
        return null;
    }

    // Simple recommendation logic: find experiences the user has NOT booked yet.
    const bookedExperienceIds = new Set(userBookings.map(b => b.experienceId));
    const recommended = experiences.filter(exp => !bookedExperienceIds.has(exp.id)).slice(0, 3);
    
    if (recommended.length === 0) {
        return null;
    }

    return (
        <section className="py-16 md:py-24 bg-muted" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-headline font-bold mb-3">{t.recommendations.title}</h2>
                    <p className="text-lg text-muted-foreground">{t.recommendations.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommended.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link href="/recommendations">
                       <Button variant="outline" size="lg">
                           <Wand2 className="mr-2 h-5 w-5" />
                           {t.recommendations.aiButton}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default function Home() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden" dir={dir}>
        <Image
          src="https://postimg.cc/FddpGWDZ"
          alt="Breathtaking view of Asir mountains at sunset"
          fill
          objectFit="cover"
          className="z-0"
          data-ai-hint="decorative pattern"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 drop-shadow-lg">{translations.home.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            {translations.home.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/experiences">
               <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary">
                {translations.home.browseButton}
              </Button>
            </Link>
            <Link href="/recommendations">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-accent">
                {translations.home.aiButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RecommendedExperiences />

      <section className="py-16 md:py-24" dir={dir}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-headline font-bold mb-12 text-center">{translations.home.featuredExperiences}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.slice(0, 6).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/experiences">
               <Button variant="outline" size="lg">{translations.home.browseAllButton}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
