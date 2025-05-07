

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, CheckCircle, Banknote, Zap, Percent, HelpCircle, Calculator } from "lucide-react"; // Added Calculator
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; // Import the form
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For API note


export default function LoanAgainstMutualFundsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Library className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Loan Against Mutual Funds (LAMF)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage your mutual fund investments to secure funds for various financial needs without liquidating your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Loan Against Mutual Funds (LAMF) allows you to pledge your mutual fund units as collateral to obtain a loan from banks or Non-Banking Financial Companies (NBFCs). This is an overdraft facility, meaning you get a credit limit based on the value of your pledged holdings, and you pay interest only on the amount utilized.
            </p>

             {/* New Section: LAMF Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our LAMF Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">MF Eligibility Checker:</span> Helping you identify which funds in your portfolio are typically accepted as collateral by lenders.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Instant Quote Generator:</span> Providing indicative loan limits and interest rates based on your pledged holdings (API integration required).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Banknote className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Lender Connect:</span> Facilitating connections with partner NBFCs and Banks offering LAMF facilities (e.g., Bajaj Finserv, HDFC Bank, ICICI Bank).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Process Guidance:</span> Explaining the pledging process and documentation required by lenders.</span>
                </li>
              </ul>


            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">How it Works & Key Features</h2>
            <ul className="space-y-3 list-none">
               {/* ... existing features ... */}
                   <li className="flex items-start gap-2">
                    <Library className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Pledging Units:</span> Your eligible mutual fund units (usually equity and sometimes debt funds) are pledged with the lender.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Banknote className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Overdraft Facility:</span> You receive a credit limit (typically 50-70% of the value of pledged equity units, higher for debt units). You can withdraw funds up to this limit as needed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Interest on Utilized Amount:</span> Interest is charged only on the amount withdrawn from the overdraft account and for the duration it is used.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">No Liquidation Needed:</span> Your investments continue to potentially grow even while pledged, as you don't sell the units. You remain entitled to dividends/bonuses.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <Zap className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Quick Processing:</span> Generally faster processing compared to unsecured loans, as it's secured against your investments.</span>
                  </li>
                    <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Flexible Repayment:</span> Often involves servicing only the interest, with the principal adjustable against the overdraft limit or payable later.</span>
                  </li>
            </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Use Cases</h2>
             <p>LAMF can be used for various short-term to medium-term financial requirements, such as:</p>
             <ul className="space-y-2 list-disc list-inside">
                {/* ... existing use cases ... */}
                   <li>Managing temporary cash flow mismatches.</li>
                    <li>Funding urgent personal expenses.</li>
                    <li>Making down payments or bridging finance needs.</li>
                    <li>Meeting business working capital requirements.</li>
             </ul>
             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Important Considerations</h2>
              <p>
               Lenders apply a margin (haircut) to the value of units, meaning the loan limit is less than the market value. If the market value of pledged units falls significantly, the lender may ask for additional units to be pledged or for partial repayment (margin call). Interest rates are typically higher than home loans but potentially lower than personal loans.
              </p>

            {/* Original Enquiry Button - Optional */}
             {/* <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=LAMF">
                    Enquire About Loan Against Mutual Funds <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div> */}
          </div>

             {/* Lead Generation Form Section */}
            <LeadGenerationForm serviceTitle="Loan Against Mutual Funds (LAMF)" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}

