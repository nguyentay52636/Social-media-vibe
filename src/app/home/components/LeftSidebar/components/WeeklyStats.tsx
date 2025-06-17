import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { TrendingUp, Heart, MessageSquare, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function WeeklyStats() {
    return (
        <div className="">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        Thống kê tuần này
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10">
                        <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-muted-foreground">Lượt thích nhận được</span>
                        </div>
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 border-0 text-white">+24</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10">
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-muted-foreground">Bình luận mới</span>
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">+12</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                        <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">Bạn bè mới</span>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500 to-teal-500 border-0 text-white">+3</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
