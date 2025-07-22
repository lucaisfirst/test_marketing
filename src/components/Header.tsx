import { Search, Plus, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Sidebar Toggle */}
        <SidebarTrigger />

        {/* Search */}
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="검색어를 입력하세요..."
              className="pl-8 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Create */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft"
              >
                <Plus className="h-4 w-4 mr-1" />
                빠른 생성
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <span>콘텐츠 생성</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>캠페인 생성</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>인플루언서 등록</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>매장 등록</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
            >
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <span>프로필</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>설정</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>로그아웃</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}