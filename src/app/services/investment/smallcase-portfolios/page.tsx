

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, CheckCircle, TrendingUp, RefreshCw, Users, BarChart3, DollarSign, Calculator, Search, Target as TargetIcon } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import { SipCalculatorDialog } from "@/components/calculators/sip-calculator-dialog";

// Placeholder for API data fetching - replace with actual implementation
async function getSmallcaseExamples() {
  // Simulate API call to Smallcase or broker API
  // Example: const response = await fetch('https://gateway.smallcase.com/smallcases?params...');
  // Replace with actual API call logic below
  // const data = await response.json(); return data;
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return [
    { id: 'SC001', name: 'All Weather Investing', manager: 'Windmill Capital', theme: 'Low Volatility Multi-Asset', link: '#' },
    { id: 'SC002', name: 'Top 100 Stocks', manager: 'Windmill Capital', theme: 'Large Cap Focused', link: '#' },
    { id: 'SC003', name: 'Dividend Aristocrats', manager: 'XYZ Advisory', theme: 'High Dividend Yield', link: '#' },
    { id: 'SC004', name: 'Electric Mobility', manager: 'ABC Research', theme: 'Sectoral - EV Ecosystem', link: '#' },
  ];
}

export default async function SmallcasePortfoliosPage() {
   const smallcases = await getSmallcaseExamples();

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Package className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Smallcase Portfolios
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in baskets of stocks or ETFs based on specific themes, strategies, or ideas, managed by SEBI-registered professionals. (Minimum Investment varies)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Smallcases are modern investment products that help you build a diversified, low-cost, and long-term portfolio. Each smallcase is a curated basket of stocks or Exchange Traded Funds (ETFs) reflecting a specific market theme, investment strategy, or objective. These portfolios are created and managed by SEBI-registered investment advisors or research analysts.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Features</h2>
            <ul className="space-y-3 list-none">
                 <li className="flex items-start gap-2">
                    <Package className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Thematic &amp; Strategic Baskets:</span> Invest in ideas like 'Make in India', 'Electric Mobility', dividend yield strategies, momentum investing, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Professionally Managed:</span> Portfolios are created and managed by SEBI-registered experts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <BarChart3 className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Diversification:</span> Provides diversification within a theme or strategy by holding multiple stocks/ETFs.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Direct Ownership:</span> Stocks/ETFs are held directly in your own Demat account.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <RefreshCw className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Regular Rebalancing:</span> Managers review and rebalance the portfolios periodically based on the underlying strategy. You receive rebalance updates to execute.</span>
                  </li>
                    <li className="flex items-start gap-2">
                     <DollarSign className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Variable Minimums:</span> Minimum investment amounts vary per smallcase, making it accessible for different investment sizes.</span>
                  </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Smallcase Services</h2>
             <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Portfolio Discovery &amp; Comparison:</span> Helping you explore and compare smallcases based on themes, risk levels, and manager philosophy (Requires Smallcase API integration).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <TargetIcon className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Goal-Based Recommendations:</span> Suggesting suitable smallcases aligned with your specific financial goals (e.g., long-term growth, dividend income).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">SIP Integration Guidance:</span> Assisting in understanding how to invest via SIPs in smallcases through your broker.</span>
                </li>
              </ul>


              <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Tools &amp; Resources</h2>
               <div className="grid md:grid-cols-1 gap-4 mt-4">
                 <SipCalculatorDialog>
                    <Button variant="outline" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent w-full h-full flex flex-col items-start justify-start text-left">
                      <Calculator className="h-6 w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                      <h3 className="font-semibold text-foreground">SIP Calculator</h3>
                      <p className="text-sm text-muted-foreground overflow-visible whitespace-normal break-words">Estimate potential returns on your systematic investments.</p>
                      <span className="text-[hsl(var(--accent-investment))] font-medium text-sm mt-auto">Open Calculator <ArrowRight className="inline-block ml-1 h-3 w-3" /></span>
                    </Button>
                  </SipCalculatorDialog>
               </div>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">How it Works</h2>
             <p>
               You can browse various smallcases on the platform, understand their underlying methodology, and invest using your existing Demat and trading account through a supported broker. You pay a fee (often subscription-based) to the smallcase manager for their research and management services.
             </p>
             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Who Is It For?</h2>
              <p>
                Smallcases are suitable for investors looking for theme-based or strategy-driven equity exposure with professional oversight, direct ownership, and transparency, typically with an investment horizon of 3+ years.
              </p>
          </div>
           <LeadGenerationForm serviceTitle="Smallcase Portfolios" className="mt-12 border-t pt-8"/>
        </CardContent>
      </Card>
    </div>
  );
}

