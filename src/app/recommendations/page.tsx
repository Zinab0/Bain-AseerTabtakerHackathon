import RecommendationClient from '@/components/RecommendationClient';
import { Lightbulb } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">AI Experience Recommender</h1>
          <p className="text-lg text-muted-foreground">
            Let our AI find the perfect cultural experiences in Asir for you. Just tell us your interests and travel dates.
          </p>
        </div>
        <RecommendationClient />
      </div>
    </div>
  );
}
