import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, CheckCircle, Server, ShieldCheck, Zap, Wrench } from "lucide-react";
import Link from "next/link";

export default function WebsiteHostingPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Globe className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Website Hosting & Domain Registration
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your online identity with reliable domain registration and high-performance website hosting solutions tailored for speed and uptime.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Your website is your digital storefront. Ensuring it's always available, fast, and secure is crucial for your online success. Beart India offers robust hosting solutions and straightforward domain registration services to establish and maintain your unique online presence.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Hosting Features</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Server className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Reliable Infrastructure:</span> Hosted on stable servers with high uptime guarantees to keep your website accessible.</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Optimized Performance:</span> Configured for speed with features like SSD storage and optimized caching (depending on plan) to ensure fast loading times.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Security Measures:</span> Includes basic security protocols, with options for SSL certificates and enhanced security features.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Wrench className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Easy Management:</span> User-friendly control panel (like cPanel or Plesk) for managing files, databases, and email accounts.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Scalable Plans:</span> Options ranging from basic shared hosting for small sites to more powerful solutions for growing businesses.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Domain Registration</h2>
             <p>
               Secure your desired web address (.com, .in, .org, etc.) before someone else does. We simplify the domain registration process, helping you find, register, and manage your domain names easily. We also assist with DNS management and domain transfers.
             </p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-software" asChild>
                  <Link href="/contact?service=HostingDomain">
                    Get Your Website Online <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
