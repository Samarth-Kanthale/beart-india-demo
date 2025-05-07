

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, BarChart3, Globe, Users, Briefcase, ScrollText, Package, Umbrella, HeartPulse, Link as LinkIcon, ReceiptText, Home, GraduationCap, HandCoins, Library, Presentation } from "lucide-react";
import Link from "next/link";

const investmentServices = [
    {
      title: "Mutual Fund Planning",
      icon: BarChart3,
      description: "Strategically select and manage mutual funds aligned with your financial goals, risk appetite, and investment horizon. We help simplify the complex choices.",
      link: "/services/investment/mutual-fund-planning",
    },
    {
      title: "Equity Portfolio Advisory",
      icon: TrendingUp,
      description: "Build and manage a robust equity portfolio with our expert, research-backed advisory services focused on long-term wealth creation and stock selection.",
      link: "/services/investment/equity-portfolio-advisory",
    },
     {
      title: "NRI Investment Services",
      icon: Globe,
      description: "Seamlessly invest in India from anywhere in the world with specialized services for Non-Resident Indians, navigating regulations and opportunities.",
      link: "/services/investment/nri-investment-services",
    },
     {
      title: "Wealth Building Workshops",
      icon: Users,
      description: "Empower yourself with financial literacy through interactive workshops covering investment fundamentals, mutual funds, stock markets, and financial planning.",
      link: "/services/investment/wealth-building-workshops",
    },
    // New Services Added Below
    {
      title: "Alternative Investment Funds (AIF)",
      icon: Briefcase,
      description: "Access sophisticated investment avenues like venture capital, private equity, and hedge funds. Minimum investment typically 1 Cr.",
      link: "/services/investment/alternative-investment-funds", 
    },
    {
      title: "Portfolio Management Services (PMS)",
      icon: Presentation, 
      description: "Professional management of your equity portfolio tailored to your investment objectives. Minimum investment typically 50L.",
      link: "/services/investment/portfolio-management-services", 
    },
    {
      title: "Non-Convertible Debentures (NCDs)",
      icon: ScrollText,
      description: "Invest in corporate debt instruments offering potentially higher returns than traditional fixed deposits. Minimum investment typically 10L.",
      link: "/services/investment/non-convertible-debentures", 
    },
    {
      title: "Smallcase Portfolios",
      icon: Package,
      description: "Invest in curated baskets of stocks or ETFs based on specific themes, strategies, or ideas. Minimum investment typically 2.5L.",
      link: "/services/investment/smallcase-portfolios", 
    },
    {
      title: "Life Insurance",
      icon: Umbrella,
      description: "Secure your family's financial future with comprehensive life insurance plans tailored to your needs.",
      link: "/services/insurance/life-insurance", 
    },
    {
      title: "Health Insurance",
      icon: HeartPulse,
      description: "Protect yourself and your loved ones against rising medical costs with suitable health insurance coverage.",
      link: "/services/insurance/health-insurance", 
    },
    {
      title: "Bonds",
      icon: LinkIcon, 
      description: "Diversify your portfolio with government and corporate bonds offering fixed income streams.",
      link: "/services/investment/bonds", 
    },
    {
      title: "Invoice Discounting / FDs",
      icon: ReceiptText,
      description: "Explore alternative fixed-income options like invoice discounting and corporate fixed deposits.",
      link: "/services/investment/invoice-discounting", 
    },
    {
      title: "Home Loans",
      icon: Home,
      description: "Assistance in securing competitive home loans to fulfill your dream of owning a house.",
      link: "/services/loans/home-loans", 
    },
    {
      title: "Education Loans",
      icon: GraduationCap,
      description: "Facilitating education loans to support academic aspirations without financial burden.",
      link: "/services/loans/education-loans", 
    },
    {
      title: "Loan Against Mutual Funds",
      icon: Library, 
      description: "Leverage your mutual fund investments to avail loans for various financial needs.",
      link: "/services/loans/loan-against-mutual-funds", 
    },
];


export default function InvestmentSolutionsPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6">
      
      <Card className="mx-auto shadow-lg w-full"> {/* Made card wider */}
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Beart India Investment Solutions
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Guiding you towards financial prosperity with expert advice, personalized strategies, and a commitment to your long-term growth.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              At Beart India Investment Solutions, we understand that navigating the world of investments can be complex. As a proud sub-broker of Aditya Birla Money, we leverage deep market expertise and a client-centric approach to help you make informed financial decisions. Whether you're starting your investment journey, planning for retirement, or seeking specialized advice as an NRI, our team is dedicated to empowering your financial future.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Core Services</h2>

             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {investmentServices.map((service) => (
                  <Link key={service.title} href={service.link} className="block hover:shadow-md transition-shadow duration-200 rounded-lg group">
                     <div className="p-4 border rounded-lg bg-background h-full flex flex-col">
                       <h3 className="flex items-center gap-2 font-semibold text-lg text-foreground mb-2 group-hover:text-[hsl(var(--accent-investment))]">
                         <service.icon className="h-5 w-5 text-[hsl(var(--accent-investment))]" /> {service.title}
                       </h3>
                       <p className="text-sm text-muted-foreground flex-grow mb-3">
                         {service.description} 
                       </p>
                        <span className="text-[hsl(var(--accent-investment))] font-medium text-sm mt-auto">Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
                     </div>
                  </Link>
                ))}
             </div>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Choose Beart India Investments?</h2>
             <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold">Expert Guidance:</span> Leverage the knowledge of certified professionals partnered with Aditya Birla Money.</li>
                <li><span className="font-semibold">Personalized Approach:</span> Strategies tailored to your unique financial situation and aspirations.</li>
                <li><span className="font-semibold">Transparency & Trust:</span> Clear communication and ethical practices form the bedrock of our client relationships.</li>
                <li><span className="font-semibold">Long-Term Focus:</span> We prioritize sustainable growth and building lasting financial security for our clients.</li>
                <li><span className="font-semibold">Wide Range of Solutions:</span> From mutual funds to alternative investments and loans, we offer diverse options.</li> 
             </ul>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=InvestmentSolutions">
                    Get Started with Investments <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
