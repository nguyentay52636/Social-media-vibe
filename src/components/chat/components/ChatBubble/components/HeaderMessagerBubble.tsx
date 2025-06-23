import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Phone, Video, Info, Minus, X } from 'lucide-react'

interface HeaderMessagerBubbleProps {
    chat: {
        avatar: string
        name: string
        isOnline: boolean
        isTyping: boolean
        lastSeen: string
    }
    onMinimize: () => void
    onClose: () => void
}

export default function HeaderMessagerBubble({ chat, onMinimize, onClose }: HeaderMessagerBubbleProps) {
    return (
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-t-2xl">
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                        <AvatarFallback className="bg-gray-600 text-white text-xs">{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    {chat.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></div>
                    )}
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">{chat.name}</h3>
                    <p className="text-xs text-gray-200">
                        {chat.isTyping
                            ? "Đang nhập..."
                            : chat.isOnline
                                ? "Đang hoạt động"
                                : chat.lastSeen || "Hoạt động 2 giờ trước"}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="p-1 hover:bg-purple-800">
                    <Phone className="w-4 h-4 text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1 hover:bg-purple-800">
                    <Video className="w-4 h-4 text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1 hover:bg-purple-800">
                    <Info className="w-4 h-4 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1 hover:bg-purple-800" onClick={onMinimize}>
                    <Minus className="w-4 h-4 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1 hover:bg-purple-800" onClick={onClose}>
                    <X className="w-4 h-4 text-gray-400" />
                </Button>
            </div>
        </div>
    )
}
