import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, CheckCircle, Lightbulb, Wrench, CloudCog, Network } from "lucide-react";
import Link from "next/link";

export default function TechnicalConsultingPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Code className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Technical Consulting
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance to navigate complex technology decisions, optimize your digital infrastructure, and solve technical challenges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Making the right technology choices is critical for business efficiency and growth. Whether you're planning a new project, facing technical hurdles, or looking to optimize your existing setup, our Technical Consulting service provides the expertise you need to make informed decisions and achieve your objectives.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Areas of Expertise</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Digital Strategy & Roadmap:</span> Aligning technology initiatives with business goals, identifying opportunities, and creating a clear roadmap for implementation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CloudCog className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Infrastructure Planning:</span> Advising on hosting solutions (shared, VPS, cloud), server configurations, scalability planning, and cost optimization.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Network className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Technology Stack Selection:</span> Guidance on choosing the right programming languages, frameworks, databases, and tools for your web applications or software projects.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Wrench className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Troubleshooting & Optimization:</span> Diagnosing performance bottlenecks, security vulnerabilities, and other technical issues, and recommending solutions.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Vendor & Solution Evaluation:</span> Providing unbiased assessments of third-party software, platforms, or service providers.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">How It Works</h2>
             <p>
               Our consulting engagements typically start with a discovery session to understand your specific needs and challenges. We then provide tailored recommendations, strategic advice, or hands-on support, depending on the scope of the engagement. We focus on practical, cost-effective solutions aligned with your business objectives.
             </p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-software" asChild>
                  <Link href="/contact?service=TechConsulting">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
