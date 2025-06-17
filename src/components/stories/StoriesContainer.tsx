"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

import type { Story } from "@/types"
import { currentUser, users } from "@/lib/mock-data"
import CreateStory from "./components/CreateStory"
import ListStory from "./components/ListStory"
import PaginationStories from "./components/PaginationStories"

interface StoriesContainerProps {
    stories: Story[]
}

export function StoriesContainer({ stories }: StoriesContainerProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextStories = () => {
        setCurrentIndex((prev) => Math.min(prev + 4, stories.length - 4))
    }

    const prevStories = () => {
        setCurrentIndex((prev) => Math.max(prev - 4, 0))
    }

    // Đảm bảo stories có đủ dữ liệu
    const enhancedStories = stories.map((story) => {
        // Nếu story không có user, tìm user từ userId
        if (!story.user && story.userId) {
            const user = users.find((u) => u.id === story.userId)
            return {
                ...story,
                user: user || {
                    id: story.userId,
                    name: `User ${story.userId}`,
                    email: `user${story.userId}@example.com`,
                    avatar: `/placeholder.svg?height=40&width=40&text=U${story.userId}`,
                },
            }
        }
        return story
    })

    const visibleStories = enhancedStories.slice(currentIndex, currentIndex + 4)

    return (
        <Card className="p-4 w-[900px]! flex justify-space-between items-center">
            <PaginationStories currentIndex={currentIndex} totalStories={stories.length} nextStories={nextStories} prevStories={prevStories} />
            <div className=" gap-2 flex justify-space-between space-x-4 overflow-x-auto pb-2">
                {/* Create Story */}
                <CreateStory onClick={() => { }} />

                {/* Stories */}
                {visibleStories.map((story) => (
                    <ListStory key={story.id} story={story} onClick={() => { }} />
                ))}
            </div>
        </Card>
    )
}
