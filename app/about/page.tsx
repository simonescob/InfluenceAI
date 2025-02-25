import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Shield } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description:
      'Built with Next.js 13, featuring server components and the app directory structure.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description:
      'Styled with Tailwind CSS and shadcn/ui for a modern and consistent look.',
  },
  {
    icon: Shield,
    title: 'Best Practices',
    description:
      'Following industry standards for accessibility, performance, and security.',
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Our Platform</h1>
        <p className="text-lg text-muted-foreground">
          We're building the future of web applications with cutting-edge
          technology and beautiful design.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}