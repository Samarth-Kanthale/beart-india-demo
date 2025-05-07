

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, ArrowRight, CheckCircle, Hospital, DollarSign, Users, Calculator, FileQuestion } from "lucide-react"; // Added Calculator, FileQuestion
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; // Import the form
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For API integration note


// Placeholder for API data fetching - replace with actual implementation
async function getInsuranceQuotes() {
  // Simulate API call to Policybazaar, Turtlemint, etc.
  // Example: const response = await fetch('https://api.aggregator.com/health-quotes?params...');
  // const data = await response.json(); return data;
  // Replace with actual API call logic below
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  // Replace with actual API call logic
  return [
    { id: 'HI001', insurer: 'Insurer A', plan: 'Comprehensive Plan', premium: '₹15,000/year (Approx)', link: '#' },
    { id: 'HI002', insurer: 'Insurer B', plan: 'Family Floater Plan', premium: '₹25,000/year (Approx)', link: '#' },
    { id: 'HI003', insurer: 'Insurer C', plan: 'Senior Citizen Plan', premium: '₹35,000/year (Approx)', link: '#' },
  ];
}

export default async function HealthInsurancePage() {
  const quotes = await getInsuranceQuotes();

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <HeartPulse className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Health Insurance
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Protect yourself and your family against the financial burden of rising medical costs with comprehensive health insurance coverage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              In an era of escalating healthcare expenses, health insurance acts as a vital safety net, ensuring you can access quality medical treatment without exhausting your savings. It covers hospitalization expenses, pre and post-hospitalization costs, daycare procedures, and sometimes even OPD consultations, depending on the plan.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Benefits of Health Insurance</h2>
            <ul className="space-y-3 list-none">
               {/* ... existing benefits ... */}
                  <li className="flex items-start gap-2">
                    <Hospital className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Coverage for Medical Expenses:</span> Pays for hospitalization costs including room rent, doctor fees, nursing charges, diagnostic tests, medicines, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Financial Security:</span> Protects your savings from being depleted due to unexpected medical emergencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Cashless Facility:</span> Avail treatment at network hospitals without paying upfront (subject to policy terms and approvals).</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Family Coverage:</span> Options available to cover your entire family (spouse, children, parents) under a single plan (Family Floater).</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <HeartPulse className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Preventive Healthcare:</span> Many plans offer benefits for annual health check-ups.</span>
                  </li>
                     <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Tax Benefits:</span> Premiums paid are eligible for tax deductions under Section 80D of the Income Tax Act (subject to limits and conditions).</span>
                  </li>
            </ul>

            {/* New Section: Health Insurance Services */}
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Health Insurance Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <FileQuestion className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Needs Analysis:</span> Helping you determine the appropriate sum insured and coverage type based on family size, age, location, and health conditions.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Instant Quote Generation:</span> Providing approximate premium quotes from top insurers based on your details (API integration needed - requires partnership with providers like Policybazaar, Turtlemint, or InsuranceDekho).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Plan Comparison:</span> Assisting in comparing features like room rent limits, co-payments, waiting periods, network hospitals, and claim settlement ratios.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Claim Support Assistance:</span> Providing guidance and information during the claim filing process (as per insurer guidelines - requires broker/PoSP registration).</span>
                </li>
              </ul>


             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Choosing the Right Plan</h2>
             <p>We assist you in selecting the right health insurance plan by considering factors such as:</p>
             <ul className="space-y-2 list-disc list-inside">
                {/* ... existing points ... */}
                    <li>Coverage amount (Sum Insured) based on your city, family size, and lifestyle.</li>
                    <li>Individual vs. Family Floater plans.</li>
                    <li>Network hospitals in your vicinity.</li>
                    <li>Inclusions, exclusions, waiting periods, and sub-limits.</li>
                    <li>Co-payment clauses and deductibles.</li>
                    <li>Availability of riders (e.g., critical illness cover, maternity cover).</li>
             </ul>
              <p>
               Having adequate health insurance is essential for financial well-being. We help you compare plans from various insurers to find the best fit for your needs and budget.
              </p>

            {/* Original Enquiry Button - Optional */}
            {/* <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=HealthInsurance">
                    Get a Health Insurance Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div> */}
          </div>

             {/* Lead Generation Form Section */}
            <LeadGenerationForm serviceTitle="Health Insurance" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}

