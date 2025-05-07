'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, MessageSquare, Phone, Mail } from 'lucide-react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactFormAction } from "@/app/actions/submit-contact"; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await submitContactFormAction(formData);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Sending Failed",
          description: result.error || "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto flex-grow flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
       <Card className="max-w-6xl w-full animate-in fade-in zoom-in-95 duration-500">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Contact Us</CardTitle>
            <CardDescription className="animate-in fade-in slide-in-from-top-10 duration-700 delay-100">We're here to help. Reach out through any of the methods below or fill out the form.</CardDescription>
          </CardHeader>
          <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center md:text-left">
                   <h3 className="text-xl font-semibold mb-4">Get in Touch Directly</h3>
                   <div className="space-y-4">
                     <Button size="lg" variant="outline" asChild className="w-full justify-center md:justify-start gap-2 transform transition-transform hover:scale-105">
                       <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" > {/* Replace XXXXXXXXXX */}
                         <MessageSquare className="h-5 w-5 text-[hsl(var(--accent-investment))]" /> WhatsApp Us
                       </Link>
                     </Button>
                     <Button size="lg" variant="outline" asChild className="w-full justify-center md:justify-start gap-2 transform transition-transform hover:scale-105">
                       <Link href="tel:+91XXXXXXXXXX"> {/* Replace XXXXXXXXXX */}
                         <Phone className="h-5 w-5" /> Call +91-XXXXXXXXXX
                       </Link>
                     </Button>
                     <Button size="lg" variant="outline" asChild className="w-full justify-center md:justify-start gap-2 transform transition-transform hover:scale-105">
                       <Link href="mailto:hello@beartindia.com">
                         <Mail className="h-5 w-5" /> Email: hello@beartindia.com
                       </Link>
                     </Button>
                     <Button size="lg" variant="default" className="w-full justify-center md:justify-start gap-2 transform transition-transform hover:scale-105" asChild>
                        <Link href="/contact?service=Consultation">
                            <FileText className="h-5 w-5" /> Schedule a Free Consultation
                        </Link>
                     </Button>
                   </div>
                </div>
                 <div className="text-center md:text-left">
                   <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                   <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only md:not-sr-only">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} disabled={isSubmitting} className="transition-shadow focus:shadow-md" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only md:not-sr-only">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} className="transition-shadow focus:shadow-md" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only md:not-sr-only">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Subject of your message" {...field} disabled={isSubmitting} className="transition-shadow focus:shadow-md" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only md:not-sr-only">Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="How can we help you?" rows={4} {...field} disabled={isSubmitting} className="transition-shadow focus:shadow-md" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full transform transition-transform hover:scale-105" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                 </div>
             </div>
          </CardContent>
       </Card>
    </div>
  );
}
