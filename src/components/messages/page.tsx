"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import TabsMessages from "./components/TabsMessages"
import DialogMessages from "./components/Dialog/DialogMessages"
import InputMessage from "./components/InputMessage"
import Messages from "./components/Dialog/Messages"
import HeaderMessages from "./components/HeaderMessages"



export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0])
    const [searchQuery, setSearchQuery] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [activeTab, setActiveTab] = useState("all")
    const [messages, setMessages] = useState(messageHistory)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // const handleSendMessage = () => {
    //     if (newMessage.trim()) {
    //         const message = {
    //             id: Date.now().toString(),
    //             conversationId: selectedConversation.id,
    //             senderId: currentUser.id,
    //             sender: currentUser,
    //             content: newMessage,
    //             type: "text" as const,
    //             createdAt: new Date().toISOString(),
    //             isRead: false,
    //             reactions: [],
    //         }
    //         setMessages((prev) => [...prev, message])
    //         setNewMessage("")
    //     }
    // }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const handleFileUpload = () => {
        fileInputRef.current?.click()
    }

    const formatTime = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

        if (diffInHours < 1) {
            const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
            return diffInMinutes < 1 ? "Vừa xong" : `${diffInMinutes} phút trước`
        }
        if (diffInHours < 24) return `${diffInHours} giờ trước`

        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const filteredConversations = conversations.filter((conv) => {
        const otherUser = conv.participants.find((p) => p.id !== currentUser.id)
        const matchesSearch = otherUser?.name.toLowerCase().includes(searchQuery.toLowerCase())

        if (activeTab === "unread") return conv.unreadCount > 0
        if (activeTab === "archived") return conv.isArchived
        if (activeTab === "pinned") return conv.isPinned

        return matchesSearch
    })

    const conversationMessages = messages.filter((msg) => msg.conversationId === selectedConversation.id)
    const otherUser = selectedConversation.participants.find((p) => p.id !== currentUser.id)

    return (
        <div className="h-[calc(100vh-4rem)] flex">
            {/* Sidebar - Conversations List */}
            <div className="w-80 glass-effect border-r border-white/20 flex flex-col">
                {/* Header */}
                <DialogMessages />

                {/* Tabs */}
                <TabsMessages />
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <HeaderMessages />

                {/* Messages */}
                <Messages />

                {/* Message Input */}
                <InputMessage />
            </div>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                    // Handle file upload
                    console.log("Files selected:", e.target.files)
                }}
            />
        </div>
    )
}
