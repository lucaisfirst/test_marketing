import { 
  Globe, 
  FileText, 
  Video, 
  Users, 
  Target, 
  Building,
  BarChart3,
  Activity,
  Calendar,
  MessageSquare
} from "lucide-react";
import { KPICard } from "@/components/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Dashboard() {
  const kpiData = [
    {
      title: "GEO 인용률",
      value: "89.3%",
      change: 12.3,
      changeType: "increase" as const,
      icon: <Globe className="h-4 w-4" />,
      description: "AI 검색 결과 인용"
    },
    {
      title: "블로그 상위노출률",
      value: "76.8%",
      change: 8.1,
      changeType: "increase" as const,
      icon: <FileText className="h-4 w-4" />,
      description: "상위 10위 키워드"
    },
    {
      title: "숏폼 1만+ 조회수",
      value: "58.5%",
      change: -2.3,
      changeType: "decrease" as const,
      icon: <Video className="h-4 w-4" />,
      description: "월간 콘텐츠 중"
    },
    {
      title: "인플루언서 캠페인 ROI",
      value: "340%",
      change: 23.7,
      changeType: "increase" as const,
      icon: <Users className="h-4 w-4" />,
      description: "평균 투자 수익률"
    },
    {
      title: "B2B2C 매칭 성공률",
      value: "92.1%",
      change: 5.8,
      changeType: "increase" as const,
      icon: <Target className="h-4 w-4" />,
      description: "병원-인플루언서 매칭"
    },
    {
      title: "쓰레드 인게이지먼트",
      value: "4.7%",
      change: 15.2,
      changeType: "increase" as const,
      icon: <MessageSquare className="h-4 w-4" />,
      description: "평균 상호작용률"
    }
  ];

  const recentActivities = [
    {
      type: "콘텐츠 업로드",
      message: "GEO 최적화 블로그 3건이 자동 발행되었습니다",
      time: "5분 전",
      status: "success"
    },
    {
      type: "캠페인 마감",
      message: "강남 피부과 인플루언서 캠페인이 내일 마감됩니다",
      time: "1시간 전", 
      status: "warning"
    },
    {
      type: "DM 응답",
      message: "인플루언서 @beauty_jane님이 제안에 수락했습니다",
      time: "2시간 전",
      status: "info"
    },
    {
      type: "매칭 완료",
      message: "압구정 치과와 3명의 인플루언서가 자동 매칭되었습니다",
      time: "3시간 전",
      status: "success"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-success/10 text-success border-success/20";
      case "warning": return "bg-warning/10 text-warning border-warning/20";
      case "info": return "bg-info/10 text-info border-info/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            홈 대시보드
          </h1>
          <p className="text-muted-foreground mt-1">
            AI 마케팅 자동화 플랫폼 현황을 한눈에 확인하세요
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-1" />
            기간 설정
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-1" />
            상세 리포트
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Pipeline */}
        <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              트래픽 파이프라인
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">SEO</span>
                <span className="text-xs text-muted-foreground">12.3K 유입</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">콘텐츠</span>
                <span className="text-xs text-muted-foreground">8.7K 조회</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">SNS</span>
                <span className="text-xs text-muted-foreground">5.2K 참여</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">전환</span>
                <span className="text-xs text-muted-foreground">1.8K 전환</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Activities */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              실시간 알림
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <Badge 
                  variant="outline" 
                  className={`text-xs px-2 py-1 ${getStatusColor(activity.status)}`}
                >
                  {activity.type}
                </Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    {activity.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-4">
              모든 알림 보기
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle>빠른 액션</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2 hover:bg-gradient-primary hover:text-primary-foreground transition-all"
            >
              <FileText className="h-6 w-6" />
              <span>콘텐츠 생성</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2 hover:bg-gradient-primary hover:text-primary-foreground transition-all"
            >
              <Users className="h-6 w-6" />
              <span>캠페인 생성</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2 hover:bg-gradient-primary hover:text-primary-foreground transition-all"
            >
              <Building className="h-6 w-6" />
              <span>매장 등록</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}