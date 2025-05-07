import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, CheckCircle, Landmark, FileText, Users } from "lucide-react";
import Link from "next/link";

export default function NRIInvestmentServicesPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Globe className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               NRI Investment Services
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly invest in India from anywhere in the world with our specialized services tailored for Non-Resident Indians (NRIs).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Investing back in India offers significant growth opportunities for NRIs. However, navigating the specific regulations (like FEMA guidelines) and identifying suitable investment avenues can be challenging from abroad. Beart India provides comprehensive support to help NRIs make informed investment decisions and manage their portfolios effectively.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">How We Assist NRIs</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Regulatory Guidance:</span> Assistance in understanding FEMA regulations, repatriation rules, and taxation implications for NRI investments.</span>
              </li>
               <li className="flex items-start gap-2">
                <Landmark className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Bank Account Setup:</span> Guidance on opening NRE (Non-Resident External) and NRO (Non-Resident Ordinary) accounts required for investing.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Investment Options:</span> Advisory on permissible investments including mutual funds (equity, debt, hybrid), direct equity, Portfolio Management Services (PMS), and real estate (within regulatory limits).</span>
              </li>
              <li className="flex items-start gap-2">
                 <Globe className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Portfolio Management:</span> Personalized portfolio construction and ongoing management tailored to NRI needs and goals.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Dedicated Support:</span> Seamless communication and support across time zones to address queries and provide updates.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Invest in India as an NRI?</h2>
             <ul className="space-y-2 list-disc list-inside">
                 <li>Benefit from one of the world's fastest-growing major economies.</li>
                 <li>Diversify your global investment portfolio.</li>
                 <li>Potential for higher returns compared to many developed markets.</li>
                 <li>Invest in familiar territory with strong long-term prospects.</li>
             </ul>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=NRIInvestment">
                    Explore NRI Investment Options <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
