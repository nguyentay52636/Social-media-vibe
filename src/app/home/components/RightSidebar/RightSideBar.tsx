"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { TrendingTopics } from '@/components/trending/TrendingTopic'

import { ChatWindow } from '@/components/chat/ChatWindown'
import { Message, User } from '@/types'
import { users } from '@/lib/mock-data'

// Mock FriendsList component
const FriendsList = ({ onStartChat, onCall }: { onStartChat: (user: User) => void, onCall: (user: User) => void }) => (
    <Card>
        <CardHeader className="pb-3">
            <CardTitle className="text-base">Bạn bè</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
            {users.slice(0, 5).map((user) => (
                <div
                    key={user.id}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-accent/50 p-3 rounded-xl transition-all duration-300 group"
                    onClick={() => onStartChat(user)}
                >
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="text-sm font-medium">{user.name}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
)

export default function RightSideBar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {

    const [selectedChatUser, setSelectedChatUser] = useState<User | null>(null)
    const [chatMessages, setChatMessages] = useState<Message[]>([])

    const handleStartChat = (user: User) => {
        setSelectedChatUser(user)
    }

    const handleSendMessage = (content: string) => {
        if (!selectedChatUser) return

        const newMessage: Message = {
            id: Date.now().toString(),
            senderId: "1", // Current user
            receiverId: selectedChatUser.id,
            content,
            createdAt: new Date().toISOString(),
            sender: {
                id: "1",
                name: "Current User",
                email: "current@example.com"
            }
        }
        setChatMessages(prev => [...prev, newMessage])
    }

    const handleCall = (user: User) => {
        console.log("Calling user:", user.name)
    }

    // Transform messages to match ChatWindow expected format
    const transformedMessages = chatMessages
        .filter((msg) =>
            (msg.senderId === selectedChatUser?.id && msg.receiverId === "1") ||
            (msg.senderId === "1" && msg.receiverId === selectedChatUser?.id)
        )
        .map((msg) => ({
            id: msg.id,
            content: msg.content,
            senderId: msg.senderId,
            sender: {
                name: msg.sender?.name || "Unknown User",
                avatar: msg.sender?.avatar
            },
            createdAt: msg.createdAt || new Date().toISOString()
        }))

    return (
        <div
            className={cn(
                "transition-all duration-500",
                sidebarCollapsed ? "xl:col-span-3 lg:col-span-2 hidden lg:block" : "lg:col-span-3 hidden lg:block",
            )}
        >
            {selectedChatUser ? (
                <div className="sticky top-24 space-y-4">
                    <Button variant="outline" onClick={() => setSelectedChatUser(null)} className="w-full h-10">
                        ← Quay lại
                    </Button>
                    <ChatWindow
                        user={selectedChatUser}
                        messages={transformedMessages}
                    />
                </div>
            ) : (
                <div className="sticky top-24 space-y-6">
                    {/* Trending Topics */}
                    <TrendingTopics />

                    {/* Recent Messages */}
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center justify-between">
                                <div className="flex items-center">
                                    <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                                    Tin nhắn gần đây
                                </div>
                                <Badge variant="secondary" className="bg-primary/20 text-primary">
                                    2
                                </Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {users.slice(0, 3).map((recentUser) => (
                                <div
                                    key={recentUser.id}
                                    className="flex items-center space-x-3 cursor-pointer hover:bg-accent/50 p-3 rounded-xl transition-all duration-300 group"
                                    onClick={() => handleStartChat(recentUser)}
                                >
                                    <div className="relative">
                                        <Avatar className="h-10 w-10 ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all">
                                            <AvatarImage src={recentUser.avatar || "/placeholder.svg"} alt={recentUser.name} />
                                            <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-sm">
                                                {recentUser.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        {recentUser.isOnline && (
                                            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-background rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate text-foreground group-hover:text-primary transition-colors">
                                            {recentUser.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate">Nhấn để bắt đầu trò chuyện</p>
                                    </div>
                                    {recentUser.isOnline && <div className="h-2 w-2 bg-green-500 rounded-full"></div>}
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Friends List */}
                    <FriendsList onStartChat={handleStartChat} onCall={handleCall} />
                </div>
            )}
        </div>
    )
}
