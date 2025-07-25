
"use client"

import Image from "next/image";
import { experiences, users } from "@/lib/data";
import { notFound } from "next/navigation";
import { Star, MapPin, Users, Calendar, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Map from "@/components/Map";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const experience = experiences.find(exp => exp.id === params.id);
  const t = translations.experienceDetails;
  const expT = translations.experiences[params.id as keyof typeof translations.experiences];


  if (!experience) {
    notFound();
  }

  const hostT = translations.users[experience.host.id as keyof typeof translations.users];
  const reviewsT = expT.reviews as unknown as {id: string, user: string, rating: number, comment: string, date: string}[];


  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{expT.name}</h1>
        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
            <span className="font-bold text-foreground">{experience.rating.toFixed(1)}</span>
            <span className="ml-1.5">({experience.reviewsCount} {t.reviews})</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-1.5" />
            <span>{expT.location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px] mb-8">
              <div className="col-span-2 row-span-2">
                 <Image src={experience.images[0]} alt={`Main view of ${expT.name}`} width={800} height={600} className="w-full h-full object-cover rounded-lg shadow-md" data-ai-hint="experience landscape" />
              </div>
          </div>

          <Separator className="my-8" />
          
          <div className="prose prose-lg max-w-none font-body">
              <h2 className="font-headline text-3xl">{t.about}</h2>
              <p>{expT.longDescription}</p>

              <h3 className="font-headline text-2xl mt-8">{t.whatYoullDo}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {expT.whatYoullDo.map((item, index) => <li key={index}>{item}</li>)}
              </ul>

              <h3 className="font-headline text-2xl mt-8">{t.whatIsIncluded}</h3>
              <div className="grid grid-cols-2 gap-4">
                {expT.whatIsIncluded.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>{item}</span>
                    </div>
                ))}
              </div>
          </div>

           <Separator className="my-8" />

           <div id="host">
             <h2 className="font-headline text-3xl mb-4">{t.meetYourHost}, {hostT.name}</h2>
             <Card className="bg-muted/50">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={experience.host.avatar} alt={hostT.name} data-ai-hint={experience.host.aiHint} />
                        <AvatarFallback>{hostT.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-muted-foreground">{t.hostQuote}</p>
                        <Button variant="outline" className="mt-4">
                            <MessageSquare className="w-4 h-4 mr-2" /> {t.contactHost}
                        </Button>
                    </div>
                </CardContent>
             </Card>
           </div>
           
           <Separator className="my-8" />

           <div id="map">
              <h2 className="font-headline text-3xl mb-4">{t.whereYoullBe}</h2>
              <Map location={expT.location} />
            </div>

           <Separator className="my-8" />

           <div id="reviews">
                <h2 className="font-headline text-3xl mb-4">{t.reviews}</h2>
                <div className="space-y-6">
                    {experience.reviews.map((review) => {
                      const reviewUserT = translations.users[review.user.id as keyof typeof translations.users];
                      return (
                        <Card key={review.id}>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarImage src={review.user.avatar} alt={reviewUserT.name} data-ai-hint={review.user.aiHint} />
                                        <AvatarFallback>{reviewUserT.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-semibold">{reviewUserT.name}</p>
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
                    )})}
                    {experience.reviews.length === 0 && <p className="text-muted-foreground">{t.noReviews}</p>}
                </div>
            </div>

        </div>
        <div className="lg:col-span-2">
            <Card className="sticky top-24 shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{t.bookYourSpot}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                        ${experience.price} <span className="text-base font-normal text-muted-foreground">/ {t.person}</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <p className="font-semibold">{t.guests}</p>
                           <p className="text-muted-foreground flex items-center gap-2"><Users className="w-4 h-4"/> 1 {t.guest}</p>
                        </div>
                         <div className="space-y-1">
                           <p className="font-semibold">{t.date}</p>
                           <p className="text-muted-foreground flex items-center gap-2"><Calendar className="w-4 h-4"/> {t.selectDate}</p>
                        </div>
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">{t.bookNow}</Button>
                    <p className="text-xs text-center text-muted-foreground">{t.notChargedYet}</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
