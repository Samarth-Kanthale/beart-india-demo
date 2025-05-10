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

const emiCalculatorSchema = z.object({
  loanAmount: z.coerce
    .number()
    .min(1000, 'Minimum loan amount is ₹1,000')
    .max(100000000, 'Maximum loan amount is ₹10,00,00,000'), // 10 Crores
  annualInterestRate: z.coerce
    .number()
    .min(0.1, 'Rate must be at least 0.1%')
    .max(30, 'Rate cannot exceed 30%'),
  loanTenureYears: z.coerce
    .number()
    .min(1, 'Minimum tenure is 1 year')
    .max(30, 'Maximum tenure is 30 years'),
});

type EmiCalculatorFormValues = z.infer<typeof emiCalculatorSchema>;

interface EmiResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

export default function EmiCalculatorPage() {
  const [result, setResult] = useState<EmiResult | null>(null);

  const form = useForm<EmiCalculatorFormValues>({
    resolver: zodResolver(emiCalculatorSchema),
    defaultValues: {
      loanAmount: 5000000, // 50 Lakhs
      annualInterestRate: 8.5,
      loanTenureYears: 20,
    },
  });

  const calculateEmi = (values: EmiCalculatorFormValues) => {
    const P = values.loanAmount;
    const annualRate = values.annualInterestRate / 100;
    const r = annualRate / 12; // Monthly interest rate
    const n = values.loanTenureYears * 12; // Loan tenure in months

    if (r === 0) { 
      const emi = P / n;
      setResult({
        emi: Math.round(emi),
        totalInterest: 0,
        totalPayment: Math.round(P),
      });
      return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setResult({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
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
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">EMI Calculator</CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground">
            Estimate your Equated Monthly Installment (EMI) for a loan.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(calculateEmi)} className="space-y-6 py-4">
              <FormField
                control={form.control}
                name="loanAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="loanAmount">Loan Amount (₹)</FormLabel>
                    <FormControl>
                      <Input
                        id="loanAmount"
                        type="number"
                        placeholder="e.g., 5000000"
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
                name="annualInterestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="annualInterestRate">Annual Interest Rate (%)</FormLabel>
                    <FormControl>
                      <Input
                        id="annualInterestRate"
                        type="number"
                        step="0.01"
                        placeholder="e.g., 8.5"
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
                name="loanTenureYears"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="loanTenureYears">Loan Tenure (Years)</FormLabel>
                    <FormControl>
                      <Input
                        id="loanTenureYears"
                        type="number"
                        placeholder="e.g., 20"
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
                  Calculate EMI
                </Button>
              </div>
            </form>
          </Form>

          {result && (
            <div className="mt-8 p-6 border rounded-lg bg-secondary/50 shadow-md animate-in fade-in duration-500">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Estimated Loan Details
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Monthly EMI:</p>
                  <p className="text-lg font-bold text-primary">
                    ₹{result.emi.toLocaleString('en-IN')}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <p>Total Principal Amount:</p>
                  <p className="font-semibold text-foreground">
                    ₹{form.getValues('loanAmount').toLocaleString('en-IN')}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <p>Total Interest Payable:</p>
                  <p className="font-semibold text-primary">
                    ₹{result.totalInterest.toLocaleString('en-IN')}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Total Amount Payable:</p>
                  <p className="text-lg font-bold text-primary">
                    ₹{result.totalPayment.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Disclaimer: These calculations are illustrative and based on the inputs provided. Actual EMI may vary.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
