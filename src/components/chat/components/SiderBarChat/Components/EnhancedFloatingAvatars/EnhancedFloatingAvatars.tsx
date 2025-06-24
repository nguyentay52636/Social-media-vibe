"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    MessageCircle,
    Edit,
    X,
    MoreHorizontal,
    Phone,
    Video,
    Minimize2,
    Maximize2,
    Settings,
    Archive,
    VolumeX,
} from "lucide-react"

interface FloatingChat {
    id: string
    name: string
    avatar: string
    isOnline: boolean
    unreadCount?: number
    lastMessage?: string
    isTyping?: boolean
    isPinned?: boolean
}

interface EnhancedFloatingAvatarsProps {
    minimizedChats: string[]
    chats: any[]
    onChatRestore: (chatId: string) => void
    onChatClose: (chatId: string) => void
    onNewChat: () => void
    onQuickCall?: (chatId: string) => void
    onQuickVideo?: (chatId: string) => void
}

export function EnhancedFloatingAvatars({
    minimizedChats,
    chats,
    onChatRestore,
    onChatClose,
    onNewChat,
    onQuickCall,
    onQuickVideo,
}: EnhancedFloatingAvatarsProps) {
    const [hoveredChat, setHoveredChat] = useState<string | null>(null)
    const [contextMenu, setContextMenu] = useState<{ chatId: string; x: number; y: number } | null>(null)
    const [animatingChats, setAnimatingChats] = useState<Set<string>>(new Set())
    const [draggedChat, setDraggedChat] = useState<string | null>(null)
    const [dragOrder, setDragOrder] = useState<string[]>(minimizedChats)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const maxVisibleChats = isCollapsed ? 2 : 6
    const visibleChats = dragOrder.slice(0, maxVisibleChats)
    const hiddenCount = dragOrder.length - maxVisibleChats

    // Update drag order when minimized chats change
    useEffect(() => {
        setDragOrder(minimizedChats)
    }, [minimizedChats])

    // Animation when chat is minimized
    useEffect(() => {
        minimizedChats.forEach((chatId) => {
            if (!animatingChats.has(chatId)) {
                setAnimatingChats((prev) => new Set([...prev, chatId]))
                setTimeout(() => {
                    setAnimatingChats((prev) => {
                        const newSet = new Set(prev)
                        newSet.delete(chatId)
                        return newSet
                    })
                }, 500)
            }
        })
    }, [minimizedChats])

    const handleRightClick = (e: React.MouseEvent, chatId: string) => {
        e.preventDefault()
        setContextMenu({
            chatId,
            x: e.clientX - 200,
            y: e.clientY - 100,
        })
    }

    const handleCloseContextMenu = () => {
        setContextMenu(null)
    }

    const handleDragStart = (chatId: string) => {
        setDraggedChat(chatId)
    }

    const handleDragOver = (e: React.DragEvent, targetChatId: string) => {
        e.preventDefault()
        if (!draggedChat || draggedChat === targetChatId) return

        const draggedIndex = dragOrder.indexOf(draggedChat)
        const targetIndex = dragOrder.indexOf(targetChatId)

        const newOrder = [...dragOrder]
        newOrder.splice(draggedIndex, 1)
        newOrder.splice(targetIndex, 0, draggedChat)

        setDragOrder(newOrder)
    }

    const handleDragEnd = () => {
        setDraggedChat(null)
    }

    if (minimizedChats.length === 0) return null

    return (
        <>
            {/* Floating Chat Avatars Container */}
            <div ref={containerRef} className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-2">
                {/* Collapse/Expand Toggle */}
                {minimizedChats.length > 3 && (
                    <Button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full p-0 shadow-lg transition-all duration-200 hover:scale-105"
                    >
                        {isCollapsed ? <Maximize2 className="w-4 h-4 text-white" /> : <Minimize2 className="w-4 h-4 text-white" />}
                    </Button>
                )}

                {/* Minimized Chat Avatars */}
                <div className="flex flex-col space-y-2">
                    {visibleChats.map((chatId, index) => {
                        const chat = chats.find((c) => c.id === chatId)
                        if (!chat) return null

                        const isAnimating = animatingChats.has(chatId)
                        const isDragging = draggedChat === chatId

                        return (
                            <div
                                key={chatId}
                                className={`relative group transition-all duration-300 ease-out ${isAnimating ? "animate-pulse scale-110" : "scale-100"
                                    } ${isDragging ? "opacity-50 scale-95" : ""}`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    transform: `translateY(${isAnimating ? -5 : 0}px) scale(${isDragging ? 0.95 : 1})`,
                                }}
                                onMouseEnter={() => setHoveredChat(chatId)}
                                onMouseLeave={() => setHoveredChat(null)}
                                draggable
                                onDragStart={() => handleDragStart(chatId)}
                                onDragOver={(e) => handleDragOver(e, chatId)}
                                onDragEnd={handleDragEnd}
                            >
                                {/* Chat Avatar */}
                                <div
                                    className="relative cursor-pointer transform transition-all duration-200 hover:scale-110 hover:shadow-xl"
                                    onClick={() => onChatRestore(chatId)}
                                    onContextMenu={(e) => handleRightClick(e, chatId)}
                                >
                                    <div className="w-14 relative h-14 rounded-full overflow-hidden border-3 border-gray-700 hover:border-blue-500 transition-colors bg-gray-800 shadow-lg">
                                        <Avatar className="w-full h-full ">
                                            <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                                            <AvatarFallback className="bg-gray-600 text-white">{chat.name[0]}</AvatarFallback>
                                        </Avatar>

                                    </div>

                                    {/* Online Status */}
                                    {chat.isOnline && (
                                        <div className="absolute top-0 z-10! -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-gray-900 shadow-sm"></div>
                                    )}

                                    {/* Typing Indicator */}
                                    {chat.isTyping && (
                                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                                            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    )}

                                    {/* Unread Badge */}
                                    {/* {chat.unreadCount && chat.unreadCount > 0 && (
                                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg border-2 border-gray-900">
                                            {chat.unreadCount > 99 ? "99+" : chat.unreadCount}
                                        </Badge>
                                    )} */}

                                    {/* Pin Indicator */}
                                    {chat.isPinned && (
                                        <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-500 rounded-full border border-gray-900"></div>
                                    )}
                                </div>

                                {/* Quick Action Buttons (show on hover) */}
                                <div
                                    className={`absolute -left-16 top-0 flex flex-col space-y-1 transition-all duration-200 ${hoveredChat === chatId ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                                        }`}
                                >
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-8 h-8 bg-gray-700 hover:bg-green-600 rounded-full p-0 shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onQuickCall?.(chatId)
                                        }}
                                    >
                                        <Phone className="w-3 h-3 text-white" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full p-0 shadow-lg"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onQuickVideo?.(chatId)
                                        }}
                                    >
                                        <Video className="w-3 h-3 text-white" />
                                    </Button>
                                </div>

                                {/* Close button (show on hover) */}
                                <div
                                    className={`absolute -top-2 -left-2 w-6 h-6 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${hoveredChat === chatId ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onChatClose(chatId)
                                    }}
                                >
                                    <X className="w-3 h-3 text-white" />
                                </div>

                                {/* Hover Tooltip */}
                                {hoveredChat === chatId && (
                                    <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-xl border border-gray-600 animate-in slide-in-from-right-2 duration-200">
                                        <div className="font-medium">{chat.name}</div>
                                        {chat.lastMessage && (
                                            <div className="text-gray-300 text-xs mt-1 max-w-48 truncate">{chat.lastMessage}</div>
                                        )}
                                        <div className="text-xs mt-1">
                                            {chat.isTyping ? (
                                                <span className="text-blue-400">Đang nhập...</span>
                                            ) : chat.isOnline ? (
                                                <span className="text-green-400">Đang hoạt động</span>
                                            ) : (
                                                <span className="text-gray-400">Không hoạt động</span>
                                            )}
                                        </div>
                                        {/* Arrow */}
                                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Hidden Count Indicator */}
                {hiddenCount > 0 && (
                    <div
                        className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer transition-all duration-200 hover:scale-110 shadow-lg border-3 border-gray-600"
                        onClick={() => setIsCollapsed(false)}
                    >
                        +{hiddenCount}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 mt-4">
                    {/* Settings */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full p-0 shadow-lg border-3 border-gray-600 transition-all duration-200 hover:scale-110"
                    >
                        <Settings className="w-5 h-5 text-white" />
                    </Button>

                    {/* More Options */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full p-0 shadow-lg border-3 border-gray-600 transition-all duration-200 hover:scale-110"
                    >
                        <MoreHorizontal className="w-6 h-6 text-white" />
                    </Button>

                    {/* New Chat */}
                    <Button
                        onClick={onNewChat}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full p-0 shadow-lg transition-all duration-200 hover:scale-110 border-3 border-blue-500"
                    >
                        <Edit className="w-5 h-5 text-white" />
                    </Button>
                </div>
            </div>

            {/* Enhanced Context Menu */}
            {contextMenu && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={handleCloseContextMenu}></div>

                    {/* Menu */}
                    <div
                        className="fixed z-50 bg-gray-800 rounded-lg shadow-xl py-2 min-w-56 border border-gray-600 animate-in fade-in-0 zoom-in-95 duration-200"
                        style={{
                            left: contextMenu.x,
                            top: contextMenu.y,
                        }}
                    >
                        <button
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center space-x-3 transition-colors"
                            onClick={() => {
                                onChatRestore(contextMenu.chatId)
                                handleCloseContextMenu()
                            }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Mở chat</span>
                        </button>

                        <button
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center space-x-3 transition-colors"
                            onClick={() => {
                                onQuickCall?.(contextMenu.chatId)
                                handleCloseContextMenu()
                            }}
                        >
                            <Phone className="w-4 h-4" />
                            <span>Gọi điện</span>
                        </button>

                        <button
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center space-x-3 transition-colors"
                            onClick={() => {
                                onQuickVideo?.(contextMenu.chatId)
                                handleCloseContextMenu()
                            }}
                        >
                            <Video className="w-4 h-4" />
                            <span>Gọi video</span>
                        </button>

                        <hr className="border-gray-600 my-1" />

                        <button className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center space-x-3 transition-colors">
                            <Archive className="w-4 h-4" />
                            <span>Lưu trữ</span>
                        </button>

                        <button className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 flex items-center space-x-3 transition-colors">
                            <VolumeX className="w-4 h-4" />
                            <span>Tắt thông báo</span>
                        </button>

                        <hr className="border-gray-600 my-1" />

                        <button
                            className="w-full px-4 py-3 text-left text-red-400 hover:bg-gray-700 flex items-center space-x-3 transition-colors"
                            onClick={() => {
                                onChatClose(contextMenu.chatId)
                                handleCloseContextMenu()
                            }}
                        >
                            <X className="w-4 h-4" />
                            <span>Đóng chat</span>
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
