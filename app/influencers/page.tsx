'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Instagram,
  Youtube,
  Twitter,
  Search,
  MapPin,
  Users,
  Star,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const influencers = [
  {
    name: 'Alex Rivera',
    location: 'Los Angeles, CA',
    category: 'Lifestyle & Travel',
    followers: '2.5M',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    platforms: ['instagram', 'youtube'],
  },
  {
    name: 'Lisa Chen',
    location: 'New York, NY',
    category: 'Fashion & Beauty',
    followers: '1.8M',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    platforms: ['instagram', 'twitter'],
  },
  {
    name: 'James Wilson',
    location: 'London, UK',
    category: 'Technology',
    followers: '980K',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    platforms: ['youtube', 'twitter'],
  },
];

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function Influencers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Influencer Directory</h1>
            <p className="text-muted-foreground">
              Browse and connect with top influencers across various niches
            </p>
          </div>
          <Button>Add to Campaign</Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-8" placeholder="Search influencers..." />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Followers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100k">100K+</SelectItem>
                  <SelectItem value="500k">500K+</SelectItem>
                  <SelectItem value="1m">1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {influencers.map((influencer) => (
            <Card key={influencer.name}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold">{influencer.name}</h3>
                      <div className="flex gap-2">
                        {influencer.platforms.map((platform) => {
                          const Icon = platformIcons[platform];
                          return (
                            <Icon
                              key={platform}
                              className="h-4 w-4 text-muted-foreground"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{influencer.location}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{influencer.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Followers</p>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span className="font-medium">{influencer.followers}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-medium">{influencer.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>View Profile</Button>
                    <Button variant="outline">Quick Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}