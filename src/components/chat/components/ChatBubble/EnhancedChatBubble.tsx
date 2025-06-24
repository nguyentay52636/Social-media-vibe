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
import { MessageBubble } from "./components/MessageBubble"
import { MessageContextMenu } from "./components/MessageContextMenu"
import { MessageProps } from "./components/types"
import MessageInput from "./components/MessageInput"
import HeaderMessagerBubble from "./components/HeaderMessagerBubble"
import MessagesBubble from "./components/MessagesBubble"
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



    const handleVoiceRecord = () => {
        setIsRecording(!isRecording)
        // Handle voice recording
    }

    return (
        <>
            <div
                className="fixed bg-gray-800 rounded-t-lg shadow-2xl border border-gray-700 w-90 mr-18!  h-130 flex flex-col z-50"
                style={{ right: 10, bottom: 2 }}
            >
                {/* Header */}
                <HeaderMessagerBubble
                    chat={{
                        avatar: chat.avatar,
                        name: chat.name,
                        isOnline: chat.isOnline,
                        isTyping: chat.isTyping ?? false,
                        lastSeen: chat.lastSeen ?? ""
                    }}
                    onMinimize={onMinimize}
                    onClose={onClose}
                />

                {/* Messages */}
                <MessagesBubble chat={{ messages: chat.messages }} />

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
                <MessageInput
                    handleSendMessage={handleSendMessage}
                    fileInputRef={fileInputRef as React.RefObject<HTMLInputElement>}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    showEmojiPicker={showEmojiPicker}
                    setShowEmojiPicker={setShowEmojiPicker}
                    handleVoiceRecord={handleVoiceRecord}
                    isRecording={isRecording}
                />

                {/* Hidden file input */}
                <input ref={fileInputRef} type="file" className="hidden" multiple />
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
