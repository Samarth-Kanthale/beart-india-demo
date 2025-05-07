'use client'; // Mark component as client-side for useEffect

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from 'react';


export default function TermsOfServicePage() {
  // State to hold the current date string
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  // Effect to set the date only on the client-side after hydration
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto flex-grow flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-5xl w-full animate-in fade-in zoom-in-95 duration-500"> 
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
           <p className="text-muted-foreground leading-relaxed mb-4 text-center md:text-left">
             {currentDate ? `Last updated: ${currentDate}` : 'Loading date...'}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by Beart India Group ("us", "we", or "our").
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Accounts</h2>
           <p className="text-muted-foreground leading-relaxed mb-4">
             When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. [More details about accounts, intellectual property, links to other websites, termination, limitation of liability, governing law, changes, etc., will be added here].
           </p>
           {/* Add more sections as required */}
           <p className="text-muted-foreground leading-relaxed mt-6">
            This is a placeholder Terms of Service. Comprehensive terms governing the use of Beart India Group's services and website will be detailed here.
           </p>
        </CardContent>
      </Card>
    </div>
  );
}

