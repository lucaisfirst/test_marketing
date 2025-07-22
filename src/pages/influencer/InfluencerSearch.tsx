import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Users, 
  Heart, 
  Eye, 
  MapPin,
  Star,
  Filter,
  UserPlus,
  BarChart3,
  Instagram,
  Youtube,
  MessageSquare
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function InfluencerSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "all",
    followers: "all",
    location: "all",
    engagement: "all"
  });

  const influencers = [
    {
      id: 1,
      name: "김뷰티",
      username: "@beauty_kim",
      platform: "instagram",
      followers: 125000,
      engagement: 4.8,
      category: "뷰티",
      location: "서울",
      avatar: "/api/placeholder/64/64",
      recentPosts: 12,
      avgViews: 15400,
      rating: 4.9,
      description: "뷰티 인플루언서, 스킨케어 전문",
      tags: ["스킨케어", "메이크업", "K뷰티"]
    },
    {
      id: 2,
      name: "박헬스",
      username: "@health_park",
      platform: "youtube",
      followers: 89000,
      engagement: 6.2,
      category: "헬스",
      location: "부산", 
      avatar: "/api/placeholder/64/64",
      recentPosts: 8,
      avgViews: 22100,
      rating: 4.7,
      description: "피트니스 트레이너, 홈트레이닝",
      tags: ["홈트", "다이어트", "근력운동"]
    },
    {
      id: 3,
      name: "이푸드",
      username: "@food_lee",
      platform: "instagram",
      followers: 67000,
      engagement: 5.4,
      category: "푸드",
      location: "대구",
      avatar: "/api/placeholder/64/64", 
      recentPosts: 15,
      avgViews: 8900,
      rating: 4.6,
      description: "맛집 리뷰어, 요리 콘텐츠",
      tags: ["맛집", "요리", "카페"]
    }
  ];

  const categories = ["전체", "뷰티", "헬스", "푸드", "패션", "라이프스타일", "테크"];
  const followerRanges = ["전체", "1만-10만", "10만-50만", "50만-100만", "100만+"];
  const locations = ["전체", "서울", "부산", "대구", "인천", "광주", "대전"];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram": return <Instagram className="h-4 w-4" />;
      case "youtube": return <Youtube className="h-4 w-4" />;
      case "tiktok": return <MessageSquare className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 5) return "text-success";
    if (engagement >= 3) return "text-warning";
    return "text-destructive";
  };

  const formatFollowers = (followers: number) => {
    if (followers >= 1000000) return `${(followers / 1000000).toFixed(1)}M`;
    if (followers >= 1000) return `${(followers / 1000).toFixed(1)}K`;
    return followers.toString();
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">인플루언서 찾기</h1>
            <p className="text-muted-foreground mt-1">
              AI 기반 인플루언서 검색 및 매칭 시스템
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              분석 리포트
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <UserPlus className="h-4 w-4 mr-1" />
              저장된 인플루언서
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  필터
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">검색어</label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="키워드, 해시태그..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">카테고리</label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedFilters.category === category ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                        onClick={() => setSelectedFilters({...selectedFilters, category})}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">팔로워 수</label>
                  <div className="space-y-2">
                    {followerRanges.map((range) => (
                      <Button
                        key={range}
                        variant={selectedFilters.followers === range ? "default" : "outline"}
                        size="sm"
                        className="w-full text-xs justify-start"
                        onClick={() => setSelectedFilters({...selectedFilters, followers: range})}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">지역</label>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant={selectedFilters.location === location ? "default" : "outline"}
                        size="sm"
                        className="w-full text-xs justify-start"
                        onClick={() => setSelectedFilters({...selectedFilters, location})}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    검색 결과 ({influencers.length})
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      정렬: 적합도순
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {influencers.map((influencer) => (
                    <div key={influencer.id} className="p-4 bg-background rounded-lg border hover:shadow-sm transition-all">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={influencer.avatar} />
                          <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{influencer.name}</h3>
                                {getPlatformIcon(influencer.platform)}
                                <span className="text-sm text-muted-foreground">{influencer.username}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{influencer.description}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{influencer.rating}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {influencer.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-muted-foreground" />
                              <span className="font-medium">{formatFollowers(influencer.followers)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3 text-muted-foreground" />
                              <span className={`font-medium ${getEngagementColor(influencer.engagement)}`}>
                                {influencer.engagement}%
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3 text-muted-foreground" />
                              <span className="font-medium">{influencer.avgViews.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <span className="font-medium">{influencer.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Badge variant="outline" className="text-xs">
                                {influencer.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button size="sm" className="bg-gradient-primary">
                            <UserPlus className="h-3 w-3 mr-1" />
                            저장
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            연락
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-6">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>이전</Button>
                    <Button variant="default" size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">다음</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}