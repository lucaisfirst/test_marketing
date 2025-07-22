import { 
  Home, 
  Search, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Settings,
  Globe,
  Video,
  Bot,
  Building,
  FileText,
  Bell
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "홈 대시보드",
    url: "/",
    icon: Home,
  },
];

const seoItems = [
  {
    title: "GEO 최적화 콘텐츠",
    url: "/seo/geo",
    icon: Globe,
  },
  {
    title: "블로그 자동 작성·배포",
    url: "/seo/blog",
    icon: FileText,
  },
];

const contentItems = [
  {
    title: "숏폼 기획·배포",
    url: "/content/shorts",
    icon: Video,
  },
  {
    title: "쓰레드 자동화",
    url: "/content/threads",
    icon: MessageSquare,
  },
];

const influencerItems = [
  {
    title: "인플루언서 찾기",
    url: "/influencer/search",
    icon: Search,
  },
  {
    title: "캠페인 관리",
    url: "/influencer/campaigns",
    icon: Users,
  },
  {
    title: "DM / 이메일 발송",
    url: "/influencer/outreach",
    icon: MessageSquare,
  },
];

const b2b2cItems = [
  {
    title: "병원(매장) 리스트",
    url: "/b2b2c/locations",
    icon: Building,
  },
  {
    title: "자동 매칭 현황",
    url: "/b2b2c/matching",
    icon: Bot,
  },
  {
    title: "수집 콘텐츠 리포스팅",
    url: "/b2b2c/reposting",
    icon: FileText,
  },
];

const bottomItems = [
  {
    title: "리포트",
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "알림센터",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "설정",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavClass = (path: string) => {
    return isActive(path) 
      ? "bg-gradient-primary text-primary-foreground shadow-soft font-medium" 
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200";
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="bg-gradient-secondary">
        {/* Brand */}
        <div className="p-4 border-b border-border">
          {!collapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                AI 마케팅
              </span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="border-t border-border my-2" />

        {/* SEO 자동화 */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-muted-foreground font-semibold">SEO 자동화</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {seoItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 숏폼 & 쓰레드 */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-muted-foreground font-semibold">숏폼 & 쓰레드</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 인플루언서 */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-muted-foreground font-semibold">인플루언서</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {influencerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* B2B2C 협업 */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-muted-foreground font-semibold">B2B2C 협업</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {b2b2cItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="border-t border-border my-2" />

        {/* Bottom Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}