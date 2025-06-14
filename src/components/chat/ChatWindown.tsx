"use client"

import type React from "react"
import { Send, Phone, Video, MoreVertical, Smile, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface ChatWindowProps {
    user: {
        name: string
        avatar?: string
        isOnline?: boolean
        lastSeen?: string
    }
    messages: Array<{
        id: string
        content: string
        senderId: string
        sender: {
            name: string
            avatar?: string
        }
        createdAt: string
    }>
}

export function ChatWindow({ user, messages }: ChatWindowProps) {
    return (
        <Card className="h-[600px] flex flex-col glass-effect border-white/20">
            {/* Chat Header */}
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-3 border-b border-white/10">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Avatar className="h-10 w-10 ring-2 ring-primary/30">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white">
                                {user.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        {user.isOnline && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                        )}
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                            {user.isOnline
                                ? "Đang hoạt động"
                                : `Hoạt động ${user.lastSeen ? new Date(user.lastSeen).toLocaleString("vi-VN") : "lâu rồi"}`}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-green-600 hover:bg-green-500/20"
                    >
                        <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-600 hover:bg-blue-500/20"
                    >
                        <Video className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass-effect border-white/20">
                            <DropdownMenuItem className="hover:bg-white/10 rounded-lg m-1">Xem thông tin</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/10 rounded-lg m-1">Tắt thông báo</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-red-500/20 text-red-400 rounded-lg m-1">Chặn người dùng</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message, index) => {
                    const isOwn = message.senderId === "1" // Current user ID
                    const showAvatar = index === 0 || messages[index - 1].senderId !== message.senderId

                    return (
                        <div key={message.id} className={cn("flex items-end space-x-2", isOwn ? "justify-end" : "justify-start")}>
                            {!isOwn && showAvatar && (
                                <Avatar className="h-6 w-6 ring-2 ring-primary/20">
                                    <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs">
                                        {message.sender.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            )}
                            {!isOwn && !showAvatar && <div className="w-6" />}

                            <div
                                className={cn(
                                    "max-w-[70%] rounded-2xl px-4 py-2 animate-fade-in",
                                    isOwn
                                        ? "bg-gradient-to-r from-primary to-pink-500 text-white"
                                        : "glass-effect border-white/20 text-foreground"
                                )}
                            >
                                <p className="text-sm leading-relaxed">{message.content}</p>
                                <p
                                    className={cn(
                                        "text-xs mt-1 opacity-70",
                                        isOwn ? "text-white/70" : "text-muted-foreground",
                                    )}
                                >
                                    {new Date(message.createdAt).toLocaleTimeString("vi-VN", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                        <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 relative">
                        <Input
                            placeholder="Aa"
                            className="pr-20 glass-effect border-white/20"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-white/10">
                                <Smile className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <Button
                        size="icon"
                        className="h-8 w-8 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
