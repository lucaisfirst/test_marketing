import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useNavigate } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {icon}
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground text-lg">{description}</p>
              
              <div className="flex items-center justify-center gap-2 text-warning">
                <Construction className="h-5 w-5" />
                <span className="text-sm font-medium">개발 진행중</span>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold mb-3">곧 출시될 기능들:</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• AI 기반 자동화 도구</li>
                  <li>• 실시간 성과 분석</li>
                  <li>• 통합 대시보드</li>
                  <li>• 고급 리포팅</li>
                </ul>
              </div>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}