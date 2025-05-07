import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle, Video, Cloud, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function GoogleWorkspacePage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Mail className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Google Workspace (Gmail for Business)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empower your team with professional email, online storage, shared calendars, video meetings, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Project a professional image and boost collaboration with Google Workspace (formerly G Suite). Get everything your team needs to communicate, create, and collaborate effectively, all in one place. Beart India helps you set up, manage, and optimize Google Workspace for your business.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Core Features & Benefits</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Professional Email:</span> Get custom email addresses using your domain name (e.g., you@yourcompany.com) powered by Gmail's familiar interface and security.</span>
              </li>
              <li className="flex items-start gap-2">
                <Cloud className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Cloud Storage:</span> Ample storage per user with Google Drive for secure file storage, sharing, and real-time collaboration on Docs, Sheets, and Slides.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Video className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Video Conferencing:</span> Host secure and reliable video meetings with Google Meet, accessible from any device.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Users className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Shared Calendars:</span> Easily schedule meetings, set reminders, and share calendars with your team using Google Calendar.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Security & Admin Controls:</span> Robust security features, data loss prevention, and centralized administration console for managing users and devices.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Use Google Workspace?</h2>
             <ul className="space-y-2 list-disc list-inside">
                 <li>Enhances brand credibility with professional email addresses.</li>
                 <li>Improves team communication and collaboration efficiency.</li>
                 <li>Secure and reliable cloud-based infrastructure.</li>
                 <li>Access your work from anywhere, on any device.</li>
                 <li>Scalable plans to fit businesses of all sizes.</li>
             </ul>

              <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Role</h2>
             <p>
               Beart India assists with the initial setup, domain verification, user migration (if applicable), and ongoing management of your Google Workspace account, ensuring a smooth transition and optimal utilization of its features.
             </p>


             <div className="text-center !mt-12">
               <Button size="lg" className="btn-software" asChild>
                  <Link href="/contact?service=GoogleWorkspace">
                    Get Started with Google Workspace <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
