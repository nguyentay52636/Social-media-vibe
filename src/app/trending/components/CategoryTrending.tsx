import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Card } from "@/components/ui/card";
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export default function CategoryTrending({ trendingTopics }: { trendingTopics: any[] }) {
    return (
        <div className="space-y-4 lg:space-y-6">
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Xu hướng theo thời gian</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" className="w-full">
                                <Clock className="mr-2 h-4 w-4" />
                                Hôm nay
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {trendingTopics.slice(0, 3).map((topic, index) => (
                                <div key={topic.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-muted-foreground">{index + 1}.</span>
                                        <span className="text-sm font-medium">{topic.name}</span>
                                    </div>
                                    <Badge variant="outline" className="text-green-600 text-xs">
                                        {topic.change}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Thống kê</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <span className="text-sm text-muted-foreground">Tổng bài viết hôm nay</span>
                            <span className="font-semibold text-sm">2,456</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <span className="text-sm text-muted-foreground">Chủ đề mới</span>
                            <span className="font-semibold text-sm">12</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <span className="text-sm text-muted-foreground">Tương tác</span>
                            <span className="font-semibold text-sm">45.2K</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <span className="text-sm text-muted-foreground">Người dùng hoạt động</span>
                            <span className="font-semibold text-sm">1,234</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}