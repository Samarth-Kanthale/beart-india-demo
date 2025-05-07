'use client'; // Mark component as client-side for useEffect

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from 'react';


export default function DisclaimerPage() {
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
          <CardTitle className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <p className="text-muted-foreground leading-relaxed mb-4 text-center md:text-left">
             {currentDate ? `Last updated: ${currentDate}` : 'Loading date...'}
          </p>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Investment Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The information provided on this website by Beart India Group is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
             <p className="text-muted-foreground leading-relaxed mb-4">
               Investment in the securities market is subject to market risks. Read all the related documents carefully before investing. Beart India Group is a sub-broker of Aditya Birla Money Limited. Past performance is not indicative of future results. Financial planning and investment advice are personalized and depend on individual circumstances.
             </p>

           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">External Links Disclaimer</h2>
           <p className="text-muted-foreground leading-relaxed mb-4">
             The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
           </p>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Professional Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The financial information on this site is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice other than through our registered advisory services. The use or reliance of any information contained on this site is solely at your own risk.
            </p>
           {/* Add more sections as required, e.g., Errors and Omissions, Fair Use, Views Expressed, No Responsibility, etc. */}

            <p className="text-muted-foreground leading-relaxed mt-6">
                This is a placeholder disclaimer. A detailed disclaimer covering all aspects of Beart India Group's operations will be provided.
           </p>
        </CardContent>
      </Card>
    </div>
  );
}

