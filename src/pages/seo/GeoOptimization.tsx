import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Globe, Target, FileText, Sparkles, BarChart3, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function GeoOptimization() {
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");
  const [geoScore, setGeoScore] = useState(87);

  const optimizationRules = [
    { rule: "H1-H3 구조적 헤딩", status: "completed", score: 95 },
    { rule: "질문형 제목 구성", status: "completed", score: 92 },
    { rule: "단락 길이 최적화", status: "in-progress", score: 78 },
    { rule: "키워드 밀도 조정", status: "pending", score: 65 },
    { rule: "메타 데이터 최적화", status: "completed", score: 88 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success border-success/20";
      case "in-progress": return "bg-warning/10 text-warning border-warning/20";
      case "pending": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const generateContent = () => {
    // Simulate AI content generation
    const sampleContent = `# ${keyword}에 대한 완벽 가이드

${keyword}는 현대 비즈니스에서 핵심적인 역할을 담당합니다. 이 가이드에서는 ${keyword}의 모든 측면을 상세히 다뤄보겠습니다.

## ${keyword}란 무엇인가요?

${keyword}는 기업들이 디지털 환경에서 경쟁력을 확보하기 위해 반드시 이해해야 할 개념입니다. 전문가들은 ${keyword}를 통해 매출을 평균 340% 증가시킬 수 있다고 분석하고 있습니다.

## ${keyword}의 핵심 장점

1. **효율성 향상**: 기존 대비 85% 시간 단축
2. **비용 절감**: 운영비 67% 감소 효과
3. **품질 개선**: 고객 만족도 92% 향상

## ${keyword} 구현 전략

### 1단계: 현황 분석
현재 상황을 정확히 파악하는 것이 ${keyword} 성공의 첫걸음입니다.

### 2단계: 목표 설정
구체적이고 측정 가능한 목표를 설정해야 합니다.

### 3단계: 실행 계획
체계적인 실행 계획을 통해 ${keyword}의 효과를 극대화할 수 있습니다.`;

    setContent(sampleContent);
    setGeoScore(Math.floor(Math.random() * 20) + 80);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">GEO 최적화 콘텐츠</h1>
            <p className="text-muted-foreground mt-1">
              생성형 검색엔진에 최적화된 콘텐츠를 자동 생성합니다
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              성과 분석
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <FileText className="h-4 w-4 mr-1" />
              콘텐츠 내보내기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Content Generation */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI 콘텐츠 생성
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">타깃 키워드</label>
                  <Input
                    placeholder="예: AI 마케팅 자동화"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={generateContent}
                  disabled={!keyword}
                  className="w-full bg-gradient-primary"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  GEO 최적화 콘텐츠 생성
                </Button>

                {content && (
                  <div className="mt-6">
                    <label className="text-sm font-medium mb-2 block">생성된 콘텐츠</label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={12}
                      className="font-mono text-sm"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* GEO Score */}
            {content && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    GEO 최적화 점수
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl font-bold text-primary">{geoScore}</div>
                    <div className="flex-1">
                      <Progress value={geoScore} className="h-2" />
                      <p className="text-sm text-muted-foreground mt-1">
                        생성형 검색 최적화 점수
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-sm font-medium text-success">AI 인용 확률</div>
                      <div className="text-xl font-bold text-success">94%</div>
                    </div>
                    <div className="p-3 bg-info/10 rounded-lg border border-info/20">
                      <div className="text-sm font-medium text-info">예상 노출률</div>
                      <div className="text-xl font-bold text-info">76%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Optimization Rules */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  최적화 규칙
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {optimizationRules.map((rule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                    <div className="flex-1">
                      <div className="text-sm font-medium">{rule.rule}</div>
                      <div className="text-xs text-muted-foreground">점수: {rule.score}/100</div>
                    </div>
                    <Badge className={getStatusColor(rule.status)}>
                      {rule.status === "completed" && "완료"}
                      {rule.status === "in-progress" && "진행중"}
                      {rule.status === "pending" && "대기"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Publishing Options */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  발행 옵션
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Tabs defaultValue="blog" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="blog">블로그</TabsTrigger>
                    <TabsTrigger value="social">SNS</TabsTrigger>
                  </TabsList>
                  <TabsContent value="blog" className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      워드프레스
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      티스토리
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      노션
                    </Button>
                  </TabsContent>
                  <TabsContent value="social" className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      인스타그램
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      스레드
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      링크드인
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}