import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/types";
import { ArrowRight, MapPin, Star } from "lucide-react";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group border-2 border-transparent hover:border-primary">
      <CardHeader className="p-0 relative">
        <Link href={`/experiences/${experience.id}`} className="block overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={experience.aiHint}
          />
        </Link>
         <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{experience.category}</Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-headline font-bold text-card-foreground">{experience.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{experience.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-3">
          <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span>{experience.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-muted/50">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
          <span className="font-bold text-card-foreground">{experience.rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground ml-1.5">({experience.reviewsCount})</span>
        </div>
        <Link href={`/experiences/${experience.id}`}>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            Details <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
