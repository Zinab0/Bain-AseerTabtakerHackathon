
"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wand2, Calendar, DollarSign, Utensils, Mountain, Palette } from "lucide-react";

export default function AiTripPlannerPage() {
  const [showPlan, setShowPlan] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowPlan(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Trip Planner</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Let our AI craft the perfect cultural journey for you in Asir.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Tell us about your ideal trip</CardTitle>
            <CardDescription>The more details you provide, the better the plan will be.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-lg font-medium">Interests</Label>
              <Input id="interests" placeholder="e.g., food, history, nature" defaultValue="food, history, nature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dates" className="text-lg font-medium">Travel Dates</Label>
              <Input id="dates" placeholder="e.g., 2025-08-05 to 2025-08-08" defaultValue="2025-08-05 to 2025-08-08" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-lg font-medium">Budget (Optional)</Label>
              <Input id="budget" placeholder="e.g., low, medium, high" defaultValue="medium" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
              <Wand2 className="mr-2 h-5 w-5" />
              Plan My Trip
            </Button>
          </CardFooter>
        </form>
      </Card>

      {showPlan && (
        <div className="mt-12">
          <h2 className="text-3xl font-headline font-bold mb-6 text-center">Your Personalized Asir Itinerary</h2>
          <Card className="max-w-4xl mx-auto shadow-xl bg-muted/30">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Trip to Asir: August 5th - August 8th</CardTitle>
              <CardDescription>A 4-day journey through the heart of Saudi culture and nature.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Calendar className="mr-3 h-6 w-6 text-primary" />
                  Day 1: Arrival and Abha's Charm (August 5th)
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Afternoon:</span> Arrive in Abha, check into your hotel.</li>
                  <li><span className="font-semibold text-foreground">Evening:</span> Explore the Abha Dam area and enjoy the sunset views.</li>
                  <li><span className="font-semibold text-foreground">Dinner:</span> Traditional Asiri dinner at a local restaurant.</li>
                </ul>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Mountain className="mr-3 h-6 w-6 text-primary" />
                   Day 2: Mountain Adventure (August 6th)
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                   <li><span className="font-semibold text-foreground">Morning:</span> Take the cable car up to the Green Mountain for panoramic views.</li>
                   <li><span className="font-semibold text-foreground">Afternoon:</span> Guided tour of Asir National Park and a hike on Mount Athrab.</li>
                   <li><span className="font-semibold text-foreground">Experience:</span> Connect with host Ali Mohammed for the 'A trip to Mount Athrab' experience.</li>
                </ul>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Palette className="mr-3 h-6 w-6 text-primary" />
                   Day 3: History and Art (August 7th)
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Morning:</span> Day trip to the historic village of Rijal Almaa.</li>
                  <li><span className="font-semibold text-foreground">Afternoon:</span> Participate in an Al-Qatt Al-Asiri art workshop.</li>
                  <li><span className="font-semibold text-foreground">Experience:</span> Book the 'Al-Qatt Al-Asiri Art Workshop' with host Ibrahim Hassan.</li>
                </ul>
              </div>
               <div className="border-t pt-6">
                <h3 className="text-xl font-headline font-semibold flex items-center mb-2">
                  <Utensils className="mr-3 h-6 w-6 text-primary" />
                   Day 4: Culinary Delights & Departure (August 8th)
                </h3>
                <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Morning:</span> Learn to make traditional Areeqah with a local family.</li>
                  <li><span className="font-semibold text-foreground">Experience:</span> Book the 'Taste of Asir: Areeqah Making' with host Fatima Al-Asmari.</li>
                  <li><span className="font-semibold text-foreground">Afternoon:</span> Last-minute souvenir shopping before heading to the airport.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
