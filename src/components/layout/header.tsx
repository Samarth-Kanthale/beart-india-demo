'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

const beartIndiaLogoUrl = "https://beartindia.com/assets/beart-india-logo.svg";

// Aspect ratio of the logo (width / height)
const LOGO_ASPECT_RATIO = 146 / 40; 

// Base dimensions for SSR and initial client render for desktop
const BASE_LOGO_HEIGHT = 70; 
const BASE_LOGO_WIDTH = Math.round(BASE_LOGO_HEIGHT * LOGO_ASPECT_RATIO); // Approx 256

// Target height for scrolled state on desktop
const SCROLLED_LOGO_HEIGHT = 60; 

// Header container heights
const BASE_HEADER_CONTAINER_CLASS = 'h-24'; // Approx 96px (initial height)
const SCROLLED_HEADER_CONTAINER_CLASS = 'h-20'; // Approx 80px (scrolled height)

// Mobile logo dimensions (fixed)
const MOBILE_LOGO_HEIGHT = 50;
const MOBILE_LOGO_WIDTH = Math.round(MOBILE_LOGO_HEIGHT * LOGO_ASPECT_RATIO);


export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [currentHeaderContainerClass, setCurrentHeaderContainerClass] = useState(BASE_HEADER_CONTAINER_CLASS);
  const [currentLogoLinkTransform, setCurrentLogoLinkTransform] = useState("scale(1)");


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setCurrentHeaderContainerClass(scrolled ? SCROLLED_HEADER_CONTAINER_CLASS : BASE_HEADER_CONTAINER_CLASS);
      
      const scaleFactor = scrolled ? SCROLLED_LOGO_HEIGHT / BASE_LOGO_HEIGHT : 1;
      setCurrentLogoLinkTransform(`scale(${scaleFactor.toFixed(3)})`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // These will be used to explicitly set class and style for the Image to match client hydration expectation
  const explicitImageHeightClass = `h-[${BASE_LOGO_HEIGHT}px]`; // e.g., "h-[70px]"
  const explicitImageHeightStyle = `${BASE_LOGO_HEIGHT}px`;    // e.g., "70px"

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-800 bg-black transition-all duration-300 ease-in-out",
      isMounted ? currentHeaderContainerClass : BASE_HEADER_CONTAINER_CLASS, 
      "animate-in fade-in duration-500" 
    )}>
      <div className={cn("container mx-auto flex h-full items-center justify-between px-4 md:px-6")}>
        {/* Logo Section - Centered within its flex container */}
        <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
          <Link
            href="/"
            aria-label="Beart India Group Home"
            className={cn( 
              "flex items-center gap-2 transform transition-transform hover:scale-105 duration-200 origin-left"
            )}
            style={{ transform: isMounted ? currentLogoLinkTransform : "scale(1)" }} 
          >
             <Image
               src={beartIndiaLogoUrl}
               alt="Beart India Logo"
               width={BASE_LOGO_WIDTH}
               height={BASE_LOGO_HEIGHT}
               className={cn(
                 "transition-all duration-300 ease-in-out",
                 "w-auto", // Explicitly add w-auto, as seen in client-side diff
                 explicitImageHeightClass // Explicitly add height class, as seen in client-side diff
               )}
               style={{ 
                  color: "transparent",
                  height: explicitImageHeightStyle // Explicitly add height style, as seen in client-side diff
               }}
               priority
             />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden lg:flex flex-auto items-center justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-all duration-200 ease-in-out hover:text-white hover:scale-105 transform hover:border-b-2 hover:border-primary pb-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Aligned Buttons (Desktop) - ensure this doesn't push nav too much */}
        <div className="hidden lg:flex flex-1 lg:flex-none justify-end items-center gap-2">
            <Button variant="outline" className="btn-investment-outline transform transition-transform hover:scale-105 duration-200" size="sm" asChild>
                <Link href="/divisions/investment-solutions">Investment Solutions</Link>
            </Button>
             <Button variant="outline" className="btn-software-outline transform transition-transform hover:scale-105 duration-200" size="sm" asChild>
                 <Link href="/divisions/software-solutions">Software Solutions</Link>
            </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden ml-auto"> {/* Ensure mobile menu trigger is on the right if nav is centered */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800 hover:text-white transform transition-transform hover:scale-110 duration-200">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l border-gray-800 w-[280px] sm:w-[320px] animate-in slide-in-from-right duration-500">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle> 
              <div className="grid gap-4 py-6">
                <Link href="/" aria-label="Beart India Group Home" className="flex items-center justify-center gap-2 mb-4 transform transition-transform hover:scale-105 duration-200" onClick={() => setIsSheetOpen(false)}>
                   <Image
                     src={beartIndiaLogoUrl}
                     alt="Beart India Logo"
                     width={MOBILE_LOGO_WIDTH}
                     height={MOBILE_LOGO_HEIGHT}
                     style={{ color: "transparent" }}
                     className="w-auto" // Ensure mobile logo also behaves well
                     priority
                   />
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="block py-2 text-lg font-medium text-gray-200 transition-all duration-200 ease-in-out hover:text-white hover:pl-2 hover:bg-gray-800 rounded-md text-center"
                  >
                    {item.label}
                  </Link>
                ))}
                 <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" className="btn-investment-outline transform transition-transform hover:scale-105 duration-200" asChild>
                        <Link href="/divisions/investment-solutions" onClick={() => setIsSheetOpen(false)}>Investment Solutions</Link>
                    </Button>
                    <Button variant="outline" className="btn-software-outline transform transition-transform hover:scale-105 duration-200" asChild>
                        <Link href="/divisions/software-solutions" onClick={() => setIsSheetOpen(false)}>Software Solutions</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
