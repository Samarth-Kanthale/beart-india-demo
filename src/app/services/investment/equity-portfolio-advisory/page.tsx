import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EquityPortfolioAdvisoryPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Equity Portfolio Advisory
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Build and manage a robust equity portfolio with our expert, research-backed advisory services focused on long-term wealth creation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Investing directly in the stock market requires careful analysis and strategic planning. Our Equity Portfolio Advisory service provides you with personalized guidance based on thorough research and market insights. We help you identify high-potential stocks, build a diversified portfolio aligned with your risk tolerance, and actively manage your investments to maximize long-term growth.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Key Features</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Personalized Strategy:</span> Portfolio construction tailored to your financial goals, investment horizon, and risk profile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Research-Driven Insights:</span> Recommendations based on in-depth fundamental and technical analysis of companies and market trends.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Active Monitoring & Rebalancing:</span> Continuous tracking of your portfolio and timely adjustments to adapt to market conditions and maintain alignment with your goals.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Regular Updates & Reviews:</span> Transparent reporting and periodic reviews to discuss performance and strategy.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Focus on Long-Term Wealth:</span> Emphasis on quality stocks and disciplined investing for sustainable wealth creation.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Who Is This For?</h2>
             <p>
               This service is ideal for investors who want direct exposure to the equity market but seek professional expertise for stock selection and portfolio management. It's suitable for both experienced investors looking for enhanced advisory and those new to direct equity investing.
             </p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=EquityPortfolioAdvisory">
                    Discuss Your Equity Goals <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
