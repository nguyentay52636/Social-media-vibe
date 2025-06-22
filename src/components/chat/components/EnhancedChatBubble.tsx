"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Phone,
    Video,
    Minus,
    X,
    Mic,
    Camera,
    ImageIcon,
    Smile,
    Heart,
    Reply,
    Forward,
    Copy,
    Delete,
    Info,
    Paperclip,
    Gift,
    Sticker,
} from "lucide-react"

interface MessageProps {
    id: string
    content: string
    timestamp: string
    isOwn: boolean
    senderName: string
    senderAvatar: string
    hasReaction?: string
    isImage?: boolean
    imageUrl?: string
    isVideo?: boolean
    videoUrl?: string
    isAudio?: boolean
    audioUrl?: string
    isFile?: boolean
    fileName?: string
    fileSize?: string
    isSticker?: boolean
    stickerUrl?: string
    replyTo?: {
        id: string
        content: string
        senderName: string
    }
    isRead?: boolean
    deliveredAt?: string
}

interface ReactionPickerProps {
    onReactionSelect: (reaction: string) => void
    onClose: () => void
    position: { x: number; y: number }
}

function ReactionPicker({ onReactionSelect, onClose, position }: ReactionPickerProps) {
    const reactions = ["❤️", "😂", "😮", "😢", "😡", "👍"]

    return (
        <div
            className="fixed bg-gray-800 rounded-full p-2 flex gap-1 shadow-lg border border-gray-600 z-50"
            style={{ left: position.x, top: position.y - 60 }}
        >
            {reactions.map((reaction) => (
                <button
                    key={reaction}
                    className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center text-lg transition-transform hover:scale-110"
                    onClick={() => {
                        onReactionSelect(reaction)
                        onClose()
                    }}
                >
                    {reaction}
                </button>
            ))}
        </div>
    )
}

interface MessageContextMenuProps {
    message: MessageProps
    onClose: () => void
    onReply: () => void
    onForward: () => void
    onCopy: () => void
    onDelete: () => void
    position: { x: number; y: number }
}

function MessageContextMenu({
    message,
    onClose,
    onReply,
    onForward,
    onCopy,
    onDelete,
    position,
}: MessageContextMenuProps) {
    return (
        <div
            className="fixed bg-gray-800 rounded-lg shadow-lg border border-gray-600 py-2 min-w-48 z-50"
            style={{ left: position.x, top: position.y }}
        >
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onReply()
                    onClose()
                }}
            >
                <Reply className="w-4 h-4" />
                Trả lời
            </button>
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onForward()
                    onClose()
                }}
            >
                <Forward className="w-4 h-4" />
                Chuyển tiếp
            </button>
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onCopy()
                    onClose()
                }}
            >
                <Copy className="w-4 h-4" />
                Sao chép
            </button>
            {message.isOwn && (
                <button
                    className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 flex items-center gap-3"
                    onClick={() => {
                        onDelete()
                        onClose()
                    }}
                >
                    <Delete className="w-4 h-4" />
                    Xóa
                </button>
            )}
        </div>
    )
}

