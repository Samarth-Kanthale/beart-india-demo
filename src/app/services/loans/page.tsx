import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandCoins, ArrowRight, Home, GraduationCap, Library } from "lucide-react"; // Using HandCoins as a general loan icon
import Link from "next/link";

const loanServices = [
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

export default function LoansPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <HandCoins className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Loan Facilitation Services
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Guiding you through the process of securing various types of loans to meet your financial goals and requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Whether you're looking to buy a home, fund your education, or leverage your existing investments, securing the right loan can be a complex process. Beart India assists clients by facilitating access to various loan products through our network of financial institution partners. We aim to simplify the application process and help you find competitive terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Loan Services</h2>

             <div className="grid md:grid-cols-2 gap-6">
                {loanServices.map((service) => (
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

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Use Our Facilitation Services?</h2>
             <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold">Guidance:</span> Understand the different loan options and eligibility criteria.</li>
                <li><span className="font-semibold">Comparison:</span> Assistance in comparing offers from various lenders (where applicable).</li>
                <li><span className="font-semibold">Process Support:</span> Help in navigating the documentation and application process.</li>
                <li><span className="font-semibold">Leverage Network:</span> Access to loans facilitated through our partnerships.</li>
             </ul>
             <p className="text-sm italic mt-4">Disclaimer: Beart India Group acts as a facilitator and does not directly provide loans. Loan approval is subject to the terms and conditions of the respective financial institutions.</p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=Loans">
                    Discuss Your Loan Requirements <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
