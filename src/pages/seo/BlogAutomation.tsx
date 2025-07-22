import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Search,
  Calendar,
  Target,
  CheckCircle2,
  AlertCircle,
  Eye
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function BlogAutomation() {
  const [keywords] = useState([
    { keyword: "AI 마케팅 자동화", difficulty: 67, ranking: 3, traffic: 2840, status: "published" },
    { keyword: "인플루언서 마케팅 ROI", difficulty: 54, ranking: 8, traffic: 1920, status: "writing" },
    { keyword: "B2B 콘텐츠 전략", difficulty: 72, ranking: 15, traffic: 890, status: "pending" },
    { keyword: "디지털 마케팅 트렌드", difficulty: 89, ranking: 0, traffic: 0, status: "research" },
    { keyword: "소셜미디어 자동화", difficulty: 45, ranking: 5, traffic: 1560, status: "published" }
  ]);

  const recentPosts = [
    {
      title: "AI 기반 마케팅 자동화의 미래",
      status: "published",
      ranking: 3,
      views: 2840,
      publishDate: "2024-01-20",
      performance: "excellent"
    },
    {
      title: "인플루언서 마케팅 ROI 극대화 전략",
      status: "scheduled",
      ranking: 0,
      views: 0,
      publishDate: "2024-01-25",
      performance: "pending"
    },
    {
      title: "B2B 기업을 위한 콘텐츠 마케팅 가이드",
      status: "draft",
      ranking: 0,
      views: 0,
      publishDate: "2024-01-30",
      performance: "pending"
    }
  ];

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 50) return "text-success";
    if (difficulty < 75) return "text-warning";
    return "text-destructive";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-success/10 text-success border-success/20";
      case "writing": return "bg-info/10 text-info border-info/20";
      case "pending": return "bg-warning/10 text-warning border-warning/20";
      case "research": return "bg-muted text-muted-foreground border-border";
      case "scheduled": return "bg-primary/10 text-primary border-primary/20";
      case "draft": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case "excellent": return <TrendingUp className="h-4 w-4 text-success" />;
      case "good": return <TrendingUp className="h-4 w-4 text-info" />;
      case "average": return <AlertCircle className="h-4 w-4 text-warning" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">블로그 자동화</h1>
            <p className="text-muted-foreground mt-1">
              AI 기반 SEO 블로그 작성 및 자동 배포 시스템
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              순위 리포트
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <FileText className="h-4 w-4 mr-1" />
              새 포스트 생성
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">총 포스트</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">상위 10위</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <Target className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">월간 트래픽</p>
                  <p className="text-2xl font-bold">12.4K</p>
                </div>
                <TrendingUp className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">평균 순위</p>
                  <p className="text-2xl font-bold">6.2</p>
                </div>
                <BarChart3 className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="keywords" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="keywords">키워드 관리</TabsTrigger>
            <TabsTrigger value="posts">포스트 현황</TabsTrigger>
            <TabsTrigger value="analytics">성과 분석</TabsTrigger>
          </TabsList>

          <TabsContent value="keywords" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Keyword List */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      키워드 목록
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {keywords.map((item, index) => (
                        <div key={index} className="p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{item.keyword}</h3>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status === "published" && "발행됨"}
                              {item.status === "writing" && "작성중"}
                              {item.status === "pending" && "대기"}
                              {item.status === "research" && "조사중"}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">난이도: </span>
                              <span className={getDifficultyColor(item.difficulty)}>
                                {item.difficulty}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">순위: </span>
                              <span className="font-medium">
                                {item.ranking > 0 ? `${item.ranking}위` : "-"}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">트래픽: </span>
                              <span className="font-medium">{item.traffic.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Keyword Analysis */}
              <div>
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      키워드 분석
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">새 키워드 추가</label>
                      <Input placeholder="키워드 입력" />
                      <Button className="w-full mt-2 bg-gradient-primary">
                        분석 시작
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-background rounded-lg border">
                        <div className="text-sm font-medium">평균 검색량</div>
                        <div className="text-xl font-bold text-primary">8,400</div>
                      </div>
                      <div className="p-3 bg-background rounded-lg border">
                        <div className="text-sm font-medium">경쟁 강도</div>
                        <div className="text-xl font-bold text-warning">중간</div>
                      </div>
                      <div className="p-3 bg-background rounded-lg border">
                        <div className="text-sm font-medium">예상 순위</div>
                        <div className="text-xl font-bold text-success">3-7위</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  최근 포스트
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{post.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.publishDate}
                            </div>
                            {post.status === "published" && (
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {post.views.toLocaleString()} 조회
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPerformanceIcon(post.performance)}
                          <Badge className={getStatusColor(post.status)}>
                            {post.status === "published" && "발행됨"}
                            {post.status === "scheduled" && "예약됨"}
                            {post.status === "draft" && "초안"}
                          </Badge>
                        </div>
                      </div>
                      
                      {post.status === "published" && (
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-muted-foreground">현재 순위:</span>
                            <span className="font-medium">{post.ranking}위</span>
                          </div>
                          <div className="flex-1">
                            <Progress value={Math.max(0, 100 - post.ranking * 10)} className="h-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>트래픽 추이</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    차트 영역 (Recharts 연동 예정)
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>순위 변화</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">AI 마케팅 자동화</span>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium">3위 (+2)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">소셜미디어 자동화</span>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium">5위 (+1)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">인플루언서 마케팅 ROI</span>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-warning" />
                        <span className="text-sm font-medium">8위 (-1)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}