function MessageBubble({
    message,
    onReaction,
    onReply,
    onContextMenu,
}: {
    message: MessageProps
    onReaction: (messageId: string, reaction: string) => void
    onReply: (message: MessageProps) => void
    onContextMenu: (message: MessageProps, position: { x: number; y: number }) => void
}) {
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

    return (
        <div className={`flex items-end gap-2 mb-2 group ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}>
            {!message.isOwn && (
                <Avatar className="w-7 h-7">
                    <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.senderName} />
                    <AvatarFallback className="bg-gray-600 text-white text-xs">{message.senderName[0]}</AvatarFallback>
                </Avatar>
            )}

            <div className="relative max-w-xs">
                {/* Reply indicator */}
                {message.replyTo && (
                    <div className={`text-xs text-gray-400 mb-1 px-2 ${message.isOwn ? "text-right" : "text-left"}`}>
                        Trả lời {message.replyTo.senderName}: {message.replyTo.content.substring(0, 30)}...
                    </div>
                )}

                <div
                    className={`px-4 py-2 rounded-2xl cursor-pointer ${message.isOwn ? "bg-blue-600 text-white rounded-br-md" : "bg-gray-700 text-white rounded-bl-md"
                        }`}
                    onDoubleClick={handleDoubleClick}
                    onContextMenu={handleRightClick}
                >
                    {/* Different message types */}
                    {message.isImage && (
                        <img
                            src={message.imageUrl || "/placeholder.svg?height=200&width=150&text=Image"}
                            alt="Shared image"
                            className="rounded-lg max-w-full"
                        />
                    )}

                    {message.isVideo && <video src={message.videoUrl} controls className="rounded-lg max-w-full" />}

                    {message.isAudio && (
                        <div className="flex items-center gap-2 bg-gray-600 rounded-full px-3 py-2">
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
                        <div className="flex items-center gap-3 bg-gray-600 rounded-lg p-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Paperclip className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">{message.fileName}</p>
                                <p className="text-xs text-gray-300">{message.fileSize}</p>
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
                        <p className="text-sm">{message.content}</p>
                    )}
                </div>

                {/* Message status */}
                {message.isOwn && (
                    <div className={`text-xs text-gray-400 mt-1 ${message.isOwn ? "text-right" : "text-left"}`}>
                        {message.isRead ? "Đã xem" : "Đã gửi"} • {message.timestamp}
                    </div>
                )}

                {/* Reaction */}
                {message.hasReaction && (
                    <div
                        className={`absolute -bottom-1 ${message.isOwn ? "-left-1" : "-right-1"} bg-gray-800 rounded-full px-1 py-0.5 border border-gray-600`}
                    >
                        <span className="text-xs">{message.hasReaction}</span>
                    </div>
                )}

                {/* Quick reaction button (appears on hover) */}
                <button
                    className={`absolute top-1/2 transform -translate-y-1/2 ${message.isOwn ? "-left-8" : "-right-8"
                        } w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                    onClick={handleDoubleClick}
                >
                    <Heart className="w-3 h-3 text-gray-300" />
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

interface EnhancedChatBubbleProps {
    chat: {
        id: string
        name: string
        avatar: string
        isOnline: boolean
        lastSeen?: string
        isTyping?: boolean
        messages: MessageProps[]
    }
    onClose: () => void
    onMinimize: () => void
    onSendMessage: (chatId: string, message: string, replyTo?: MessageProps) => void
    position: { x: number; y: number }
}

export function EnhancedChatBubble({ chat, onClose, onMinimize, onSendMessage, position }: EnhancedChatBubbleProps) {
    const [newMessage, setNewMessage] = useState("")
    const [replyingTo, setReplyingTo] = useState<MessageProps | null>(null)
    const [showContextMenu, setShowContextMenu] = useState(false)
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
    const [selectedMessage, setSelectedMessage] = useState<MessageProps | null>(null)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [chat.messages])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (newMessage.trim()) {
            onSendMessage(chat.id, newMessage.trim(), replyingTo || undefined)
            setNewMessage("")
            setReplyingTo(null)
        }
    }

    const handleReaction = (messageId: string, reaction: string) => {
        // Handle message reaction
        console.log(`React to message ${messageId} with ${reaction}`)
    }

    const handleReply = (message: MessageProps) => {
        setReplyingTo(message)
    }

    const handleContextMenu = (message: MessageProps, position: { x: number; y: number }) => {
        setSelectedMessage(message)
        setContextMenuPosition(position)
        setShowContextMenu(true)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // Handle file upload
            console.log("File selected:", file.name)
        }
    }

    const handleVoiceRecord = () => {
        setIsRecording(!isRecording)
        // Handle voice recording
    }

    return (
        <>
            <div
                className="fixed bg-gray-800 rounded-t-lg shadow-2xl border border-gray-700 w-80 h-96 flex flex-col z-50"
                style={{ left: position.x, bottom: 0 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800 rounded-t-lg">
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
                            <h3 className="font-medium text-white text-sm">{chat.name}</h3>
                            <p className="text-xs text-gray-400">
                                {chat.isTyping
                                    ? "Đang nhập..."
                                    : chat.isOnline
                                        ? "Đang hoạt động"
                                        : chat.lastSeen || "Hoạt động 2 giờ trước"}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                            <Phone className="w-4 h-4 text-blue-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                            <Video className="w-4 h-4 text-blue-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                            <Info className="w-4 h-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700" onClick={onMinimize}>
                            <Minus className="w-4 h-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700" onClick={onClose}>
                            <X className="w-4 h-4 text-gray-400" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 bg-gray-900">
                    {chat.messages.map((message, index) => {
                        const showTimestamp = index === 0 || chat.messages[index - 1].timestamp !== message.timestamp

                        return (
                            <div key={message.id}>
                                {showTimestamp && <div className="text-center text-xs text-gray-500 my-4">{message.timestamp}</div>}
                                <MessageBubble
                                    message={message}
                                    onReaction={handleReaction}
                                    onReply={handleReply}
                                    onContextMenu={handleContextMenu}
                                />
                            </div>
                        )
                    })}
                    <div ref={messagesEndRef} />
                </div>

                {/* Reply indicator */}
                {replyingTo && (
                    <div className="px-3 py-2 bg-gray-700 border-t border-gray-600 flex items-center justify-between">
                        <div className="flex-1">
                            <p className="text-xs text-gray-400">Trả lời {replyingTo.senderName}</p>
                            <p className="text-sm text-white truncate">{replyingTo.content}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="p-1" onClick={() => setReplyingTo(null)}>
                            <X className="w-4 h-4 text-gray-400" />
                        </Button>
                    </div>
                )}

                {/* Message Input */}
                <div className="p-2 border-t border-gray-700 bg-gray-800">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-1">
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 hover:bg-gray-700"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <Paperclip className="w-4 h-4 text-blue-400" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                                <Camera className="w-4 h-4 text-blue-400" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                                <ImageIcon className="w-4 h-4 text-blue-400" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                                <Sticker className="w-4 h-4 text-blue-400" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                                <Gift className="w-4 h-4 text-blue-400" />
                            </Button>
                        </div>

                        <div className="flex-1 flex items-center bg-gray-700 rounded-full px-3 py-1">
                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Aa"
                                className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 focus:outline-none p-0 text-sm"
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 hover:bg-gray-600"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            >
                                <Smile className="w-4 h-4 text-blue-400" />
                            </Button>
                        </div>

                        {newMessage.trim() ? (
                            <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full">
                                <div className="w-4 h-4 flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent"></div>
                                </div>
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                size="sm"
                                className={`p-1 hover:bg-gray-700 ${isRecording ? "bg-red-600" : ""}`}
                                onClick={handleVoiceRecord}
                            >
                                <Mic className="w-4 h-4 text-blue-400" />
                            </Button>
                        )}
                    </form>
                </div>

                {/* Hidden file input */}
                <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} multiple />
            </div>

            {/* Context Menu */}
            {showContextMenu && selectedMessage && (
                <MessageContextMenu
                    message={selectedMessage}
                    onClose={() => setShowContextMenu(false)}
                    onReply={() => handleReply(selectedMessage)}
                    onForward={() => console.log("Forward message")}
                    onCopy={() => navigator.clipboard.writeText(selectedMessage.content)}
                    onDelete={() => console.log("Delete message")}
                    position={contextMenuPosition}
                />
            )}

            {/* Click outside to close context menu */}
            {showContextMenu && <div className="fixed inset-0 z-40" onClick={() => setShowContextMenu(false)} />}
        </>
    )
}
