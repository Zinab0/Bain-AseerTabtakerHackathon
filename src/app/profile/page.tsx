
"use client"

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { users, experiences } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";
import { Edit, Mail, PlusCircle, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

function ProfilePageContent() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.profilePage;

  const searchParams = useSearchParams();
  // In a real app, role would come from a user session. Here we simulate it with a URL parameter.
  // Example: /profile?role=host
  const role = searchParams.get('role');
  const isHost = role === 'host';
  const user = isHost ? users[0] : users[2];
  const userT = translations.users[user.id as keyof typeof translations.users];

  const bookedExperiences = [experiences[0], experiences[2]];
  const hostedExperiences = experiences.filter(exp => exp.host.id === user.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <Avatar className="h-28 w-28 border-4 border-primary">
              <AvatarImage src={user.avatar} alt={userT.name} data-ai-hint={user.aiHint} />
              <AvatarFallback>{userT.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-headline font-bold">{userT.name}</h1>
              <p className="text-muted-foreground">{isHost ? t.host : t.tourist}</p>
              <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                  <div className="flex items-center text-muted-foreground"><Mail className="w-4 h-4 mr-2"/> {user.name.toLowerCase().replace(' ', '.')}@email.com</div>
              </div>
            </div>
            <div className="sm:ml-auto">
                 <Button variant="outline"><Edit className="w-4 h-4 mr-2"/> {t.editProfile}</Button>
            </div>
          </div>
          
          <Separator />
          
          <Tabs defaultValue={isHost ? "host-dashboard" : "bookings"} className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bookings" disabled={isHost}>{t.myBookings}</TabsTrigger>
              <TabsTrigger value="host-dashboard" disabled={!isHost}>{t.hostDashboard}</TabsTrigger>
            </TabsList>
            <TabsContent value="bookings" className="mt-6">
                <h2 className="text-2xl font-headline font-bold mb-4">{t.yourUpcomingAdventures}</h2>
                 {bookedExperiences.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bookedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-muted rounded-lg">
                      <h3 className="text-xl font-semibold">{t.noBookings.title}</h3>
                      <p className="text-muted-foreground mt-2 mb-4">{t.noBookings.subtitle}</p>
                      <Button asChild>
                        <Link href="/experiences">{t.noBookings.button}</Link>
                      </Button>
                    </div>
                )}
            </TabsContent>
            <TabsContent value="host-dashboard" className="mt-6">
              {user.isHost ? (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-headline font-bold">{t.yourHostedExperiences}</h2>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/host/add-experience">
                        <PlusCircle className="w-4 h-4 mr-2"/>
                        {t.addNewExperience}
                      </Link>
                    </Button>
                  </div>
                   {hostedExperiences.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {hostedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                      </div>
                  ) : (
                      <div className="text-center py-12 bg-muted rounded-lg">
                        <h3 className="text-xl font-semibold">{t.noExperiences.title}</h3>
                        <p className="text-muted-foreground mt-2 mb-4">{t.noExperiences.subtitle}</p>
                         <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="/host/add-experience">{t.noExperiences.button}</Link>
                         </Button>
                      </div>
                  )}
                </div>
              ) : (
                 <div className="text-center p-8 bg-muted rounded-lg">
                    <h2 className="text-2xl font-headline font-bold mb-2">{t.notAHost.title}</h2>
                    <p className="text-muted-foreground mb-4">{t.notAHost.subtitle}</p>
                     <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                       <Link href="/signup">{t.notAHost.button}</Link>
                     </Button>
                  </div>
              )}
            </TabsContent>
          </Tabs>

        </CardContent>
      </Card>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  )
}
