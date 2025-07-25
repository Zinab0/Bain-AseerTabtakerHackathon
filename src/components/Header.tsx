import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Mountain } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: "/experiences", label: "Experiences" },
    { href: "/recommendations", label: "AI Recommendations" },
    { href: "/messages", label: "Messages" },
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
          <Button asChild variant="ghost">
            <Link href="/profile">Profile</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
             <Link href="#">Become a Host</Link>
          </Button>
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
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  <Link href="#">Become a Host</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
