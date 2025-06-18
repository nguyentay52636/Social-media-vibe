"use client"

import { Card } from "@/components/ui/card"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { Story } from "@/types"
import { users } from "@/lib/mock-data"
import CreateStory from "./components/CreateStory"
import ListStory from "./components/ListStory"

interface StoriesContainerProps {
    stories: Story[]
}

export function StoriesContainer({ stories }: StoriesContainerProps) {
    // Đảm bảo stories có đủ dữ liệu
    const enhancedStories = stories.map((story) => {
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

    // Cấu hình slider
    const settings = {
        dots: false,
        infinite: enhancedStories.length > 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <Card className="p-4 ">
            <Slider {...settings} className="stories-slider flex items-center">
                {/* Create Story */}
                <div>
                    <CreateStory onClick={() => { }} />
                </div>
                {/* Stories */}
                {enhancedStories.map((story) => (
                    <div key={story.id}>
                        <ListStory story={story} onClick={() => { }} />
                    </div>
                ))}
            </Slider>
        </Card>
    )
}
