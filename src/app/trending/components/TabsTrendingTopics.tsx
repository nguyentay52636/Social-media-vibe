import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Button } from '@/components/ui/button'
import { BarChart3, Clock, TrendingUp, Share2, Bookmark, Heart, MessageCircle, FireExtinguisher } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDate, formatNumber } from '@/utils/utils'

export default function TabsTrendingTopics({ selectedTab, setSelectedTab, trendingTopics, trendingPosts, trendingNews }: { selectedTab: string, setSelectedTab: (tab: string) => void, trendingTopics: any[], trendingPosts: any[], trendingNews: any[] }) {
    return (
        <div>
            <Tabs defaultValue="topics" className="w-full" onValueChange={setSelectedTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4 lg:mb-6">
                    <TabsTrigger value="topics" className="text-xs lg:text-sm">
                        <TrendingUp className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                        <span className="hidden sm:inline">Chủ đề</span>
                        <span className="sm:hidden">Chủ đề</span>
                    </TabsTrigger>
                    <TabsTrigger value="posts" className="text-xs lg:text-sm">
                        <FireExtinguisher className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                        <span className="hidden sm:inline">Bài viết</span>
                        <span className="sm:hidden">Bài viết</span>
                    </TabsTrigger>
                    <TabsTrigger value="news" className="text-xs lg:text-sm">
                        <BarChart3 className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                        <span className="hidden sm:inline">Tin tức</span>
                        <span className="sm:hidden">Tin tức</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="topics" className="animate-fade-in">
                    <Card className="shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Chủ đề thịnh hành</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {trendingTopics.map((topic, index) => (
                                    <div key={topic.id} className="flex items-center justify-between p-3 border-b last:border-0 hover:bg-muted/50 transition-colors rounded-lg">
                                        <div className="flex items-center space-x-3 lg:space-x-4">
                                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                                                {topic.rank}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-sm lg:text-base truncate">{topic.name}</p>
                                                <p className="text-xs lg:text-sm text-muted-foreground">{formatNumber(topic.count)} bài viết</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Badge variant="outline" className="text-green-600 text-xs">
                                                {topic.change}
                                            </Badge>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="posts" className="space-y-3 lg:space-y-4 animate-fade-in">
                    {trendingPosts.map((post) => (
                        <Card key={post.id} className="shadow-sm">
                            <CardContent className="p-3 lg:p-4">
                                <div className="flex items-start space-x-3">
                                    <Avatar className="h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0">
                                        <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                                        <AvatarFallback className="text-xs">{post.user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-sm truncate">{post.user.name}</p>
                                                <p className="text-xs text-muted-foreground">{formatDate(post.createdAt)}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                                                <Bookmark className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="text-sm mt-2 line-clamp-3">{post.content}</p>
                                        {post.image && (
                                            <div className="mt-3">
                                                <img
                                                    src={post.image || "/placeholder.svg"}
                                                    alt="Post image"
                                                    className="w-full rounded-md max-h-48 object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex flex-wrap gap-1 lg:gap-2 mt-3">
                                            {post.topics.slice(0, 3).map((topic: any) => (
                                                <Badge key={topic} variant="secondary" className="text-xs">
                                                    {topic}
                                                </Badge>
                                            ))}
                                            {post.topics.length > 3 && (
                                                <Badge variant="secondary" className="text-xs">
                                                    +{post.topics.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mt-4 pt-3 border-t">
                                            <Button variant="ghost" size="sm" className="text-red-600 h-8 text-xs">
                                                <Heart className="mr-1 h-3 w-3" />
                                                {formatNumber(post.likes)}
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                                                <MessageCircle className="mr-1 h-3 w-3" />
                                                {formatNumber(post.comments)}
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                                                <Share2 className="mr-1 h-3 w-3" />
                                                {formatNumber(post.shares)}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="news" className="space-y-3 lg:space-y-4 animate-fade-in">
                    {trendingNews.map((news) => (
                        <Card key={news.id} className="overflow-hidden shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                                <div className="sm:col-span-1">
                                    <img
                                        src={news.image || "/placeholder.svg"}
                                        alt={news.title}
                                        className="w-full h-32 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                    />
                                </div>
                                <div className="sm:col-span-2 p-3 lg:p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Badge className="text-xs">{news.category}</Badge>
                                        <span className="text-xs text-muted-foreground">{news.readTime}</span>
                                    </div>
                                    <h3 className="font-semibold text-base lg:text-lg line-clamp-2 mb-2">{news.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{news.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2 min-w-0">
                                            <span className="text-xs font-medium truncate">{news.source}</span>
                                            <span className="text-xs text-muted-foreground">•</span>
                                            <span className="text-xs text-muted-foreground">{formatDate(news.publishedAt)}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 flex-shrink-0">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Bookmark className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )
}

