'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Brain, Target, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const recommendedInfluencers = [
  {
    name: 'Sarah Johnson',
    category: 'Lifestyle & Fashion',
    followers: '1.2M',
    engagement: '4.8%',
    match: '95%',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'Mike Chen',
    category: 'Tech & Gaming',
    followers: '850K',
    engagement: '5.2%',
    match: '92%',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Emma Davis',
    category: 'Health & Wellness',
    followers: '950K',
    engagement: '4.5%',
    match: '89%',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

export default function Home() {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI-Powered Influencer Recommendations</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get personalized influencer recommendations based on your campaign goals and requirements.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Campaign Preferences</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget Range</label>
                <Input
                  type="number"
                  placeholder="Enter your budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
            <Button className="w-full">
              <Brain className="mr-2 h-4 w-4" />
              Get AI Recommendations
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-6">Recommended Influencers</h2>
        <div className="grid gap-6">
          {recommendedInfluencers.map((influencer) => (
            <Card key={influencer.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{influencer.name}</h3>
                    <p className="text-muted-foreground">{influencer.category}</p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <Users className="h-4 w-4 text-muted-foreground mb-1" />
                        <p className="font-medium">{influencer.followers}</p>
                        <p className="text-sm text-muted-foreground">Followers</p>
                      </div>
                      <div>
                        <TrendingUp className="h-4 w-4 text-muted-foreground mb-1" />
                        <p className="font-medium">{influencer.engagement}</p>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                      </div>
                      <div>
                        <Target className="h-4 w-4 text-muted-foreground mb-1" />
                        <p className="font-medium">{influencer.match}</p>
                        <p className="text-sm text-muted-foreground">Match</p>
                      </div>
                    </div>
                  </div>
                  <Button>View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}