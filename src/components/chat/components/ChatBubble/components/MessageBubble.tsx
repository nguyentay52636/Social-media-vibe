import React, { useState } from "react"
import { MessageProps } from "./types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Paperclip } from "lucide-react"
import { ReactionPicker } from "./ReactionPicker"

interface MessageBubbleProps {
    message: MessageProps
    isFirstInGroup: boolean
    isLastInGroup: boolean
    onReaction: (messageId: string, reaction: string) => void
    onReply: (message: MessageProps) => void
    onContextMenu: (message: MessageProps, position: { x: number; y: number }) => void
}

export function MessageBubble({
    message,
    isFirstInGroup,
    isLastInGroup,
    onReaction,
    onReply,
    onContextMenu,
}: MessageBubbleProps) {
    const [showReactionPicker, setShowReactionPicker] = useState(false)
    const [reactionPosition, setReactionPosition] = useState({ x: 0, y: 0 })

    const handleDoubleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setReactionPosition({ x: rect.left, y: rect.top })
        setShowReactionPicker(true)
    }

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault()
        onContextMenu(message, { x: e.clientX, y: e.clientY })
    }

    // Messenger colors
    const sentBg = "#b65cff"
    const sentText = "text-white"
    const receivedBg = "#e4e6eb"
    const receivedText = "text-gray-900"

    // Bubble shape
    const bubbleBase =
        "px-4 py-2 max-w-[80%] shadow-md text-sm relative transition-all " +
        (message.isOwn
            ? `${sentText} bg-[${sentBg}] rounded-2xl ${isLastInGroup ? 'rounded-br-md' : 'rounded-br-2xl'}`
            : `${receivedText} bg-[${receivedBg}] rounded-2xl ${isLastInGroup ? 'rounded-bl-md' : 'rounded-bl-2xl'}`)

    return (
        <div className={`flex items-end gap-2 group mb-0 ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}
            style={{ marginTop: isFirstInGroup ? 16 : 2 }}
        >
            {/* Avatar only for first in group and not own */}
            {!message.isOwn && isFirstInGroup ? (
                <Avatar className="w-7 h-7">
                    <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.senderName} />
                    <AvatarFallback className="bg-gray-600 text-white text-xs">{message.senderName[0]}</AvatarFallback>
                </Avatar>
            ) : (
                <div className="w-7 h-7" />
            )}

            <div className="flex flex-col items-stretch relative">
                {/* Reply preview Messenger style */}
                {message.replyTo && (
                    <div className={`text-xs px-3 py-1 mb-1 rounded-xl bg-gray-200 text-gray-700 max-w-[70%] ${message.isOwn ? 'self-end' : 'self-start'}`}
                        style={{ fontSize: 12 }}
                    >
                        <span className="font-semibold">{message.replyTo.senderName}:</span> {message.replyTo.content.substring(0, 30)}...
                    </div>
                )}

                <div
                    className={bubbleBase}
                    onDoubleClick={handleDoubleClick}
                    onContextMenu={handleRightClick}
                    style={{
                        borderBottomRightRadius: message.isOwn && isLastInGroup ? 8 : 24,
                        borderBottomLeftRadius: !message.isOwn && isLastInGroup ? 8 : 24,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                    }}
                >
                    {/* Message types */}
                    {message.isImage && (
                        <img
                            src={message.imageUrl || "/placeholder.svg?height=200&width=150&text=Image"}
                            alt="Shared image"
                            className="rounded-lg max-w-full"
                        />
                    )}
                    {message.isVideo && <video src={message.videoUrl} controls className="rounded-lg max-w-full" />}
                    {message.isAudio && (
                        <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
                            <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                            </button>
                            <div className="flex-1 h-1 bg-gray-500 rounded-full">
                                <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="text-xs">0:15</span>
                        </div>
                    )}
                    {message.isFile && (
                        <div className="flex items-center gap-3 bg-gray-200 rounded-lg p-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Paperclip className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">{message.fileName}</p>
                                <p className="text-xs text-gray-500">{message.fileSize}</p>
                            </div>
                        </div>
                    )}
                    {message.isSticker && (
                        <img
                            src={message.stickerUrl || "/placeholder.svg?height=100&width=100&text=Sticker"}
                            alt="Sticker"
                            className="w-20 h-20"
                        />
                    )}
                    {!message.isImage && !message.isVideo && !message.isAudio && !message.isFile && !message.isSticker && (
                        <p className="text-sm leading-relaxed">{message.content}</p>
                    )}
                </div>

                {/* Reactions below bubble, Messenger style */}
                {message.hasReaction && (
                    <div
                        className={`flex items-center gap-1 mt-1 ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                        style={{ minHeight: 20 }}
                    >
                        <span className="text-base select-none bg-white px-2 py-0.5 rounded-full shadow border border-gray-200">{message.hasReaction}</span>
                    </div>
                )}

                {/* Timestamp below bubble */}
                <div className={`text-xs mt-1 ${message.isOwn ? "text-right text-gray-400" : "text-left text-gray-500"}`}
                    style={{ fontSize: 11 }}
                >
                    {message.timestamp}
                </div>

                {/* Quick reaction button (appears on hover) */}
                <button
                    className={`absolute top-1/2 transform -translate-y-1/2 ${message.isOwn ? "-left-8" : "-right-8"}
                        w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-gray-300`}
                    onClick={handleDoubleClick}
                >
                    <Heart className="w-3 h-3 text-gray-500" />
                </button>
            </div>

            {/* Reaction Picker */}
            {showReactionPicker && (
                <ReactionPicker
                    onReactionSelect={(reaction) => onReaction(message.id, reaction)}
                    onClose={() => setShowReactionPicker(false)}
                    position={reactionPosition}
                />
            )}
        </div>
    )
} 