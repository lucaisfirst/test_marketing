import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: ReactNode;
  description?: string;
}

export function KPICard({ title, value, change, changeType, icon, description }: KPICardProps) {
  const isPositive = changeType === "increase";

  return (
    <Card className="relative overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="mr-1 h-3 w-3 text-success" />
          ) : (
            <TrendingDown className="mr-1 h-3 w-3 text-destructive" />
          )}
          <span className={cn(
            "font-medium",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className="text-muted-foreground ml-1">전일 대비</span>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}