import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Umbrella, HeartPulse } from "lucide-react"; // Using ShieldCheck as general insurance icon
import Link from "next/link";

const insuranceServices = [
  {
    title: "Life Insurance",
    icon: Umbrella,
    description: "Secure your family's financial future with comprehensive life insurance plans.",
    link: "/services/insurance/life-insurance",
  },
  {
    title: "Health Insurance",
    icon: HeartPulse,
    description: "Protect yourself and loved ones against rising medical costs with suitable health coverage.",
    link: "/services/insurance/health-insurance",
  },
];

export default function InsurancePage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <ShieldCheck className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Insurance Solutions
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Protecting what matters most – your life, health, and financial well-being – through tailored insurance plans.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Insurance provides a crucial safety net against life's uncertainties. Whether it's safeguarding your family's future in your absence or ensuring access to quality healthcare without financial strain, the right insurance plan is a cornerstone of sound financial planning. Beart India helps you understand and choose appropriate insurance solutions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Insurance Offerings</h2>

             <div className="grid md:grid-cols-2 gap-6">
                {insuranceServices.map((service) => (
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

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Choose Us for Insurance?</h2>
             <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold">Needs-Based Advice:</span> We help assess your requirements to suggest suitable coverage.</li>
                <li><span className="font-semibold">Plan Comparison:</span> Assistance in comparing features and premiums from various insurers.</li>
                <li><span className="font-semibold">Holistic Approach:</span> Integrating insurance planning within your overall financial strategy.</li>
                <li><span className="font-semibold">Claim Assistance Guidance:</span> Providing support information during the claim process (as per insurer guidelines).</li>
             </ul>
             <p className="text-sm italic mt-4">Disclaimer: Insurance is the subject matter of solicitation. Beart India Group acts as a facilitator/introducer for insurance products. Policy issuance is at the sole discretion of the insurance company.</p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?service=Insurance">
                    Discuss Your Insurance Needs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
