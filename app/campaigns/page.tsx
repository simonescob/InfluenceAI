'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Calendar,
  Clock,
  DollarSign,
  PlusCircle,
  Target,
  Users,
} from 'lucide-react';

const campaigns = [
  {
    name: 'Summer Collection Launch',
    status: 'Active',
    budget: '$50,000',
    spent: '$32,450',
    progress: 65,
    influencers: 12,
    reach: '2.5M',
    endDate: '2024-08-15',
  },
  {
    name: 'Tech Product Review',
    status: 'Planning',
    budget: '$25,000',
    spent: '$0',
    progress: 0,
    influencers: 5,
    reach: '1.2M',
    endDate: '2024-09-01',
  },
  {
    name: 'Holiday Special',
    status: 'Draft',
    budget: '$75,000',
    spent: '$0',
    progress: 0,
    influencers: 20,
    reach: '4M',
    endDate: '2024-12-25',
  },
];

const stats = [
  {
    title: 'Active Campaigns',
    value: '4',
    icon: BarChart,
  },
  {
    title: 'Total Reach',
    value: '8.2M',
    icon: Target,
  },
  {
    title: 'Engaged Influencers',
    value: '45',
    icon: Users,
  },
  {
    title: 'Total Budget',
    value: '$150K',
    icon: DollarSign,
  },
];

export default function Campaigns() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Campaign Management</h1>
            <p className="text-muted-foreground">
              Track and manage your influencer marketing campaigns
            </p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="border rounded-lg p-4 hover:bg-accent transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">
                          {campaign.name}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : campaign.status === 'Planning'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {campaign.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-medium">{campaign.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Spent</p>
                          <p className="font-medium">{campaign.spent}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Influencers
                          </p>
                          <p className="font-medium">{campaign.influencers}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Reach</p>
                          <p className="font-medium">{campaign.reach}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{campaign.endDate}</span>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}