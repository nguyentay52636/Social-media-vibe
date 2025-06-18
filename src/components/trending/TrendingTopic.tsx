"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Hash } from "lucide-react"

const trendingTopics = [
    {
        id: "1",
        hashtag: "#ReactJS",
        posts: "12.5K",
        category: "Công nghệ",
        growth: "+15%",
    },
    {
        id: "2",
        hashtag: "#DuLich",
        posts: "8.2K",
        category: "Du lịch",
        growth: "+23%",
    },
    {
        id: "3",
        hashtag: "#AmThuc",
        posts: "6.8K",
        category: "Ẩm thực",
        growth: "+8%",
    },
    {
        id: "4",
        hashtag: "#Photography",
        posts: "15.1K",
        category: "Nghệ thuật",
        growth: "+12%",
    },
    {
        id: "5",
        hashtag: "#Fitness",
        posts: "9.3K",
        category: "Sức khỏe",
        growth: "+18%",
    },
]

export function TrendingTopics() {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Xu hướng
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                    <div
                        key={topic.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                                <Hash className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">{topic.hashtag}</p>
                                <p className="text-xs text-muted-foreground">
                                    {topic.posts} bài viết • {topic.category}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-medium text-green-600">{topic.growth}</div>
                            <div className="text-xs text-muted-foreground">#{index + 1}</div>
                        </div>
                    </div>
                ))}
                <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground text-center">Cập nhật mỗi giờ</p>
                </div>
            </CardContent>
        </Card>
    )
}
