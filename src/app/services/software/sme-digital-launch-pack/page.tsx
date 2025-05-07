import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, CheckCircle, Globe, Mail, Server } from "lucide-react";
import Link from "next/link";

export default function SMEDigitalLaunchPackPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Package className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               SME Digital Launch Pack
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your essential all-in-one package to quickly establish a professional digital presence for your small or medium enterprise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Getting your business online doesn't have to be complicated or expensive. Our SME Digital Launch Pack provides the foundational elements you need to create a credible and professional online identity, allowing you to connect with customers and grow your business in the digital age.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">What's Included?</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Domain Name Registration:</span> We help you choose and register a unique domain name (e.g., www.yourcompany.com) for one year.</span>
              </li>
              <li className="flex items-start gap-2">
                <Server className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Basic Website Hosting:</span> Reliable hosting for a simple website (e.g., a one-page site or basic WordPress setup) for one year, ensuring your site is accessible online.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Mail className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Professional Email Setup:</span> Configuration of up to 5 professional email addresses using your domain (e.g., info@yourcompany.com) via Google Workspace or a similar service.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Basic Website Setup (Optional Add-on):</span> Assistance with setting up a simple one-page website or installing WordPress to get you started quickly.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Guidance & Support:</span> Initial guidance on managing your domain, hosting, and email accounts.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Benefits for SMEs</h2>
             <ul className="space-y-2 list-disc list-inside">
                 <li>Establish a professional online presence quickly and affordably.</li>
                 <li>Build credibility and trust with customers.</li>
                 <li>Secure your brand's unique domain name.</li>
                 <li>Communicate professionally with custom email addresses.</li>
                 <li>Provides a foundation for future digital growth.</li>
             </ul>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-software" asChild>
                  <Link href="/contact?service=SMELaunchPack">
                    Launch Your Digital Presence <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
