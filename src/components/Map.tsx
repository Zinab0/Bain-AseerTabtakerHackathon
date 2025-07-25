import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Map({ location }: { location: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-80 bg-muted rounded-md flex flex-col items-center justify-center text-center p-4">
        <MapPin className="w-16 h-16 text-primary/50 mb-4" />
        <p className="font-bold font-headline text-2xl text-foreground">Interactive Map</p>
        <p className="text-muted-foreground">This is where a map of the location would be.</p>
        <p className="mt-4 text-lg font-semibold text-foreground bg-background px-4 py-2 rounded-full shadow-sm">{location}</p>
      </div>
    </Card>
  )
}
