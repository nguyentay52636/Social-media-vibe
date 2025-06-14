"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "../types"
import { cn } from "@/lib/utils"

interface OnlineFriendsProps {
    friends: User[]
}

export function OnlineFriends({ friends }: OnlineFriendsProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-green-400" />
                    Bạn bè đang online
                </h3>
                <Link href="/friends" className="text-xs text-primary hover:text-primary/80 transition-colors">
                    Xem tất cả
                </Link>
            </div>
            <div className="space-y-2">
                {friends.map((friend) => (
                    <Link
                        key={friend.id}
                        href={`/profile/${friend.id}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-300 group"
                    >
                        <div className="relative">
                            <Avatar className="h-10 w-10 ring-2 ring-green-500/50 group-hover:ring-green-500 transition-all duration-300">
                                <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                                <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
                                    {friend.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full pulse-glow"></div>
                        </div>
                        <span className="text-sm font-medium truncate flex-1 group-hover:text-primary transition-colors">
                            {friend.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
} 