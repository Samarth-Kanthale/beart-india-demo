
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, ArrowRight, Globe, Mail, Package, Code } from "lucide-react";
import Link from "next/link";

const softwareServices = [
  {
    title: "Website Hosting & Domain",
    icon: Globe,
    description: "Secure your online identity with reliable domain registration and high-performance hosting solutions tailored for speed, security, and uptime.",
    link: "/services/software/website-hosting",
  },
  {
    title: "Google Workspace",
    icon: Mail,
    description: "Enhance team collaboration with custom emails (you@yourcompany.com), cloud storage, video meetings, and Google's full productivity suite.",
    link: "/services/software/google-workspace",
  },
   {
    title: "SME Digital Launch Pack",
    icon: Package,
    description: "An essential all-in-one package: domain name, basic website hosting, and professional email setup to quickly establish your online presence.",
    link: "/services/software/sme-digital-launch-pack",
  },
   {
    title: "Technical Consulting",
    icon: Code,
    description: "Expert guidance on digital strategy, infrastructure choices, technology stack selection, troubleshooting, and optimizing your technical setup.",
    link: "/services/software/technical-consulting",
  },
];


export default function SoftwareSolutionsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      {/* Removed max-w-4xl to make card wider within container */}
      <Card className="mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Server className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Beart India Software Solutions
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Providing reliable, scalable, and affordable digital infrastructure to power your business growth in the modern era.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              In today's digital landscape, a strong online presence and efficient digital tools are crucial for success. Beart India Software Solutions specializes in delivering foundational digital services tailored for individuals, small businesses, and growing enterprises. We focus on reliability, security, and affordability, ensuring you have the technical backbone needed to thrive.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Core Services</h2>

             <div className="grid md:grid-cols-2 gap-6">
                {softwareServices.map((service) => (
                   <Link key={service.title} href={service.link} className="block hover:shadow-md transition-shadow duration-200 rounded-lg group">
                      <div className="p-4 border rounded-lg bg-background h-full flex flex-col">
                        <h3 className="flex items-center gap-2 font-semibold text-lg text-foreground mb-2 group-hover:text-[hsl(var(--accent-software))]">
                          <service.icon className="h-5 w-5 text-[hsl(var(--accent-software))]" /> {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex-grow mb-3">
                          {service.description}
                        </p>
                         <span className="text-[hsl(var(--accent-software))] font-medium text-sm mt-auto">Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
                      </div>
                   </Link>
                ))}
             </div>

             <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Choose Beart India Software?</h2>
             <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold">Reliability First:</span> We prioritize stable and secure infrastructure to keep your digital operations running smoothly.</li>
                <li><span className="font-semibold">Affordable Solutions:</span> Competitive pricing designed to fit the budgets of individuals and small businesses.</li>
                <li><span className="font-semibold">Simplified Management:</span> Easy-to-use control panels and dedicated support to manage your services.</li>
                <li><span className="font-semibold">Scalability:</span> Our solutions grow with your business, ensuring you have the resources you need as you expand.</li>
             </ul>

             <div className="text-center !mt-12">
               <Button size="lg" className="btn-software" asChild>
                  <Link href="/contact?service=SoftwareSolutions">
                    Discuss Your Software Needs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
