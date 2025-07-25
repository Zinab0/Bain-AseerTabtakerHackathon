
import Image from "next/image";
import { experiences } from "@/lib/data";
import { notFound } from "next/navigation";
import { Star, MapPin, Users, Calendar, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Map from "@/components/Map";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = experiences.find(exp => exp.id === params.id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{experience.name}</h1>
        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
            <span className="font-bold text-foreground">{experience.rating.toFixed(1)}</span>
            <span className="ml-1.5">({experience.reviewsCount} reviews)</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-1.5" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px] mb-8">
              <div className="col-span-2 row-span-2">
                 <Image src={experience.images[0]} alt={`Main view of ${experience.name}`} width={800} height={600} className="w-full h-full object-cover rounded-lg shadow-md" data-ai-hint="experience landscape" />
              </div>
          </div>

          <Separator className="my-8" />
          
          <div className="prose prose-lg max-w-none font-body">
              <h2 className="font-headline text-3xl">About this experience</h2>
              <p>{experience.longDescription}</p>

              <h3 className="font-headline text-2xl mt-8">What you'll do</h3>
              <ul className="list-disc pl-5 space-y-2">
                {experience.whatYoullDo.map(item => <li key={item}>{item}</li>)}
              </ul>

              <h3 className="font-headline text-2xl mt-8">What's included</h3>
              <div className="grid grid-cols-2 gap-4">
                {experience.whatIsIncluded.map(item => (
                    <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>{item}</span>
                    </div>
                ))}
              </div>
          </div>

           <Separator className="my-8" />

           <div id="host">
             <h2 className="font-headline text-3xl mb-4">Meet your host, {experience.host.name}</h2>
             <Card className="bg-muted/50">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={experience.host.avatar} alt={experience.host.name} data-ai-hint={experience.host.aiHint} />
                        <AvatarFallback>{experience.host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-muted-foreground">"I'm passionate about sharing the rich culture and natural beauty of my home, Asir, with visitors from around the world. I look forward to welcoming you!"</p>
                        <Button variant="outline" className="mt-4">
                            <MessageSquare className="w-4 h-4 mr-2" /> Contact Host
                        </Button>
                    </div>
                </CardContent>
             </Card>
           </div>
           
           <Separator className="my-8" />

           <div id="map">
              <h2 className="font-headline text-3xl mb-4">Where you'll be</h2>
              <Map location={experience.location} />
            </div>

           <Separator className="my-8" />

           <div id="reviews">
                <h2 className="font-headline text-3xl mb-4">Reviews</h2>
                <div className="space-y-6">
                    {experience.reviews.map(review => (
                        <Card key={review.id}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarImage src={review.user.avatar} alt={review.user.name} data-ai-hint={review.user.aiHint} />
                                        <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-semibold">{review.user.name}</p>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-muted-foreground'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{review.date}</p>
                                        <p className="mt-2">{review.comment}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {experience.reviews.length === 0 && <p className="text-muted-foreground">No reviews yet for this experience.</p>}
                </div>
            </div>

        </div>
        <div className="lg:col-span-2">
            <Card className="sticky top-24 shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Book Your Spot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                        ${experience.price} <span className="text-base font-normal text-muted-foreground">/ person</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <p className="font-semibold">Guests</p>
                           <p className="text-muted-foreground flex items-center gap-2"><Users className="w-4 h-4"/> 1 guest</p>
                        </div>
                         <div className="space-y-1">
                           <p className="font-semibold">Date</p>
                           <p className="text-muted-foreground flex items-center gap-2"><Calendar className="w-4 h-4"/> Select a date</p>
                        </div>
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">Book Now</Button>
                    <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
