import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import SavedPostCard from './SavedPostCard'
import SavedArticleCard from './SavedArticleCard'
import { posts } from '@/lib/mock-data'


export default function TabsCategorySaved({ filteredPosts, filteredArticles, articles }: { filteredPosts: any[], filteredArticles: any[], articles: any[] }) {
    return (
        <div className="lg:col-span-3">
            <Tabs defaultValue="posts" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="posts">Bài viết ({posts.length})</TabsTrigger>
                    <TabsTrigger value="articles">Bài báo ({articles.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="space-y-4 animate-fade-in">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => <SavedPostCard key={post.id} post={post} />)
                    ) : (
                        <Card className="p-8 text-center">
                            <p className="text-muted-foreground">Không có bài viết đã lưu nào</p>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="articles" className="space-y-4 animate-fade-in">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => <SavedArticleCard key={article.id} article={article} />)
                    ) : (
                        <Card className="p-8 text-center">
                            <p className="text-muted-foreground">Không có bài báo đã lưu nào</p>
                        </Card>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}
