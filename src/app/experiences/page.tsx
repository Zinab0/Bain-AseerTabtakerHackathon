import { experiences } from '@/lib/data';
import ExperienceCard from '@/components/ExperienceCard';
import FilterSidebar from '@/components/FilterSidebar';

export default function ExperiencesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Explore All Experiences</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Find your next adventure in Asir. Filter by your interests and availability.</p>
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
