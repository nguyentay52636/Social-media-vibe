"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface StoryCardProps {
    id: string
    username: string
    avatar: string
    imageUrl: string
    viewed?: boolean
    isCreateStory?: boolean
    onClick?: () => void
}

export function StoryCard({
    id,
    username,
    avatar,
    imageUrl,
    viewed = false,
    isCreateStory = false,
    onClick,
}: StoryCardProps) {
    if (isCreateStory) {
        return (
            <div className="flex-shrink-0 cursor-pointer" onClick={onClick}>
                <div className="relative w-24 h-32 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Avatar className="h-12 w-12 mb-2">
                            <AvatarImage src={avatar || "/placeholder.svg"} alt={username} />
                            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-2 bg-primary rounded-full p-1">
                            <Plus className="h-4 w-4 text-white" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                        <p className="text-white text-xs font-medium text-center">Tạo Story</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-shrink-0 cursor-pointer" onClick={onClick}>
            <div className="relative w-24 h-32 rounded-xl overflow-hidden hover:scale-105 transition-transform">
                <img
                    src={imageUrl || "/placeholder.svg?height=128&width=96"}
                    alt={`${username}'s story`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                <Avatar className={cn("absolute top-2 left-2 h-8 w-8 ring-2", viewed ? "ring-gray-400" : "ring-primary")}>
                    <AvatarImage src={avatar || "/placeholder.svg"} alt={username} />
                    <AvatarFallback className="text-xs">{username.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-medium truncate">{username}</p>
                </div>
            </div>
        </div>
    )
}
