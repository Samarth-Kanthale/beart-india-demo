import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EMI Calculator - Beart India Group',
  description: 'Estimate your Equated Monthly Installment (EMI) for home loans or education loans with Beart India Group\'s EMI calculator.',
  keywords: ['EMI calculator', 'loan calculator', 'home loan EMI', 'education loan EMI', 'Beart India tools'],
  alternates: {
    canonical: '/calculators/emi',
  },
};

export default function EmiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
