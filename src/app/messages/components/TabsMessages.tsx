import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Check, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface Participant {
    id: string
    name: string
    avatar?: string
}

interface Message {
    id: string
    content: string
    type: string
    senderId: string
    isRead: boolean
}

interface Conversation {
    id: string
    participants: Participant[]
    lastMessage: Message
    unreadCount: number
    isOnline: boolean
    isPinned: boolean
    isTyping: boolean
    updatedAt: string
}

interface TabsMessagesProps {
    currentUser: {
        id: string
        name: string
    }
    conversations: Conversation[]
}

export default function TabsMessages({ currentUser, conversations = [] }: TabsMessagesProps) {
    const [activeTab, setActiveTab] = useState("all")
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)

    const filteredConversations = (conversations || []).filter((conversation) => {
        switch (activeTab) {
            case "unread":
                return conversation.unreadCount > 0
            case "pinned":
                return conversation.isPinned
            case "archived":
                return false // Implement archived logic if needed
            default:
                return true
        }
    })

    const formatTime = (date: string) => {
        const now = new Date()
        const messageDate = new Date(date)
        const diffInHours = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60 * 60))

        if (diffInHours < 24) {
            return `${diffInHours} giờ trước`
        } else {
            return messageDate.toLocaleDateString()
        }
    }

    return (
        <>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList className="grid w-full grid-cols-4 m-4 glass-effect">
                    <TabsTrigger value="all">Tất cả</TabsTrigger>
                    <TabsTrigger value="unread">Chưa đọc</TabsTrigger>
                    <TabsTrigger value="pinned">Đã ghim</TabsTrigger>
                    <TabsTrigger value="archived">Lưu trữ</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="flex-1 m-0">
                    <ScrollArea className="h-full">
                        <div className="space-y-2 p-4">
                            {filteredConversations.map((conversation) => {
                                const otherParticipant = conversation.participants.find((p) => p.id !== currentUser.id)
                                const isSelected = selectedConversation?.id === conversation.id

                                return (
                                    <div
                                        key={conversation.id}
                                        className={cn(
                                            "flex items-center space-x-3 p-4 rounded-2xl cursor-pointer transition-all duration-300 group",
                                            isSelected
                                                ? "bg-gradient-to-r from-primary/20 to-pink-500/20 border border-primary/30"
                                                : "hover:bg-white/10",
                                        )}
                                        onClick={() => setSelectedConversation(conversation)}
                                    >
                                        <div className="relative">
                                            <Avatar className="h-14 w-14 ring-2 ring-primary/30">
                                                <AvatarImage
                                                    src={otherParticipant?.avatar || "/placeholder.svg"}
                                                    alt={otherParticipant?.name}
                                                />
                                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                                    {otherParticipant?.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            {conversation.isOnline && (
                                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                                            )}
                                            {conversation.isPinned && (
                                                <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-500 border-2 border-background rounded-full flex items-center justify-center">
                                                    <Star className="h-2 w-2 text-white" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold text-foreground truncate">{otherParticipant?.name}</p>
                                                <div className="flex items-center space-x-2">
                                                    {conversation.unreadCount > 0 && (
                                                        <Badge className="bg-gradient-to-r from-primary to-pink-500 border-0 text-white">
                                                            {conversation.unreadCount}
                                                        </Badge>
                                                    )}
                                                    <span className="text-xs text-muted-foreground">{formatTime(conversation.updatedAt)}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-1">
                                                <p
                                                    className={cn(
                                                        "text-sm truncate",
                                                        conversation.unreadCount > 0 ? "text-foreground font-medium" : "text-muted-foreground",
                                                    )}
                                                >
                                                    {conversation.isTyping ? (
                                                        <span className="text-primary italic">Đang nhập...</span>
                                                    ) : (
                                                        <>
                                                            {conversation.lastMessage.senderId === currentUser.id && (
                                                                <span className="mr-1">
                                                                    {conversation.lastMessage.isRead ? (
                                                                        <CheckCheck className="h-3 w-3 inline text-blue-400" />
                                                                    ) : (
                                                                        <Check className="h-3 w-3 inline text-muted-foreground" />
                                                                    )}
                                                                </span>
                                                            )}
                                                            {conversation.lastMessage.type === "image"
                                                                ? "📷 Hình ảnh"
                                                                : conversation.lastMessage.content}
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </>
    )
}
