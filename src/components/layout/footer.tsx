import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Beart India Group © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-sm hover:underline">
              Disclaimer
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-secondary-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
