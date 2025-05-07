
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, ArrowRight, CheckCircle, Landmark, Building, ShieldCheck, Percent, Search, FileText, Activity } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; // Import the form
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For API integration note

// Placeholder for API data fetching - replace with actual implementation
async function getActiveBonds() {
  // Simulate API call
  // In reality, fetch from NSE/BSE/RBI Retail Direct/Bondskart API
  // Replace with actual API call logic below
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return [
    { id: 'BOND001', type: 'Government', issuer: 'Government of India', rating: 'Sovereign', coupon: '7.10%', maturity: '2029', link: '#' },
    { id: 'BOND002', type: 'Corporate', issuer: 'XYZ Corp', rating: 'AAA', coupon: '8.50%', maturity: '2027', link: '#' },
    { id: 'BOND003', type: 'Tax-Free', issuer: 'PFC Ltd.', rating: 'AAA', coupon: '5.80% (Tax-Free)', maturity: '2034', link: '#' },
     { id: 'SGB001', type: 'SGB', issuer: 'RBI (on behalf of GoI)', rating: 'Sovereign', coupon: '2.50% + Gold Price', maturity: '8 Years', link: '#' },
  ];
}

export default async function BondsPage() {
   const activeBonds = await getActiveBonds(); // Fetch data

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <LinkIcon className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Bonds
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Diversify your portfolio and earn fixed income by investing in government and corporate bonds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Bonds are debt instruments where an investor loans money to an entity (typically corporate or governmental) which borrows the funds for a defined period at a variable or fixed interest rate. Bonds are used by companies, municipalities, states, and sovereign governments to finance projects and operations.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Features of Bonds</h2>
            <ul className="space-y-3 list-none">
               {/* ... existing key features ... */}
                <li className="flex items-start gap-2">
                    <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Fixed Income Stream:</span> Bonds typically pay periodic interest (coupons) to bondholders and return the principal amount at maturity.</span>
                </li>
                <li className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Relative Safety:</span> Government bonds are generally considered low-risk investments. Corporate bonds vary in risk based on the issuer's creditworthiness.</span>
                </li>
                <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Diversification:</span> Bonds often have a low correlation with equity markets, making them a good tool for portfolio diversification.</span>
                </li>
                <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Predictable Returns:</span> For fixed-rate bonds held till maturity, the returns are generally predictable.</span>
                </li>
            </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Types of Bonds</h2>
             <p>We provide access and advisory on various types of bonds, including:</p>
             <ul className="space-y-2 list-disc list-inside">
                 {/* ... existing bond types ... */}
                  <li><span className="font-semibold"><Landmark className="inline h-4 w-4 mr-1" /> Government Bonds (G-Secs):</span> Issued by the central or state governments, considered very safe (e.g., Treasury Bills, Dated Securities).</li>
                  <li><span className="font-semibold"><Building className="inline h-4 w-4 mr-1" /> Corporate Bonds:</span> Issued by private and public companies to raise capital. Risk and return vary based on credit ratings.</li>
                  <li><span className="font-semibold"><CheckCircle className="inline h-4 w-4 mr-1" /> Tax-Free Bonds:</span> Issued by government entities where the interest earned is exempt from income tax.</li>
                  <li><span className="font-semibold"><ShieldCheck className="inline h-4 w-4 mr-1" /> Sovereign Gold Bonds (SGBs):</span> Government securities denominated in grams of gold, offering an alternative to holding physical gold.</li>
             </ul>

              {/* New Section: Bond Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Bond Services We Offer</h2>
             <ul className="space-y-3 list-none">
               <li className="flex items-start gap-2">
                 <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Active Issue Listing:</span> Information on available government bonds (G-Secs, SGBs) and corporate bonds/NCDs (Data integration placeholder).</span>
               </li>
                <li className="flex items-start gap-2">
                 <Activity className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Risk-Return Analysis:</span> Comparing bonds based on issuer type, credit rating, yield-to-maturity (YTM), coupon rate, and tenure.</span>
               </li>
                <li className="flex items-start gap-2">
                 <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Application Assistance:</span> Guidance on applying for bonds via RBI Retail Direct (for G-Secs/SGBs), exchange platforms (for listed bonds), or ASBA (for NCD public issues).</span>
               </li>
             </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Investment Considerations</h2>
             <p>
               Bond prices can fluctuate based on changes in interest rates (inverse relationship), credit ratings, and market liquidity. Investors should consider their risk tolerance, investment horizon, and the credit quality of the issuer before investing in bonds.
             </p>
          </div>

            {/* Lead Generation Form Section */}
           <LeadGenerationForm serviceTitle="Bonds" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
