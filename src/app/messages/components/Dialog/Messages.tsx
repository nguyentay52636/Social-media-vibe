import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import React, { RefObject } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Check, CheckCheck } from 'lucide-react'
import { Message } from '@/types'


interface MessagesProps {
    conversationMessages: Message[]
    currentUser: { id: string }
    messagesEndRef: RefObject<HTMLDivElement | null>
    formatTime: (date: string) => string
}

export default function Messages({ conversationMessages, currentUser, messagesEndRef, formatTime }: MessagesProps) {
    return (
        <>
            <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                    {conversationMessages.map((message, index) => {
                        const isOwn = message.senderId === currentUser.id
                        const showAvatar = index === 0 || conversationMessages[index - 1].senderId !== message.senderId
                        const showTime =
                            index === conversationMessages.length - 1 ||
                            (() => {
                                const nextMessage = conversationMessages[index + 1];
                                if (!nextMessage?.createdAt || !message.createdAt) return false;
                                return new Date(nextMessage.createdAt).getTime() - new Date(message.createdAt).getTime() > 300000;
                            })()

                        return (
                            <div
                                key={message.id}
                                className={cn("flex items-end space-x-3", isOwn ? "justify-end" : "justify-start")}
                            >
                                {!isOwn && showAvatar && (
                                    <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                                        <AvatarImage src={message.sender?.avatar || "/placeholder.svg"} alt={message.sender?.name || "User"} />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs">
                                            {message.sender?.name?.charAt(0) || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                {!isOwn && !showAvatar && <div className="w-8" />}

                                <div className={cn("max-w-[70%] space-y-1", isOwn ? "items-end" : "items-start")}>
                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 animate-fade-in",
                                            isOwn
                                                ? "bg-gradient-to-r from-primary to-pink-500 text-white"
                                                : "glass-effect border-white/20 text-foreground",
                                        )}
                                    >
                                        {message.type === "image" ? (
                                            <div className="rounded-xl overflow-hidden">
                                                <img
                                                    src={message.content || "/placeholder.svg"}
                                                    alt="Shared image"
                                                    className="max-w-full h-auto"
                                                />
                                            </div>
                                        ) : (
                                            <p className="text-sm leading-relaxed">{message.content}</p>
                                        )}

                                        {message.reactions.length > 0 && (
                                            <div className="flex items-center space-x-1 mt-2">
                                                {message.reactions.map((reaction, idx) => (
                                                    <span key={idx} className="text-xs bg-white/20 rounded-full px-2 py-1">
                                                        {reaction.emoji}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {showTime && (
                                        <div
                                            className={cn(
                                                "flex items-center space-x-2 text-xs text-muted-foreground",
                                                isOwn ? "justify-end" : "justify-start",
                                            )}
                                        >
                                            <span>{formatTime(message.createdAt)}</span>
                                            {isOwn && (
                                                <span>
                                                    {message.isRead ? (
                                                        <CheckCheck className="h-3 w-3 text-blue-400" />
                                                    ) : (
                                                        <Check className="h-3 w-3" />
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>
        </>
    )
}
