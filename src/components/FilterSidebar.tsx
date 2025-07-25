
"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/contexts/LanguageContext"

export default function FilterSidebar() {
  const { language, translations } = useLanguage();
  const t = translations.filterSidebar;
  const [date, setDate] = React.useState<Date | undefined>()
  const [price, setPrice] = React.useState([150])

  const categories = Object.keys(t.categories);

  return (
    <aside className="w-full md:w-80 lg:w-96 md:sticky top-20 self-start">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h4 className="font-body font-semibold mb-4 text-lg">{t.category}</h4>
            <div className="space-y-3">
              {categories.map(categoryKey => (
                <div key={categoryKey} className="flex items-center space-x-3">
                  <Checkbox id={categoryKey} className="h-5 w-5" />
                  <Label htmlFor={categoryKey} className="text-base">{t.categories[categoryKey as keyof typeof t.categories]}</Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold mb-4 text-lg">{t.maxPrice}</h4>
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
            <h4 className="font-body font-semibold mb-4 text-lg">{t.availability}</h4>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">{t.applyFilters}</Button>
        </CardContent>
      </Card>
    </aside>
  )
}
