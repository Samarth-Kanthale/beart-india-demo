'use client';

import type * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// Metadata will be handled by layout.tsx

const sipCalculatorSchema = z.object({
  monthlyInvestment: z.coerce
    .number()
    .min(100, 'Minimum investment is ₹100')
    .max(10000000, 'Maximum investment is ₹1,00,00,000'),
  annualRate: z.coerce
    .number()
    .min(0.1, 'Rate must be at least 0.1%')
    .max(50, 'Rate cannot exceed 50%'),
  years: z.coerce
    .number()
    .min(1, 'Minimum duration is 1 year')
    .max(50, 'Maximum duration is 50 years'),
});

type SipCalculatorFormValues = z.infer<typeof sipCalculatorSchema>;

interface SipResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
}

export default function SipCalculatorPage() {
  const [result, setResult] = useState<SipResult | null>(null);

  const form = useForm<SipCalculatorFormValues>({
    resolver: zodResolver(sipCalculatorSchema),
    defaultValues: {
      monthlyInvestment: 5000,
      annualRate: 12,
      years: 10,
    },
  });

  const calculateSip = (values: SipCalculatorFormValues) => {
    const P = values.monthlyInvestment;
    const annualRate = values.annualRate / 100;
    const i = annualRate / 12; // Monthly interest rate
    const n = values.years * 12; // Number of months

    // M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const totalValue = P * ( (Math.pow(1 + i, n) - 1) / i ) * (1 + i);
    const investedAmount = P * n;
    const estimatedReturns = totalValue - investedAmount;

    setResult({
      investedAmount: Math.round(investedAmount),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(totalValue),
    });
  };

  const handleReset = () => {
    form.reset();
    setResult(null);
  }

  return (
    <div className="container mx-auto flex-grow py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">SIP Calculator</CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground">
            Estimate the future value of your Systematic Investment Plan (SIP).
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(calculateSip)} className="space-y-6 py-4">
              <FormField
                control={form.control}
                name="monthlyInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="monthlyInvestment">Monthly Investment (₹)</FormLabel>
                    <FormControl>
                      <Input
                        id="monthlyInvestment"
                        type="number"
                        placeholder="e.g., 5000"
                        {...field}
                        className="transition-shadow focus:shadow-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="annualRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="annualRate">Expected Annual Return Rate (%)</FormLabel>
                    <FormControl>
                      <Input
                        id="annualRate"
                        type="number"
                        step="0.1"
                        placeholder="e.g., 12"
                        {...field}
                        className="transition-shadow focus:shadow-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="years"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="years">Investment Duration (Years)</FormLabel>
                    <FormControl>
                      <Input
                        id="years"
                        type="number"
                        placeholder="e.g., 10"
                        {...field}
                        className="transition-shadow focus:shadow-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-2 justify-end pt-4">
                <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto">
                  Reset
                </Button>
                <Button type="submit" className="w-full sm:w-auto btn-cta-custom">
                  Calculate
                </Button>
              </div>
            </form>
          </Form>

          {result && (
            <div className="mt-8 p-6 border rounded-lg bg-secondary/50 shadow-md animate-in fade-in duration-500">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Estimated Results
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center">
                  <p>Total Amount Invested:</p>
                  <p className="font-semibold text-foreground">
                    ₹{result.investedAmount.toLocaleString('en-IN')}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <p>Estimated Returns:</p>
                  <p className="font-semibold text-primary">
                    ₹{result.estimatedReturns.toLocaleString('en-IN')}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total Future Value:</p>
                  <p className="text-lg font-bold text-primary">
                    ₹{result.totalValue.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Disclaimer: These calculations are illustrative and based on the inputs provided. Actual returns may vary. Mutual fund investments are subject to market risks.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
