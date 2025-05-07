'use client'; // Mark component as client-side for useEffect

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
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
          <CardTitle className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <p className="text-muted-foreground leading-relaxed mb-4 text-center md:text-left">
             {currentDate ? `Last updated: ${currentDate}` : 'Loading date...'}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beart India Group ("us", "we", or "our") operates the [Your Website URL] website (the "Service").
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Information Collection and Use</h2>
           <p className="text-muted-foreground leading-relaxed mb-4">
             We collect several different types of information for various purposes to provide and improve our Service to you. [Details about types of data collected, e.g., Personal Data, Usage Data, Tracking & Cookies Data will be added here].
           </p>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beart India Group uses the collected data for various purposes: [List purposes, e.g., To provide and maintain the Service, To notify you about changes, To provide customer care and support, etc.].
            </p>

          {/* Add more sections as required: Transfer Of Data, Disclosure Of Data, Security Of Data, Your Data Protection Rights, Service Providers, Links To Other Sites, Children's Privacy, Changes To This Privacy Policy, Contact Us */}

           <p className="text-muted-foreground leading-relaxed mt-6">
            This is a placeholder privacy policy. A comprehensive policy tailored to Beart India Group's specific data practices will be added here.
           </p>
        </CardContent>
      </Card>
    </div>
  );
}

