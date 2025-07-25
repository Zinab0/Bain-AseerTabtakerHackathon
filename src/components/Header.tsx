import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Mountain, Globe, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Separator } from './ui/separator';

export default function Header() {
  const navLinks = [
    { href: "/experiences", label: "Experiences", labelAr: "التجارب" },
    { href: "/recommendations", label: "AI Recommendations", labelAr: "توصيات الذكاء الاصطناعي" },
    { href: "/messages", label: "Messages", labelAr: "الرسائل" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg tracking-wider">Asir Connect</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

           <Button asChild variant="ghost" size="icon">
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>

          <div className="hidden sm:flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
               <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">Asir Connect</span>
                </Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="flex w-full items-center py-2 text-lg font-semibold">
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-2"/>
                 <Link href="/profile" className="flex w-full items-center py-2 text-lg font-semibold">
                    Profile
                  </Link>
                 <Link href="/login" className="flex w-full items-center py-2 text-lg font-semibold">
                    Login
                  </Link>
                 <Button asChild className="w-full mt-4">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
