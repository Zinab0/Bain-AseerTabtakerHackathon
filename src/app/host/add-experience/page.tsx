
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Upload, MapPin, DollarSign, PlusCircle } from "lucide-react"
import Map from "@/components/Map"
import { useLanguage } from "@/contexts/LanguageContext"

const experienceSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long."),
  description: z.string().min(20, "Description must be at least 20 characters long."),
  price: z.coerce.number().min(0, "Price must be a positive number."),
  category: z.string({ required_error: "Please select a category." }),
  location: z.string().min(3, "Location is required."),
  photos: z.any().optional(), // In a real app, this would be a file upload schema
})

export default function AddExperiencePage() {
  const { language, translations } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.addExperiencePage;

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      location: "",
    },
  })

  function onSubmit(values: z.infer<typeof experienceSchema>) {
    // In a real app, you would handle form submission, e.g., send data to a server.
    console.log(values)
    alert("Experience submitted! (Check console for data)")
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">{t.title}</CardTitle>
          <CardDescription>{t.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{t.form.experienceTitle.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.experienceTitle.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{t.form.description.label}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.form.description.placeholder}
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">{t.form.price.label}</FormLabel>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <FormControl>
                          <Input type="number" placeholder={t.form.price.placeholder} className="pl-10" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">{t.form.category.label}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.category.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="food">{t.form.category.options.food}</SelectItem>
                          <SelectItem value="culture">{t.form.category.options.culture}</SelectItem>
                          <SelectItem value="history">{t.form.category.options.history}</SelectItem>
                          <SelectItem value="adventure">{t.form.category.options.adventure}</SelectItem>
                          <SelectItem value="crafts">{t.form.category.options.crafts}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">{t.form.location.label}</FormLabel>
                       <div className="relative">
                         <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <FormControl>
                          <Input placeholder={t.form.location.placeholder} className="pl-10" {...field} />
                        </FormControl>
                      </div>
                      <div className="mt-4">
                        <Map location={form.watch('location') || t.form.location.mapDefault} />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <FormItem>
                <FormLabel className="text-lg">{t.form.photos.label}</FormLabel>
                <FormControl>
                    <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center hover:border-primary transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground"/>
                        <p className="mt-4 text-muted-foreground">{t.form.photos.prompt}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t.form.photos.recommendation}</p>
                         <Button variant="outline" type="button" className="mt-4">{t.form.photos.button}</Button>
                    </div>
                </FormControl>
                 <FormDescription>
                  {t.form.photos.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
              
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                <PlusCircle className="mr-2 h-6 w-6"/>
                {t.form.submitButton}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
