

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReceiptText, ArrowRight, CheckCircle, Clock, TrendingUp, Banknote, Building, HelpCircle, Search, Activity, Percent } from "lucide-react"; 
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; 

// Placeholder for API data fetching - replace with actual implementation
async function getInvoiceDiscountingDeals() {
  // Simulate API call from KredX, TradeCred, etc.
    // Replace with actual API call logic below
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    { id: 'INV001', seller: 'Vendor A', buyer: 'Large Corp X', rating: 'A+', yield: '12.5% (p.a.)', tenure: '60 Days', link: '#' },
    { id: 'INV002', seller: 'Supplier B', buyer: 'MNC Y', rating: 'AA-', yield: '11.8% (p.a.)', tenure: '90 Days', link: '#' },
    { id: 'INV003', seller: 'Service Provider C', buyer: 'PSU Z', rating: 'AAA', yield: '10.5% (p.a.)', tenure: '45 Days', link: '#' },
  ];
}

export default async function InvoiceDiscountingFDsPage() {
  const deals = await getInvoiceDiscountingDeals();

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <ReceiptText className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Invoice Discounting & Corporate FDs
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore alternative fixed-income options like invoice discounting and corporate fixed deposits for potentially higher yields.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Invoice Discounting</h2>
             <p>
               Invoice discounting is a form of short-term borrowing often used by businesses to improve their working capital and cash flow. Investors can participate by funding these invoices through specialized platforms. Essentially, you are lending money against unpaid invoices raised by businesses (sellers) to reputable corporations (buyers), expecting repayment once the buyer pays the invoice.
             </p>
            <ul className="space-y-3 list-none">
               
                 <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Short Tenure:</span> Investments typically range from 30 to 120 days, aligned with invoice payment cycles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Potentially Higher Yields:</span> Often provides higher returns compared to traditional FDs or liquid funds due to the associated risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <Building className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Risk Factor:</span> The primary risk is the delay or default in payment by the buyer of the goods/services (the corporate debtor). Due diligence on the platform and the underlying corporates is essential.</span>
                  </li>
            </ul>

            
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Invoice Discounting Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Curated Deal Listing:</span> Showcasing selected invoice discounting opportunities from our partner platforms (e.g., KredX, TradeCred - Placeholder).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Activity className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Risk Level Indicator:</span> Providing an indicative risk assessment based on the buyer's creditworthiness (where available).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Onboarding Helpdesk:</span> Assisting new investors with the KYC and onboarding process on partner platforms.</span>
                </li>
              </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Corporate Fixed Deposits (Corporate FDs)</h2>
             <p>
                Corporate FDs are fixed deposit schemes offered by companies (including NBFCs and Housing Finance Companies) directly to the public. They function similarly to bank FDs but typically offer slightly higher interest rates.
             </p>
             <ul className="space-y-3 list-none">
                
                  <li className="flex items-start gap-2">
                    <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Higher Interest Rates:</span> Generally offer better rates than bank FDs for similar tenures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Banknote className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Fixed Returns:</span> Interest rate is fixed at the time of investment for the chosen tenure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Credit Risk:</span> Unlike bank FDs (which are insured up to 5 Lakhs by DICGC), corporate FDs carry credit risk associated with the issuing company. Higher-rated companies (AAA, AA) are considered safer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Liquidity:</span> Premature withdrawal options might be available but often come with penalties.</span>
                  </li>
             </ul>
              

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Investment Considerations</h2>
             <p>
               Both invoice discounting and corporate FDs offer potential for higher fixed income but come with higher risks than traditional bank deposits. Thorough assessment of the platform/company's credibility, credit ratings (for FDs), and the underlying businesses/invoices (for discounting) is crucial. These are suitable for investors with a moderate to high-risk appetite seeking portfolio diversification.
             </p>

            
          </div>

            
           <LeadGenerationForm serviceTitle="Invoice Discounting / Corporate FDs" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}

