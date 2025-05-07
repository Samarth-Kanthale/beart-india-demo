

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, CheckCircle, Percent, FileText, Users, Calculator, Search } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import { EmiCalculatorDialog } from "@/components/calculators/emi-calculator-dialog"; // Import the EMI calculator


export default function HomeLoansPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Home className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Home Loans
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Facilitating competitive home loans to help you realize your dream of owning a house, with guidance through the application process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Buying a home is one of the most significant financial decisions in life. A home loan provides the necessary financial assistance to purchase or construct a house. Navigating the various loan options, interest rates, and documentation requirements can be overwhelming. We assist you in finding the right home loan product and guide you through the process.
            </p>

              {/* New Section: Loan Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Home Loan Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">EMI Calculators:</span> Estimate your potential Equated Monthly Installment based on loan amount, rate, and tenure.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Pre-Eligibility Checker:</span> Assess your likely loan eligibility based on income and credit profile (API integration needed - requires partnership with lenders like HDFC, ICICI, CredAvenue).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Document Checklist &amp; Support:</span> Providing a comprehensive list of required documents (KYC, income proof, property papers) and guidance.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Lender Tie-Ups &amp; Comparison:</span> Facilitating connections with partner banks/NBFCs and helping compare their offers.</span>
                </li>
              </ul>

              {/* Tools & Resources Section */}
               <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Tools &amp; Resources</h2>
               <div className="grid md:grid-cols-2 gap-4 mt-4">
                 <EmiCalculatorDialog>
                    <Button variant="outline" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent w-full h-full flex flex-col items-start justify-start text-left">
                      <Calculator className="h-6 w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                      <h3 className="font-semibold text-foreground">Home Loan EMI Calculator</h3>
                      <p className="text-sm text-muted-foreground overflow-visible whitespace-normal break-words">Estimate your monthly EMI payments.</p>
                      <span className="text-[hsl(var(--accent-investment))] font-medium text-sm mt-auto">Open Calculator <ArrowRight className="inline-block ml-1 h-3 w-3" /></span>
                    </Button>
                  </EmiCalculatorDialog>

                  <div className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent">
                    <CheckCircle className="h-6 w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                    <h3 className="font-semibold">Eligibility Check (Coming Soon)</h3>
                    <p className="text-sm text-muted-foreground">Get a quick preliminary eligibility assessment.</p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-[hsl(var(--accent-investment))]" asChild disabled>
                        <Link href="#">Check Eligibility <ArrowRight className="inline-block ml-1 h-3 w-3" /></Link>
                    </Button>
                 </div>
               </div>


            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">How We Help</h2>
            <ul className="space-y-3 list-none">
                {/* ... existing help points ... */}
                  <li className="flex items-start gap-2">
                    <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Comparison of Offers:</span> Helping you compare interest rates, processing fees, tenure options, and other terms from various banks and financial institutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Eligibility Assessment:</span> Assisting in understanding your loan eligibility based on income, credit score, and other factors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Documentation Guidance:</span> Providing clarity on the required documents for the loan application process.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Application Support:</span> Guiding you through the application submission and follow-up process.</span>
                  </li>
                    <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Loan Transfer Assistance:</span> Guidance on balance transfer options if you wish to switch your existing home loan to a lender offering better terms.</span>
                  </li>
            </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Types of Home Loans Facilitated</h2>
             <ul className="space-y-2 list-disc list-inside">
                 {/* ... existing types ... */}
                    <li>Purchase of New/Resale Property</li>
                    <li>Construction Loans</li>
                    <li>Home Improvement/Extension Loans</li>
                    <li>Balance Transfer Loans</li>
                    <li>Top-up Loans</li>
             </ul>
             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Considerations</h2>
              <p>
                Factors like interest rate type (fixed vs. floating), loan tenure, processing fees, pre-payment charges, and lender credibility should be carefully evaluated. Home loans also offer significant tax benefits on both principal repayment and interest payment under relevant sections of the Income Tax Act.
              </p>

          </div>

             {/* Lead Generation Form Section */}
           <LeadGenerationForm serviceTitle="Home Loans" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}

