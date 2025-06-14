"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "../types"
import { cn } from "@/lib/utils"

interface UserProfileProps {
    user: User
    collapsed: boolean
}

export function UserProfile({ user, collapsed }: UserProfileProps) {
    return (
        <Link
            href="/profile"
            className={cn(
                "flex items-center space-x-4 p-4 rounded-2xl hover:bg-accent/50 transition-all duration-300 group",
                collapsed && "justify-center space-x-0 p-3",
            )}
        >
            <div className="relative">
                <Avatar className="h-12 w-12 ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                        {user.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
            </div>
            {!collapsed && (
                <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold truncate text-foreground">{user.name}</p>
                    <p className="text-sm text-muted-foreground truncate">Xem trang cá nhân</p>
                </div>
            )}
        </Link>
    )
} 