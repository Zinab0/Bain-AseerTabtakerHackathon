
"use client"

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

// This component ensures that client-side hooks like useLanguage
// can set attributes on the body without causing hydration mismatches.
function AppBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { language, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <body className="font-body antialiased" dir={dir}>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Toaster />
    </body>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Asir Connect</title>
          <meta name="description" content="Connect with local hosts for authentic cultural experiences in Asir." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </head>
        <AppBody>{children}</AppBody>
      </html>
    </LanguageProvider>
  );
}
