"use client"
import { useState } from "react"
import { posts, savedArticles } from "@/lib/mock-data"
import { formatDate } from "@/utils/utils" // Import formatDate function
import FIlterCategorySaved from "./components/FIlterCategorySaved"
import TabsCategorySaved from "./components/TabsCategorySaved"

// Mock saved data
const savedPosts = posts.map((post) => ({
    ...post,
    savedAt: "2024-06-01T10:30:00Z",
    category: ["Design", "Technology"][Math.floor(Math.random() * 2)],
}))



export default function SavedPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const categories = ["all", "Design", "Technology", "Business", "Health"]

    const filteredPosts = savedPosts.filter((post) => {
        const matchesSearch =
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const filteredArticles = savedArticles.filter((article) => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Đã lưu</h1>
                    <p className="text-muted-foreground">Quản lý các nội dung bạn đã lưu</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <FIlterCategorySaved
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />

                <TabsCategorySaved
                    articles={savedArticles}
                    filteredPosts={filteredPosts}
                    filteredArticles={filteredArticles}
                />
            </div>
        </div>
    )
}




