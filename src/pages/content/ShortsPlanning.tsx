import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  Sparkles, 
  Calendar, 
  BarChart3,
  Play,
  Download,
  Upload,
  Clock,
  Eye,
  Heart,
  Share2,
  TrendingUp
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ShortsPlanning() {
  const [keyword, setKeyword] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const templates = [
    { id: 1, name: "후킹형", description: "첫 3초 강력한 후킹", views: "평균 15K", category: "바이럴" },
    { id: 2, name: "정보형", description: "유용한 정보 전달", views: "평균 8K", category: "교육" },
    { id: 3, name: "감성형", description: "감정적 연결 유도", views: "평균 12K", category: "스토리" },
    { id: 4, name: "밈형", description: "트렌드 활용 유머", views: "평균 25K", category: "엔터테인먼트" },
    { id: 5, name: "전환형", description: "구매/행동 유도", views: "평균 6K", category: "마케팅" }
  ];

  const recentContents = [
    {
      id: 1,
      title: "AI 마케팅 3분 가이드",
      status: "uploaded",
      platform: ["youtube", "instagram", "tiktok"],
      views: 23400,
      engagement: 4.8,
      uploadDate: "2024-01-20"
    },
    {
      id: 2,
      title: "인플루언서 마케팅 ROI 극대화",
      status: "scheduled",
      platform: ["youtube", "instagram"],
      views: 0,
      engagement: 0,
      uploadDate: "2024-01-25"
    },
    {
      id: 3,
      title: "B2B 마케팅 트렌드 2024",
      status: "production",
      platform: ["youtube"],
      views: 0,
      engagement: 0,
      uploadDate: "2024-01-30"
    }
  ];

  const storyboard = [
    { scene: 1, time: "0-3초", action: "강력한 후킹", description: "\"마케팅 비용 90% 절약하는 방법\"" },
    { scene: 2, time: "3-10초", action: "문제 제시", description: "기존 마케팅의 한계점 설명" },
    { scene: 3, time: "10-20초", action: "솔루션 소개", description: "AI 자동화 도구 소개" },
    { scene: 4, time: "20-30초", action: "결과 공유", description: "실제 성과 데이터 제시" },
    { scene: 5, time: "30-40초", action: "CTA", description: "링크 클릭 유도" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "uploaded": return "bg-success/10 text-success border-success/20";
      case "scheduled": return "bg-info/10 text-info border-info/20";
      case "production": return "bg-warning/10 text-warning border-warning/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const generateScript = () => {
    // Simulate AI script generation
    const script = `[씬 1 - 후킹 (0-3초)]
🎯 "마케팅 비용 90% 절약하는 비밀 공개!"

[씬 2 - 문제 제시 (3-10초)]
❌ 기존 마케팅의 문제점:
- 높은 광고비
- 낮은 전환율  
- 시간 소모

[씬 3 - 솔루션 (10-25초)]
✅ AI 마케팅 자동화로:
- 타깃팅 정확도 95% 향상
- 콘텐츠 제작 시간 80% 단축
- ROI 340% 증가

[씬 4 - 결과 (25-35초)]
📊 실제 사례:
- A회사: 광고비 50% 절감
- B회사: 전환율 300% 증가

[씬 5 - CTA (35-40초)]
👆 링크 클릭해서 무료 체험하기!
#AI마케팅 #자동화 #ROI`;

    return script;
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">숏폼 기획·배포</h1>
            <p className="text-muted-foreground mt-1">
              AI 기반 숏폼 콘텐츠 기획 및 멀티 플랫폼 배포
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              성과 분석
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <Video className="h-4 w-4 mr-1" />
              새 콘텐츠 기획
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">총 콘텐츠</p>
                  <p className="text-2xl font-bold">84</p>
                </div>
                <Video className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">1만+ 조회수</p>
                  <p className="text-2xl font-bold">49</p>
                </div>
                <Eye className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">평균 ER</p>
                  <p className="text-2xl font-bold">5.8%</p>
                </div>
                <Heart className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">총 도달</p>
                  <p className="text-2xl font-bold">1.2M</p>
                </div>
                <TrendingUp className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="planning" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="planning">기획</TabsTrigger>
            <TabsTrigger value="templates">템플릿</TabsTrigger>
            <TabsTrigger value="schedule">스케줄</TabsTrigger>
            <TabsTrigger value="analytics">성과</TabsTrigger>
          </TabsList>

          <TabsContent value="planning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Content Planning */}
              <div className="space-y-6">
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      콘텐츠 기획
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">주제 키워드</label>
                      <Input
                        placeholder="예: AI 마케팅 자동화"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">템플릿 선택</label>
                      <div className="grid grid-cols-2 gap-2">
                        {templates.slice(0, 4).map((template) => (
                          <Button
                            key={template.id}
                            variant={selectedTemplate === template.name ? "default" : "outline"}
                            size="sm"
                            className="h-auto p-2 flex flex-col items-start"
                            onClick={() => setSelectedTemplate(template.name)}
                          >
                            <span className="font-medium text-xs">{template.name}</span>
                            <span className="text-xs text-muted-foreground">{template.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={generateScript}
                      disabled={!keyword || !selectedTemplate}
                      className="w-full bg-gradient-primary"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      스크립트 생성
                    </Button>
                  </CardContent>
                </Card>

                {/* Generated Script */}
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle>생성된 스크립트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="AI가 생성한 스크립트가 여기에 표시됩니다..."
                      value={keyword && selectedTemplate ? generateScript() : ""}
                      rows={10}
                      className="font-mono text-sm"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Storyboard */}
              <div className="space-y-6">
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-primary" />
                      스토리보드
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {storyboard.map((scene, index) => (
                        <div key={index} className="p-3 bg-background rounded-lg border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                                {scene.scene}
                              </div>
                              <span className="text-sm font-medium">{scene.action}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {scene.time}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{scene.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Publishing Options */}
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary" />
                      배포 설정
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">플랫폼 선택</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">YouTube Shorts</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          <span className="text-sm">Instagram Reels</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">TikTok</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">배포 시간</label>
                      <Input type="datetime-local" />
                    </div>

                    <Button className="w-full bg-gradient-primary">
                      <Calendar className="h-4 w-4 mr-2" />
                      예약 배포
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle>템플릿 라이브러리</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <div key={template.id} className="p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">{template.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{template.views}</span>
                        <Button size="sm" variant="outline">사용하기</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle>배포 스케줄</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContents.map((content) => (
                    <div key={content.id} className="p-4 bg-background rounded-lg border">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{content.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {content.uploadDate}
                            </div>
                            {content.status === "uploaded" && (
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {content.views.toLocaleString()}
                              </div>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusColor(content.status)}>
                          {content.status === "uploaded" && "업로드됨"}
                          {content.status === "scheduled" && "예약됨"}
                          {content.status === "production" && "제작중"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        {content.platform.map((platform, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
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
                  <CardTitle>성과 트렌드</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    차트 영역 (성과 데이터 시각화)
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>인기 콘텐츠</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">AI 마케팅 3분 가이드</span>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">23.4K</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">ROI 극대화 전략</span>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">18.7K</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background rounded border">
                      <span className="text-sm">B2B 마케팅 트렌드</span>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">15.2K</span>
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