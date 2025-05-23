
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Server, Heart } from 'lucide-react'; // Removed BrainCircuit as Heart is used for Foundation
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Divisions - Beart India Group',
  description: 'Explore the core divisions of Beart India Group: Investment Solutions (Financial Advisory, Mutual Funds, Equity) and Software Solutions (Hosting, Google Workspace, SME Digital). Also, learn about our Beart Foundation.',
  keywords: ['Beart India Group divisions', 'investment solutions', 'software solutions', 'financial advisory', 'digital services', 'Beart Foundation'],
  alternates: {
    canonical: '/divisions',
  },
};

export default function DivisionsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-top-8 duration-700">Our Divisions</h1>
      <div className="grid md:grid-cols-3 gap-8">
         {/* Investment Solutions Card - Link */}
         <Link href="/divisions/investment-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-200 duration-500">
           <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[hsl(var(--accent-investment))]">
                  <TrendingUp className="h-6 w-6" />
                  Beart India Investment Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">
                  Guiding you towards financial growth with expert advice and personalized strategies.
                </p>
                 <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                    <li>Mutual Fund Planning</li>
                    <li>Equity Portfolio Advisory</li>
                    <li>NRI Investment Services</li>
                    <li>Wealth Building Workshops</li>
                    <li>Alternative Investment Funds (AIF)</li>
                    <li>Portfolio Management Services (PMS)</li>
                    <li>Non-Convertible Debentures (NCDs)</li>
                    <li>Smallcase Portfolios</li>
                    <li>Life & Health Insurance</li>
                    <li>Bonds & Invoice Discounting/FDs</li>
                    <li>Home, Education & MF Loans</li>
                  </ul>
              </CardContent>
               <div className="p-6 pt-0 mt-auto text-center">
                  <span className="text-sm font-medium text-[hsl(var(--accent-investment))]">
                    Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </span>
               </div>
            </Card>
         </Link>

          {/* Software Solutions Card - Link */}
          <Link href="/divisions/software-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-400 duration-500">
            <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[hsl(var(--accent-software))]">
                  <Server className="h-6 w-6" />
                  Beart India Software Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                 <p className="text-muted-foreground text-sm mb-4">
                  Providing reliable and scalable digital infrastructure for your business needs.
                 </p>
                <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                  <li>Website Hosting & Domain Registration</li>
                  <li>Google Workspace (Gmail for Business)</li>
                  <li>SME Digital Launch Pack</li>
                  <li>Technical Consulting</li>
                </ul>
              </CardContent>
               <div className="p-6 pt-0 mt-auto text-center">
                  <span className="text-sm font-medium text-[hsl(var(--accent-software))]">
                    Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </span>
                </div>
            </Card>
           </Link>

          {/* Beart Foundation Card - Link */}
          <Link href="/divisions/beart-foundation" className="block rounded-lg animate-in fade-in zoom-in-95 delay-600 duration-500">
            <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"> {/* Removed bg-secondary */}
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <Heart className="h-6 w-6" />
                  Beart Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    Our non-profit initiative fostering mental well-being and supporting community upliftment through social causes.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                    <li>Mental Health & Counselling</li>
                    <li>Sports Promotion & Scholarships</li>
                    <li>Elderly Care Support</li>
                    <li>Community Outreach Programs</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto text-center">
                    <span className="text-sm font-medium text-primary">
                      Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                    </span>
                </div>
            </Card>
          </Link>
      </div>
    </div>
  );
}

