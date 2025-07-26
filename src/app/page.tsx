
"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden" dir={dir}>
        <Image
          src="https://i.postimg.cc/6qtP6Ynz/image.jpg"
          alt="Breathtaking view of Asir mountains at sunset"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="mountain landscape"
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
