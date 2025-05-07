
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Percent, Banknote, Search, FileText, Activity, DollarSign } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; // Import the form
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For API integration note

// Placeholder for API data fetching - replace with actual implementation
async function getActiveNCDs() {
  // Simulate API call
  // In reality, fetch from NSE/BSE/Bondskart API
  // Replace with actual API call logic below
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return [
    { id: 'NCD001', issuer: 'AAA Company Ltd.', rating: 'AAA', coupon: '9.50%', tenure: '3 Years', link: '#' },
    { id: 'NCD002', issuer: 'BBB Finance Corp.', rating: 'AA+', coupon: '10.25%', tenure: '5 Years', link: '#' },
    { id: 'NCD003', issuer: 'CCC Infra Bonds', rating: 'AA', coupon: '9.80%', tenure: '10 Years', link: '#' },
  ];
}


export default async function NonConvertibleDebenturesPage() {
  const activeNCDs = await getActiveNCDs(); // Fetch data

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <ScrollText className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Non-Convertible Debentures (NCDs)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in corporate debt instruments offering potentially higher fixed returns compared to traditional fixed deposits. (Typical Minimum Investment: 10,000 INR in public issues, practical allocation often higher)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Non-Convertible Debentures (NCDs) are fixed-income securities issued by corporations to raise funds from the public. Unlike convertible debentures, NCDs cannot be converted into equity shares of the issuing company. They offer a fixed interest rate (coupon) for a specified tenure and return the principal amount upon maturity.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Features</h2>
            <ul className="space-y-3 list-none">
               {/* ... existing key features ... */}
               <li className="flex items-start gap-2">
                <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Fixed Income:</span> Provide regular interest payments (monthly, quarterly, annually, or cumulative) at a predetermined rate.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Potentially Higher Returns:</span> Often offer higher interest rates compared to bank fixed deposits (FDs) due to the associated credit risk.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Secured vs. Unsecured:</span> NCDs can be secured (backed by company assets) or unsecured. Secured NCDs are generally considered safer.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Banknote className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Credit Rating:</span> Rated by credit rating agencies (like CRISIL, ICRA) indicating the issuer's creditworthiness and ability to repay. Higher ratings (e.g., AAA, AA) suggest lower risk.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Listing & Liquidity:</span> Many NCDs are listed on stock exchanges (NSE/BSE), providing a degree of liquidity before maturity, although liquidity can vary.</span>
              </li>
                <li className="flex items-start gap-2">
                 <DollarSign className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Minimum Investment:</span> Face value is often low (e.g., Rs 1,000), but the minimum application size for public issues is typically around INR 10,000.</span>
              </li>
            </ul>

            {/* New Section: NCD Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">NCD Services We Offer</h2>
             <ul className="space-y-3 list-none">
               <li className="flex items-start gap-2">
                 <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Active Issue Listing:</span> Providing information on currently available public NCD issues (Data integration placeholder).</span>
               </li>
                <li className="flex items-start gap-2">
                 <Activity className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Risk-Return Analysis:</span> Helping compare NCDs based on credit ratings, coupon rates, security status, and tenure.</span>
               </li>
                <li className="flex items-start gap-2">
                 <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Application Assistance:</span> Guidance on the application process through ASBA (Applications Supported by Blocked Amount) via your bank account.</span>
               </li>
             </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Investment Considerations</h2>
             <p>
               Investors should carefully assess the credit rating, tenure, coupon rate, and security status of the NCD before investing. Higher yields usually come with higher risk. NCDs are suitable for investors seeking fixed returns higher than FDs and who understand credit risk. Interest earned is generally taxable as per the investor's income tax slab.
             </p>

             {/* Original Enquiry Button - Optional */}
             {/* <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=NCDs">
                    Explore NCD Investment Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div> */}
          </div>

           {/* Lead Generation Form Section */}
           <LeadGenerationForm serviceTitle="Non-Convertible Debentures (NCDs)" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}

