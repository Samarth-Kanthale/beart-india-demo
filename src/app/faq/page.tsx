import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Beart India Group',
  description: 'Find answers to frequently asked questions about Beart India Group\'s investment solutions, financial advisory, software services, and more.',
  keywords: ['Beart India Group FAQ', 'investment questions', 'financial advisory FAQ', 'software services FAQ', 'Aditya Birla Money sub-broker FAQ'],
  alternates: {
    canonical: '/faq',
  },
};


export default function FAQPage() {
  return (
    <div className="container mx-auto flex-grow flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-3xl w-full animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Frequently Asked Questions (FAQ)</CardTitle>
          <CardDescription className="animate-in fade-in slide-in-from-top-10 duration-700 delay-100">Find answers to common questions about Beart India Group.</CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <AccordionTrigger>What services does Beart India Group offer?</AccordionTrigger>
              <AccordionContent>
                Beart India Group offers a range of services including Investment Solutions (like Mutual Fund Planning, Equity Portfolio Advisory, NRI Services) and Software Solutions (like Website Hosting, Domain Registration, Google Workspace). We also plan to launch Beart Psychology soon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              <AccordionTrigger>Is Beart India Investment Solutions registered?</AccordionTrigger>
              <AccordionContent>
                Yes, Beart India Investment Solutions operates as a sub-broker of Aditya Birla Money Limited, a registered entity. All investment advice and transactions adhere to regulatory guidelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <AccordionTrigger>Who are the software solutions designed for?</AccordionTrigger>
              <AccordionContent>
                Our software solutions are primarily designed for individuals, small businesses (SMEs), and startups looking for reliable and affordable digital infrastructure like hosting, domains, and professional email.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-600">
              <AccordionTrigger>How can I contact Beart India Group?</AccordionTrigger>
              <AccordionContent>
                You can contact us via WhatsApp, phone call, or email. Visit our <a href="/contact" className="text-primary underline">Contact Page</a> for details and a contact form. You can also schedule a free consultation directly from the contact page or homepage.
              </AccordionContent>
            </AccordionItem>
             {/* Add more FAQ items here as needed */}
            <AccordionItem value="item-placeholder" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
              <AccordionTrigger>More questions coming soon...</AccordionTrigger>
              <AccordionContent>
                We are compiling more frequently asked questions. Please check back later or contact us directly if you have a specific query.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

