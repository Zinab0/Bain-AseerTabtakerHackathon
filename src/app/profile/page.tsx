import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { users, experiences } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";
import { Edit, Mail, Phone, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  const user = users[2]; // Mocked: A tourist user
  const host = users[0]; // Mocked: A host user

  const bookedExperiences = [experiences[0], experiences[2]];
  const hostedExperiences = experiences.filter(exp => exp.host.id === host.id);

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
              <p className="text-muted-foreground">Tourist</p>
              <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                  <div className="flex items-center text-muted-foreground"><Mail className="w-4 h-4 mr-2"/> {user.name.toLowerCase().replace(' ', '.')}@email.com</div>
              </div>
            </div>
            <div className="sm:ml-auto">
                 <Button variant="outline"><Edit className="w-4 h-4 mr-2"/> Edit Profile</Button>
            </div>
          </div>
          
          <Separator />
          
          <Tabs defaultValue="bookings" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="host-dashboard">Host Dashboard</TabsTrigger>
            </TabsList>
            <TabsContent value="bookings" className="mt-6">
                <h2 className="text-2xl font-headline font-bold mb-4">Your Upcoming Adventures</h2>
                 {bookedExperiences.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bookedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                    </div>
                ) : (
                    <p className="text-muted-foreground">You have no upcoming bookings. <a href="/experiences" className="text-primary hover:underline">Explore experiences</a>.</p>
                )}
            </TabsContent>
            <TabsContent value="host-dashboard" className="mt-6">
              <div className="text-center p-8 bg-muted rounded-lg">
                <h2 className="text-2xl font-headline font-bold mb-2">You are not a host yet</h2>
                <p className="text-muted-foreground mb-4">Share your culture and earn money by becoming a host on Asir Connect.</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Become a host</Button>
              </div>
            </TabsContent>
          </Tabs>

        </CardContent>
      </Card>
    </div>
  );
}
