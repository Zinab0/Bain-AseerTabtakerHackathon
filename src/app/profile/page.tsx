
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

function ProfilePageContent() {
  const searchParams = useSearchParams();
  // In a real app, role would come from a user session. Here we simulate it with a URL parameter.
  // Example: /profile?role=host
  const role = searchParams.get('role');
  const isHost = role === 'host';
  const user = isHost ? users[0] : users[2];

  const bookedExperiences = [experiences[0], experiences[2]];
  const hostedExperiences = experiences.filter(exp => exp.host.id === user.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <Avatar className="h-28 w-28 border-4 border-primary">
              <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.aiHint} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-headline font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.isHost ? 'Host' : 'Tourist'}</p>
              <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                  <div className="flex items-center text-muted-foreground"><Mail className="w-4 h-4 mr-2"/> {user.name.toLowerCase().replace(' ', '.')}@email.com</div>
              </div>
            </div>
            <div className="sm:ml-auto">
                 <Button variant="outline"><Edit className="w-4 h-4 mr-2"/> Edit Profile</Button>
            </div>
          </div>
          
          <Separator />
          
          <Tabs defaultValue={isHost ? "host-dashboard" : "bookings"} className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bookings" disabled={isHost}>My Bookings</TabsTrigger>
              <TabsTrigger value="host-dashboard" disabled={!isHost}>Host Dashboard</TabsTrigger>
            </TabsList>
            <TabsContent value="bookings" className="mt-6">
                <h2 className="text-2xl font-headline font-bold mb-4">Your Upcoming Adventures</h2>
                 {bookedExperiences.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bookedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-muted rounded-lg">
                      <h3 className="text-xl font-semibold">You have no upcoming bookings.</h3>
                      <p className="text-muted-foreground mt-2 mb-4">Time to find your next adventure!</p>
                      <Button asChild>
                        <Link href="/experiences">Explore Experiences</Link>
                      </Button>
                    </div>
                )}
            </TabsContent>
            <TabsContent value="host-dashboard" className="mt-6">
              {user.isHost ? (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-headline font-bold">Your Hosted Experiences</h2>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/host/add-experience">
                        <PlusCircle className="w-4 h-4 mr-2"/>
                        Add New Experience
                      </Link>
                    </Button>
                  </div>
                   {hostedExperiences.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {hostedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                      </div>
                  ) : (
                      <div className="text-center py-12 bg-muted rounded-lg">
                        <h3 className="text-xl font-semibold">You haven't created any experiences yet.</h3>
                        <p className="text-muted-foreground mt-2 mb-4">Start sharing your culture with the world!</p>
                         <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="/host/add-experience">Create Your First Experience</Link>
                         </Button>
                      </div>
                  )}
                </div>
              ) : (
                 <div className="text-center p-8 bg-muted rounded-lg">
                    <h2 className="text-2xl font-headline font-bold mb-2">You are not a host yet</h2>
                    <p className="text-muted-foreground mb-4">To manage experiences, please sign up or log in as a host.</p>
                     <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                       <Link href="/signup">Become a host</Link>
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
