import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavigationBar } from '@/components/ui/navigation-bar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InfluenceAI - AI-Powered Influencer Marketing Platform',
  description: 'Connect with the perfect influencers for your brand using AI-driven recommendations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <main className="min-h-screen bg-background">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}