import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import React from 'react'
import type { Story } from '@/types'

interface ListStoryProps {
    story: Story
    onClick: () => void
}

export default function ListStory({ story, onClick }: ListStoryProps) {
    return (
        <div key={story.id} className="flex-shrink-0">
            <div className="relative w-28 h-35 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <img
                    src={story.image || "/placeholder.svg?height=128&width=96"}
                    alt={`${story.user?.name || "User"}'s story`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                <Avatar
                    className={cn(
                        "absolute top-2 left-2 h-8 w-8 ring-2",
                        story.isViewed ? "ring-gray-400" : "ring-primary",
                    )}
                >
                    <AvatarImage src={story.user?.avatar || "/placeholder.svg"} alt={story.user?.name || "User"} />
                    <AvatarFallback className="text-xs">{(story.user?.name || "U").charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-medium truncate">{story.user?.name || `User ${story.userId}`}</p>
                </div>
            </div>
        </div>
    )
}
