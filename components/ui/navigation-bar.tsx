'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Brain, Users, BarChart } from 'lucide-react';

export function NavigationBar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'AI Recommendations', icon: Brain },
    { href: '/influencers', label: 'Influencers', icon: Users },
    { href: '/campaigns', label: 'Campaigns', icon: BarChart },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              InfluenceAI
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary',
                  pathname === href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}