
"use client"

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Mountain, Globe, User, LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';

export default function Header() {
  const { language, setLanguage, translations } = useLanguage();
  const { user, logout } = useAuth();
  
  const navLinks = [
    { href: "/experiences", label: translations.header.experiences },
    { href: "/recommendations", label: translations.header.recommendations },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <Image src="https://i.postimg.cc/HcsHyHLK/logo.png" alt="بَيْن logo" width={32} height={32} />
              <span className="font-bold font-headline text-lg tracking-wider">بَيْن</span>
            </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-end gap-4">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                     <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.aiHint} />
                     <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                 <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>{translations.header.profile}</span>
                    </Link>
                  </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                   <LogOut className="mr-2 h-4 w-4" />
                   <span>{translations.header.logout}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                <Button asChild variant="ghost">
                  <Link href="/login">{translations.header.login}</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">{translations.header.signUp}</Link>
                </Button>
              </div>
            </>
          )}


          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'left' : 'right'}>
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                  <Image src="https://i.postimg.cc/HcsHyHLK/logo.png" alt="بَيْن logo" width={32} height={32} />
                  <span className="font-bold font-headline text-lg">بَيْن</span>
                </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="flex w-full items-center py-2 text-lg font-semibold">
                    {link.label}
                  </Link>
                ))}
                 <Link href="/profile" className="flex w-full items-center py-2 text-lg font-semibold">
                    {translations.header.profile}
                  </Link>
                {user ? (
                   <Button onClick={logout} className="w-full mt-4">
                      {translations.header.logout}
                    </Button>
                ) : (
                  <>
                    <Link href="/login" className="flex w-full items-center py-2 text-lg font-semibold">
                        {translations.header.login}
                    </Link>
                    <Button asChild className="w-full mt-4">
                      <Link href="/signup">{translations.header.signUp}</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
