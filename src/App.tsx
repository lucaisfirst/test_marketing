import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeoOptimization from "./pages/seo/GeoOptimization";
import BlogAutomation from "./pages/seo/BlogAutomation";
import InfluencerSearch from "./pages/influencer/InfluencerSearch";
import ShortsPlanning from "./pages/content/ShortsPlanning";
import PlaceholderPage from "./pages/PlaceholderPage";
import { MessageSquare, Users, Building, Bot, FileText, BarChart3, Bell, Settings } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seo/geo" element={<GeoOptimization />} />
          <Route path="/seo/blog" element={<BlogAutomation />} />
          <Route path="/content/shorts" element={<ShortsPlanning />} />
          <Route path="/content/threads" element={<PlaceholderPage title="쓰레드 자동화" description="AI 기반 쓰레드 콘텐츠 자동 생성 및 배포" icon={<MessageSquare className="h-8 w-8 text-primary" />} />} />
          <Route path="/influencer/search" element={<InfluencerSearch />} />
          <Route path="/influencer/campaigns" element={<PlaceholderPage title="캠페인 관리" description="인플루언서 캠페인 통합 관리 시스템" icon={<Users className="h-8 w-8 text-primary" />} />} />
          <Route path="/influencer/outreach" element={<PlaceholderPage title="DM / 이메일 발송" description="자동화된 인플루언서 연락 시스템" icon={<MessageSquare className="h-8 w-8 text-primary" />} />} />
          <Route path="/b2b2c/locations" element={<PlaceholderPage title="병원(매장) 리스트" description="B2B2C 파트너 관리 시스템" icon={<Building className="h-8 w-8 text-primary" />} />} />
          <Route path="/b2b2c/matching" element={<PlaceholderPage title="자동 매칭 현황" description="AI 기반 자동 매칭 시스템" icon={<Bot className="h-8 w-8 text-primary" />} />} />
          <Route path="/b2b2c/reposting" element={<PlaceholderPage title="수집 콘텐츠 리포스팅" description="콘텐츠 자동 수집 및 재배포" icon={<FileText className="h-8 w-8 text-primary" />} />} />
          <Route path="/reports" element={<PlaceholderPage title="리포트" description="통합 성과 분석 리포트" icon={<BarChart3 className="h-8 w-8 text-primary" />} />} />
          <Route path="/notifications" element={<PlaceholderPage title="알림센터" description="실시간 알림 및 이벤트 관리" icon={<Bell className="h-8 w-8 text-primary" />} />} />
          <Route path="/settings" element={<PlaceholderPage title="설정" description="시스템 설정 및 사용자 관리" icon={<Settings className="h-8 w-8 text-primary" />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
