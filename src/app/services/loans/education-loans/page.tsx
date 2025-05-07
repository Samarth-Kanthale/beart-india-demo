

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, CheckCircle, Banknote, Globe, FileText, Calculator, Search, Percent } from "lucide-react"; 
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import { EmiCalculatorDialog } from "@/components/calculators/emi-calculator-dialog"; // Import EMI calculator

export default function EducationLoansPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500">
        <CardHeader className="text-center pb-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <GraduationCap className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Education Loans
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Facilitating education loans to support academic aspirations in India and abroad, ensuring finances don't hinder potential.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Pursuing higher education, whether in India or overseas, often involves significant financial investment. Education loans bridge the gap between your aspirations and financial constraints, covering tuition fees, living expenses, travel, and other related costs. We assist students and parents in navigating the education loan landscape.
            </p>

             {/* New Section: Loan Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Education Loan Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-300">
                  <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">EMI Calculators:</span> Estimate your monthly loan repayment based on loan amount, interest rate, and tenure.</span>
                </li>
                 <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-400">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Pre-Eligibility Checker:</span> Get an initial assessment of your loan eligibility based on basic criteria (API integration needed - requires partnership with lenders like HDFC, ICICI, CredAvenue).</span>
                </li>
                 <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-500">
                  <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Document Checklist &amp; Support:</span> Providing a clear list of required documents and assistance in preparing the application.</span>
                </li>
                 <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-600">
                  <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Lender Comparison:</span> Helping compare offers, interest rates, and terms from various banks and NBFCs we partner with.</span>
                </li>
              </ul>

              {/* Tools & Resources Section */}
               <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Tools &amp; Resources</h2>
               <div className="grid md:grid-cols-2 gap-4 mt-4">
                 <EmiCalculatorDialog>
                    <Button variant="outline" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent animate-in zoom-in-95 duration-500 delay-800 w-full h-full flex flex-col items-start justify-start text-left">
                      <Calculator className="h-6 w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                      <h3 className="font-semibold text-foreground">Education Loan EMI Calculator</h3>
                      <p className="text-sm text-muted-foreground overflow-visible whitespace-normal break-words">Estimate your monthly EMI payments.</p>
                       <span className="text-[hsl(var(--accent-investment))] font-medium text-sm mt-auto">Open Calculator <ArrowRight className="inline-block ml-1 h-3 w-3" /></span>
                    </Button>
                  </EmiCalculatorDialog>
                  <div className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent animate-in zoom-in-95 duration-500 delay-900">
                    <CheckCircle className="h-6 w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                    <h3 className="font-semibold">Eligibility Check (Coming Soon)</h3>
                    <p className="text-sm text-muted-foreground">Get a quick preliminary eligibility assessment.</p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-[hsl(var(--accent-investment))]" asChild disabled>
                        <Link href="#">Check Eligibility <ArrowRight className="inline-block ml-1 h-3 w-3" /></Link>
                    </Button>
                 </div>
               </div>


            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Assistance Includes</h2>
            <ul className="space-y-3 list-none">
               {/* ... existing assistance points ... */}
                  <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-300">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Course &amp; Institution Eligibility:</span> Helping understand loan eligibility criteria based on the chosen course and institution (India/Abroad).</span>
                  </li>
                  <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-400">
                    <Banknote className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Loan Amount &amp; Coverage:</span> Guidance on assessing required loan amount and understanding what expenses are typically covered (tuition, hostel, books, travel, etc.).</span>
                  </li>
                  <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-500">
                     <Percent className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Interest Rates &amp; Terms:</span> Comparing interest rates (fixed/floating), processing fees, moratorium periods, and repayment tenures from different lenders.</span>
                  </li>
                   <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-600">
                     <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Collateral Requirements:</span> Explaining requirements for collateral security based on the loan amount and lender policies.</span>
                  </li>
                    <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-700">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Co-applicant/Guarantor Needs:</span> Clarifying the role and requirement of a co-applicant (usually parents/guardian).</span>
                  </li>
                   <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-800">
                     <FileText className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Documentation &amp; Application:</span> Assisting with the preparation and submission of the loan application and required documents.</span>
                  </li>
            </ul>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Benefits of Education Loans</h2>
             <ul className="space-y-2 list-disc list-inside">
                {/* ... existing benefits ... */}
                 <li className="animate-in fade-in duration-500 delay-300">Funds higher education without straining family savings.</li>
                  <li className="animate-in fade-in duration-500 delay-400">Covers a wide range of education-related expenses.</li>
                  <li className="animate-in fade-in duration-500 delay-500">Moratorium period allows repayment to start after course completion.</li>
                  <li className="animate-in fade-in duration-500 delay-600">Tax benefits on interest paid under Section 80E of the Income Tax Act.</li>
                  <li className="animate-in fade-in duration-500 delay-700">Builds credit history for the student.</li>
             </ul>

             <p>
               We partner with various financial institutions to help you find the most suitable education loan product tailored to your specific academic journey.
             </p>

          </div>

             {/* Lead Generation Form Section */}
           <LeadGenerationForm serviceTitle="Education Loans" className="mt-12 border-t pt-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000"/>

        </CardContent>
      </Card>
    </div>
  );
}

