"use client"
import CategoryTrending from './components/CategoryTrending'
import { trendingNews } from '@/lib/mock-data'
import { trendingPosts } from '@/lib/mock-data'
import TabsTrendingTopics from './components/TabsTrendingTopics'
import { trendingTopics } from '@/lib/mock-data'
import { useState } from 'react'

export default function TrendingPage() {
    const [selectedTab, setSelectedTab] = useState("topics")

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
                <header className="mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Xu hướng</h1>
                            <p className="text-muted-foreground text-sm md:text-base mt-1">
                                Khám phá những chủ đề và nội dung đang được quan tâm
                            </p>
                        </div>
                    </div>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                    <aside className="lg:col-span-1 order-2 lg:order-1">
                        <CategoryTrending trendingTopics={trendingTopics} />
                    </aside>
                    <section className="lg:col-span-2 order-1 lg:order-2" aria-label="Nội dung xu hướng">
                        <TabsTrendingTopics
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            trendingTopics={trendingTopics}
                            trendingPosts={trendingPosts}
                            trendingNews={trendingNews}
                        />
                    </section>
                </main>
            </div>
        </div>
    )
}
