'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle, // Added DialogTitle/SheetTitle
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const beartIndiaLogoUrl = "https://beartindia.com/assets/beart-india-logo.svg";

const LOGO_ASPECT_RATIO = 146 / 40; // Original: 146 / 40; New: 256 / 70 to make it bigger

// Base (largest, for SSR and initial client hydration)
const BASE_LOGO_HEIGHT_PX = 80; 
const BASE_LOGO_WIDTH_PX = Math.round(BASE_LOGO_HEIGHT_PX * LOGO_ASPECT_RATIO);

// Scrolled (smaller for desktop)
const SCROLLED_LOGO_HEIGHT_PX = 60;
const SCROLLED_LOGO_WIDTH_PX = Math.round(SCROLLED_LOGO_HEIGHT_PX * LOGO_ASPECT_RATIO);

// Mobile sheet (specific size)
const MOBILE_SHEET_LOGO_HEIGHT_PX = 50; 
const MOBILE_SHEET_LOGO_WIDTH_PX = Math.round(MOBILE_SHEET_LOGO_HEIGHT_PX * LOGO_ASPECT_RATIO);


const HEADER_HEIGHT_INITIAL_PX = 120;
const HEADER_HEIGHT_SCROLLED_PX = 100;


export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  // Initial classes that match server-side rendering
  const initialHeaderClass = `h-[${HEADER_HEIGHT_INITIAL_PX}px]`;
  const initialLogoContainerClass = `h-[${BASE_LOGO_HEIGHT_PX}px] w-[${BASE_LOGO_WIDTH_PX}px]`;

  const [currentHeaderClass, setCurrentHeaderClass] = useState(initialHeaderClass);
  const [currentLogoContainerClass, setCurrentLogoContainerClass] = useState(initialLogoContainerClass);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Only run effects on client

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setCurrentHeaderClass(scrolled ? `h-[${HEADER_HEIGHT_SCROLLED_PX}px]` : `h-[${HEADER_HEIGHT_INITIAL_PX}px]`);
      if (!isSheetOpen) {
        setCurrentLogoContainerClass(
          scrolled
            ? `h-[${SCROLLED_LOGO_HEIGHT_PX}px] w-[${SCROLLED_LOGO_WIDTH_PX}px]`
            : `h-[${BASE_LOGO_HEIGHT_PX}px] w-[${BASE_LOGO_WIDTH_PX}px]`
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, isSheetOpen]); // Re-evaluate if isSheetOpen changes, to handle desktop scroll state correctly

  // Effect to handle logo size when sheet opens/closes
   useEffect(() => {
    if (!isMounted) return;

    if (isSheetOpen) {
      // Mobile sheet logo size is static and handled by its own container's classes directly
    } else {
      // When sheet closes, re-apply desktop scroll logic
      const scrolled = window.scrollY > 50;
       setCurrentLogoContainerClass(
        scrolled
          ? `h-[${SCROLLED_LOGO_HEIGHT_PX}px] w-[${SCROLLED_LOGO_WIDTH_PX}px]`
          : `h-[${BASE_LOGO_HEIGHT_PX}px] w-[${BASE_LOGO_WIDTH_PX}px]`
      );
    }
  }, [isMounted, isSheetOpen]);


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-800 bg-black",
        "transition-all ease-in-out duration-300", 
        isMounted ? currentHeaderClass : initialHeaderClass
      )}
    >
      <div className={cn("container mx-auto flex h-full items-center justify-center px-4 md:px-6")}>
        
        <div className="flex-initial"> 
          <Link 
            href="/" 
            aria-label="Beart India Group Home" 
            className={cn(
              "relative block transform transition-all hover:scale-105 duration-200",
              isMounted ? currentLogoContainerClass : initialLogoContainerClass
            )}
          >
             <Image
               src={beartIndiaLogoUrl}
               alt="Beart India Logo"
               fill
               className="object-contain"
               priority
             />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden lg:flex flex-auto items-center justify-center space-x-6", 
        )}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-200 ease-in-out hover:text-white hover:scale-105 transform pb-1",
                pathname === item.href 
                  ? "text-white border-b-2 border-[hsl(var(--accent-cta-custom))]" 
                  : "text-gray-300 hover:border-b-2 hover:border-[hsl(var(--accent-cta-custom))]/50"
              )}
              onClick={() => isSheetOpen && setIsSheetOpen(false)} 
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Trigger & Sheet */}
        <div className={cn("lg:hidden flex-1 flex justify-end")}> 
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800 hover:text-white transform transition-transform hover:scale-110 duration-200">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l border-gray-800 w-[280px] sm:w-[320px] animate-in slide-in-from-right duration-500">
              <SheetHeader className="border-b border-gray-700 pb-4">
                 <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle> 
                 <SheetClose asChild>
                   <Link href="/" aria-label="Beart India Group Home" 
                     className={cn(
                        "relative mx-auto mb-4 block transform transition-all hover:scale-105 duration-200",
                        `h-[${MOBILE_SHEET_LOGO_HEIGHT_PX}px] w-[${MOBILE_SHEET_LOGO_WIDTH_PX}px]`
                      )}
                    >
                     <Image
                       src={beartIndiaLogoUrl}
                       alt="Beart India Logo Mobile"
                       fill
                       className="object-contain" 
                       priority
                     />
                  </Link>
                 </SheetClose>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-lg font-medium transition-all duration-200 ease-in-out hover:text-white rounded-md text-right pr-4", 
                        pathname === item.href ? "text-white bg-gray-800" : "text-gray-200 hover:bg-gray-800/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
