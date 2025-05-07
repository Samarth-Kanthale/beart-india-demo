
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Target, Briefcase, Server, Brain, TrendingUp, Users, FileText, Mail, Phone, MessageSquare, CircleCheckBig, HandCoins, CodeXml, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Beart India Group - Smart Investments & Digital Solutions',
  description: 'Empowering India with expert financial consultancy (Mutual Funds, Equity, PMS, AIF) and scalable digital solutions (Hosting, Google Workspace) for individuals and SMEs. Partnered with Aditya Birla Money.',
  keywords: ['Beart India Group', 'Financial Advisor India', 'Investment India', 'Software Solutions India', 'Mutual Funds', 'Equity Advisory', 'PMS', 'AIF', 'NRI Investments', 'SME Digital', 'Aditya Birla Money', 'Financial Planning', 'Wealth Management'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beart India Group - Your Partner for Financial & Digital Growth',
    description: 'Discover comprehensive investment advisory and digital services in India with Beart India Group.',
    url: '/',
    type: 'website',
  }
};


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 bg-cover bg-center animate-in fade-in duration-1000"
      >
        <Image
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Team collaborating on a project - Beart India Group Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          data-ai-hint="team collaboration"
        />
        {/* Overlay for text readability - Increased opacity */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content container */}
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white animate-in fade-in slide-in-from-top-8 duration-1000">
            Empowering India with Smart Investments & Scalable Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-top-10 duration-1000 delay-200">
            Expert financial consultancy and cutting-edge software services to help individuals and businesses grow confidently in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in zoom-in-90 duration-1000 delay-400">
             <Button size="lg" className="btn-investment transform transition-transform hover:scale-105" asChild>
              <Link href="/divisions/investment-solutions">
                Start Investing Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" className="btn-software transform transition-transform hover:scale-105" asChild>
               <Link href="/divisions/software-solutions">
                 Build Your Digital Presence <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gradient Separator */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-background via-secondary/50 to-card"></div>


       {/* Your Trusted Partner in Growth Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">Your Trusted Partner in Growth</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-200 duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <HandCoins className="h-6 w-6" />
                      Strategic Financial Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      We analyze your financial goals and risk appetite to create personalized investment strategies that align with your vision for the future.
                    </p>
                  </CardContent>
               </Card>

               <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-400 duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-[hsl(var(--accent-software))]">
                      <CodeXml className="h-6 w-6" /> 
                      Digital Transformation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      Our software solutions help businesses establish a strong online presence with reliable hosting, professional email services, and technical support.
                    </p>
                  </CardContent>
               </Card>

                <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-600 duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Award className="h-6 w-6" />
                      Industry Certified
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      Our team consists of certified professionals in finance and technology, ensuring you receive expert guidance and solutions tailored to your needs.
                    </p>
                  </CardContent>
               </Card>
             </div>
          </div>
        </section>


      {/* Our Divisions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">Our Divisions</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <Link href="/divisions/investment-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-200 duration-500">
                <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-[hsl(var(--accent-investment))]">
                      <TrendingUp className="h-6 w-6" />
                      Beart India Investment Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-muted-foreground text-sm mb-4">
                       Guiding you towards financial growth with expert advice and personalized strategies.
                     </p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      <li>Mutual Fund Planning</li>
                      <li>Equity Portfolio Advisory</li>
                      <li>NRI Investment Services</li>
                      <li>Wealth Building Workshops</li>
                    </ul>
                  </CardContent>
                   <div className="p-6 pt-0 mt-auto text-center">
                      <span className="text-sm font-medium text-[hsl(var(--accent-investment))]">
                        Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                      </span>
                   </div>
                </Card>
             </Link>

             <Link href="/divisions/software-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-400 duration-500">
                <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-[hsl(var(--accent-software))]">
                      <Server className="h-6 w-6" />
                      Beart India Software Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm mb-4">
                      Providing reliable and scalable digital infrastructure for your business needs.
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      <li>Website Hosting & Domain Registration</li>
                      <li>Google Workspace (Gmail for Business)</li>
                      <li>SME Digital Launch Pack</li>
                      <li>Technical Consulting</li>
                    </ul>
                  </CardContent>
                   <div className="p-6 pt-0 mt-auto text-center">
                      <span className="text-sm font-medium text-[hsl(var(--accent-software))]">
                        Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                      </span>
                   </div>
                </Card>
             </Link>

            <Link href="/divisions/beart-foundation" className="block rounded-lg animate-in fade-in zoom-in-95 delay-600 duration-500">
              <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <Heart className="h-6 w-6" />
                    Beart Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    Our non-profit initiative fostering mental well-being and supporting community upliftment through social causes.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                    <li>Mental Health & Counselling</li>
                    <li>Sports Promotion & Scholarships</li>
                    <li>Elderly Care Support</li>
                    <li>Community Outreach Programs</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto text-center">
                    <span className="text-sm font-medium text-primary">
                      Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                    </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

       {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">We Deliver Trust, Not Just Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-in fade-in zoom-in-95 delay-100 duration-500">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground text-sm">Guidance leading to informed investment decisions.</p>
            </div>
             <div className="text-center animate-in fade-in zoom-in-95 delay-200 duration-500">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Certified Partner</h3>
              <p className="text-muted-foreground text-sm">Proudly partnered with Aditya Birla Money.</p>
            </div>
             <div className="text-center animate-in fade-in zoom-in-95 delay-300 duration-500">
               <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
               <h3 className="text-lg font-semibold mb-2">Affordable Innovation</h3>
               <p className="text-muted-foreground text-sm">Best-in-class services at accessible prices.</p>
            </div>
             <div className="text-center animate-in fade-in zoom-in-95 delay-400 duration-500">
               <Users className="h-12 w-12 text-primary mx-auto mb-4" />
               <h3 className="text-lg font-semibold mb-2">Expert-Led Teams</h3>
               <p className="text-muted-foreground text-sm">Industry-certified professionals in finance and tech.</p>
            </div>
             <div className="text-center animate-in fade-in zoom-in-95 delay-500 duration-500">
               <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
               <h3 className="text-lg font-semibold mb-2">NRI Focus</h3>
               <p className="text-muted-foreground text-sm">Specialized services tailored to the global Indian.</p>
            </div>
             <div className="text-center animate-in fade-in zoom-in-95 delay-600 duration-500">
               <CircleCheckBig className="h-12 w-12 text-primary mx-auto mb-4" /> 
               <h3 className="text-lg font-semibold mb-2">Reliable Support</h3>
               <p className="text-muted-foreground text-sm">Dedicated assistance whenever you need it.</p>
            </div>
          </div>

          {/* Testimonials */}
          <h3 className="text-2xl font-semibold text-center mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-200 duration-500">
              <CardContent className="pt-6">
                 <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/id/237/50/50" alt="Nikhil Shah" data-ai-hint="person portrait" loading="lazy" />
                      <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="italic text-muted-foreground mb-2">"Beart India helped me start my mutual fund journey with confidence. Their support is phenomenal.”</p>
                      <p className="font-semibold text-sm">Nikhil Shah, Pune</p>
                    </div>
                 </div>
              </CardContent>
            </Card>
             <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-400 duration-500">
               <CardContent className="pt-6">
                 <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/id/238/50/50" alt="Rekha Iyer" data-ai-hint="business portrait" loading="lazy" />
                      <AvatarFallback>RI</AvatarFallback>
                    </Avatar>
                    <div>
                       <p className="italic text-muted-foreground mb-2">“Smooth onboarding, great uptime, and genuine advice—what else do you need from a software partner?”</p>
                       <p className="font-semibold text-sm">Rekha Iyer, Mumbai</p>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </section>


       {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">Let’s Build Your Future, Together</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            Whether you’re looking to grow your wealth or digitize your business, we’re here to guide you.
          </p>
           <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-90 duration-1000 delay-400">
             <Button size="lg" variant="default" asChild className="w-full max-w-xs transform transition-transform hover:scale-105">
               <Link href="/contact?service=Consultation"> 
                 <FileText className="mr-2 h-5 w-5" /> Schedule a Free Consultation
               </Link>
             </Button>

             <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Button size="lg" variant="outline" asChild className="btn-investment-outline transform transition-transform hover:scale-105">
                  <Link href="https://wa.me/91XXXXXXXXXX" target="_blank"> 
                     <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="transform transition-transform hover:scale-105">
                  <Link href="tel:+91XXXXXXXXXX"> 
                     <Phone className="mr-2 h-5 w-5" /> Call +91-XXXXXXXXXX
                  </Link>
                </Button>
                 <Button size="lg" variant="outline" asChild className="transform transition-transform hover:scale-105">
                   <Link href="mailto:hello@beartindia.com">
                     <Mail className="mr-2 h-5 w-5" /> Email: hello@beartindia.com
                   </Link>
                 </Button>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

