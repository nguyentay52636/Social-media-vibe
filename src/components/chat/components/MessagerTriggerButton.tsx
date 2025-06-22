"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

interface MessengerTriggerButtonProps {
    onClick: () => void
    unreadCount: number
    isActive: boolean
}

export function MessengerTriggerButton({ onClick, unreadCount, isActive }: MessengerTriggerButtonProps) {
    return (
        <Button
            variant="ghost"
            size="sm"
            className={`p-2 hover:bg-gray-700 relative transition-all duration-200 hover:scale-110 ${isActive ? "bg-gray-700 scale-105" : ""
                }`}
            onClick={onClick}
        >
            <MessageCircle
                className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-blue-400" : "text-white"}`}
            />
            {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full animate-pulse border-2 border-gray-800">
                    {unreadCount > 99 ? "99+" : unreadCount}
                </Badge>
            )}
        </Button>
    )
}
