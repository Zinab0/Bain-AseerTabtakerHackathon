"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"

export default function FilterSidebar() {
  const [date, setDate] = React.useState<Date | undefined>()
  const [price, setPrice] = React.useState([150])

  const categories = ["Food", "Culture", "Adventure", "Nature", "History"];

  return (
    <aside className="w-full md:w-80 lg:w-96 md:sticky top-20 self-start">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Filter By</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h4 className="font-body font-semibold mb-4 text-lg">Category</h4>
            <div className="space-y-3">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-3">
                  <Checkbox id={category} className="h-5 w-5" />
                  <Label htmlFor={category} className="text-base">{category}</Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-lg">Max Price</h4>
            <div className="p-2">
                <Slider
                    defaultValue={price}
                    max={300}
                    step={10}
                    onValueChange={(value) => setPrice(value)}
                />
                <div className="flex justify-between mt-2 text-muted-foreground">
                    <span>$0</span>
                    <span className="font-bold text-primary">${price[0]}</span>
                    <span>$300</span>
                </div>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-lg">Availability</h4>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">Apply Filters</Button>
        </CardContent>
      </Card>
    </aside>
  )
}
