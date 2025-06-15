import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'

export default function TabsMessages({ messages, currentUser, setSelectedMessage }: TabsMessagesProps) {
    return (
        <>
            <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                    {messages.map((message, index) => {
                        const isOwn = message.senderId === currentUser.id
                        const showAvatar = index === 0 || messages[index - 1].senderId !== message.senderId

                        return (
                            <div
                                key={message.id}
                                className={cn("flex items-end space-x-3 group", isOwn ? "justify-end" : "justify-start")}
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                    setSelectedMessage(message.id)
                                }}
                            >
                                {!isOwn && showAvatar && (
                                    <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                                        <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs">
                                            {message.sender.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                {!isOwn && !showAvatar && <div className="w-8" />}

                                <div className={cn("max-w-[70%] space-y-1", isOwn ? "items-end" : "items-start")}>
                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 animate-fade-in relative group",
                                            isOwn
                                                ? "bg-gradient-to-r from-primary to-pink-500 text-white"
                                                : "glass-effect border-white/20 text-foreground",
                                        )}
                                    >
                                        <p className="text-sm leading-relaxed">{message.content}</p>

                                        {/* Message actions */}
                                        <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-lg p-1 border border-white/20">
                                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <Reply className="h-3 w-3" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <Forward className="h-3 w-3" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <Copy className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            "flex items-center space-x-2 text-xs text-muted-foreground",
                                            isOwn ? "justify-end" : "justify-start",
                                        )}
                                    >
                                        <span>{formatTime(message.createdAt)}</span>
                                    </div>
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
