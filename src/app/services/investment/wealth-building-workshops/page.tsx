import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, CheckCircle, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function WealthBuildingWorkshopsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Users className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Wealth Building Workshops
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering individuals with the knowledge and skills needed to make informed investment decisions and build long-term financial security.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Financial literacy is the foundation of successful wealth building. Our workshops are designed to demystify the world of investments, equipping participants with practical knowledge and actionable strategies. Whether you are a beginner taking your first steps or an experienced investor looking to refine your approach, our sessions provide valuable insights.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Workshop Topics Include</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <BookOpen className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Investment Fundamentals:</span> Understanding different asset classes (equity, debt, gold, real estate), risk vs. return, and the power of compounding.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Mutual Funds Explained:</span> Types of mutual funds, how SIPs work, selecting the right funds, and common pitfalls to avoid.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Lightbulb className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Introduction to Stock Markets:</span> Basics of stock investing, understanding market indices, and fundamental vs. technical analysis overview.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Financial Planning Essentials:</span> Goal setting, budgeting, insurance planning, and integrating investments into a holistic financial plan.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Users className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Behavioral Finance:</span> Understanding how emotions impact investment decisions and strategies to overcome common biases.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Who Should Attend?</h2>
             <p>
               These workshops are beneficial for anyone looking to improve their financial knowledge and investment skills, including salaried professionals, business owners, students, homemakers, and NRIs. We offer sessions tailored to different experience levels.
             </p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-investment" asChild>
                  <Link href="/contact?interest=Workshops">
                    Inquire About Upcoming Workshops <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
