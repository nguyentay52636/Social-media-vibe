"use client"

import { useState, useEffect } from "react"

import SiderBarChat from "@/components/chat/components/SiderBarChat/SiderBarChat"
import { EnhancedChatBubble } from "@/components/chat/components/ChatBubble/EnhancedChatBubble"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MessageSquare, Search, Maximize2, Edit, MoreHorizontal, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { EnhancedFloatingAvatars } from "@/components/chat/components/EnhancedFloatingAvatars"

interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  unreadCount: number
  hasStory: boolean
  isTyping: boolean
  messages: {
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
  }[]
  isGroup?: boolean
}

const initialChats: Chat[] = [
  {
    id: "1",
    name: "Hoàng Văn E",
    avatar: "/placeholder.svg?height=48&width=48&text=HE",
    lastMessage: "Tôi có thể giúp gì cho bạn?",
    timestamp: new Date(Date.now() - 30000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: true,
    isTyping: false,
    messages: [
      {
        id: "1",
        content: "Chào bạn!",
        timestamp: "14:30",
        isOwn: false,
        senderName: "Hoàng Văn E",
        senderAvatar: "/placeholder.svg?height=28&width=28&text=HE",
        isRead: true,
      },
      {
        id: "2",
        content: "Tôi có thể giúp gì cho bạn?",
        timestamp: "14:31",
        isOwn: false,
        senderName: "Hoàng Văn E",
        senderAvatar: "/placeholder.svg?height=28&width=28&text=HE",
        isRead: true,
      },
    ],
  },
  {
    id: "2",
    name: "Trần Thị B",
    avatar: "/placeholder.svg?height=48&width=48&text=TB",
    lastMessage: "Chào bạn!",
    timestamp: new Date(Date.now() - 60000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: false,
    isTyping: true,
    messages: [
      {
        id: "1",
        content: "Chào bạn!",
        timestamp: "14:25",
        isOwn: false,
        senderName: "Trần Thị B",
        senderAvatar: "/placeholder.svg?height=28&width=28&text=TB",
        isRead: true,
      },
    ],
  },
  {
    id: "3",
    name: "Lê Văn C",
    avatar: "/placeholder.svg?height=48&width=48&text=LC",
    lastMessage: "Cảm ơn bạn nhiều",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: true,
    isTyping: false,
    messages: [
      {
        id: "1",
        content: "Bạn có thể giúp tôi không?",
        timestamp: "14:20",
        isOwn: false,
        senderName: "Lê Văn C",
        senderAvatar: "/placeholder.svg?height=28&width=28&text=LC",
        isRead: true,
      },
      {
        id: "2",
        content: "Cảm ơn bạn nhiều",
        timestamp: "14:22",
        isOwn: false,
        senderName: "Lê Văn C",
        senderAvatar: "/placeholder.svg?height=28&width=28&text=LC",
        isRead: true,
      },
    ],
  },
  {
    id: "4",
    name: "Meta AI",
    avatar: "/placeholder.svg?height=48&width=48&text=AI",
    lastMessage: "Tôi có thể giúp gì cho bạn?",
    timestamp: new Date(Date.now() - 180000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "5",
    name: "Phạm Thanh",
    avatar: "/placeholder.svg?height=48&width=48&text=PT",
    lastMessage: "Chào bạn!",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    isOnline: true,
    unreadCount: 2,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "6",
    name: "Đặng Yuki",
    avatar: "/placeholder.svg?height=48&width=48&text=DY",
    lastMessage: "Cảm ơn bạn nhiều",
    timestamp: new Date(Date.now() - 240000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "7",
    name: "Trúc Phương",
    avatar: "/placeholder.svg?height=48&width=48&text=TP",
    lastMessage: "Hẹn gặp lại",
    timestamp: new Date(Date.now() - 600000).toISOString(),
    isOnline: false,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "8",
    name: "Lương Nhật Mai",
    avatar: "/placeholder.svg?height=48&width=48&text=LM",
    lastMessage: "Bạn có rảnh không?",
    timestamp: new Date(Date.now() - 1920000).toISOString(),
    isOnline: false,
    unreadCount: 2,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "9",
    name: "Minh Thắng",
    avatar: "/placeholder.svg?height=48&width=48&text=MT",
    lastMessage: "Đã xem tin nhắn của bạn",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isOnline: true,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "10",
    name: "Trần An",
    avatar: "/placeholder.svg?height=48&width=48&text=TA",
    lastMessage: "Bạn đã gửi một ảnh",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isOnline: false,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "11",
    name: "Ngọc Trinh",
    avatar: "/placeholder.svg?height=48&width=48&text=NT",
    lastMessage: "Haha 😂",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isOnline: false,
    unreadCount: 0,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
  {
    id: "12",
    name: "Ngọc Quý",
    avatar: "/placeholder.svg?height=48&width=48&text=NQ",
    lastMessage: "Được rồi",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    isOnline: true,
    unreadCount: 9,
    hasStory: false,
    isTyping: false,
    messages: [],
  },
]

const contacts = [
  {
    id: "c1",
    name: "Trần Thị B",
    avatar: "/placeholder.svg?height=32&width=32&text=B",
    isOnline: true,
  },
  {
    id: "c2",
    name: "Lê Văn C",
    avatar: "/placeholder.svg?height=32&width=32&text=C",
    isOnline: true,
  },
  {
    id: "c3",
    name: "Phạm Thị D",
    avatar: "/placeholder.svg?height=32&width=32&text=D",
    isOnline: false,
  },
]

const formatTimestamp = (timestamp: string) => {
  const now = new Date()
  const time = new Date(timestamp)
  const diff = now.getTime() - time.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return "Vừa xong"
  if (minutes < 60) return `${minutes} phút`
  if (hours < 24) return `${hours} giờ`
  if (days < 7) return `${days} ngày`
  return time.toLocaleDateString("vi-VN")
}

export default function MessagesDropdown() {
  const [chats, setChats] = useState<Chat[]>(initialChats)
  const [openChatWindows, setOpenChatWindows] = useState<string[]>([])
  const [minimizedChats, setMinimizedChats] = useState<string[]>(["8", "10", "11", "12", "9", "7", "6", "5"])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [showMessengerSidebar, setShowMessengerSidebar] = useState(false)

  // New state for EnhancedChatBubble
  const [openChatBubbles, setOpenChatBubbles] = useState<{ [key: string]: { x: number; y: number } }>({})

  // Calculate total unread messages
  const totalUnreadMessages = chats.reduce((total, chat) => total + (chat.unreadCount || 0), 0)

  // Simulate typing indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setChats((prevChats) =>
        prevChats.map((chat) => ({
          ...chat,
          isTyping: Math.random() < 0.1 && chat.isOnline,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleMessengerToggle = () => {
    setShowMessengerSidebar(!showMessengerSidebar)
  }

  const handleChatOpen = (chatId: string) => {
    // Remove from minimized if it was minimized
    setMinimizedChats((prev) => prev.filter((id) => id !== chatId))

    if (!openChatWindows.includes(chatId)) {
      setOpenChatWindows((prev) => [...prev, chatId])
    }

    // Close messenger dialog when opening a chat
    // setShowMessengerDialog(false)
  }

  const handleChatClose = (chatId: string) => {
    setOpenChatWindows((prev) => prev.filter((id) => id !== chatId))
    setMinimizedChats((prev) => prev.filter((id) => id !== chatId))
  }

  const handleContactClick = (contactId: string) => {
    const existingChat = chats.find((chat) => chat.id === contactId || chat.name === contactId)

    if (!existingChat) {
      const contact = contacts.find((c) => c.id === contactId || c.name === contactId)
      if (contact) {
        //   existingChat = {
        //     id: contactId,
        //     name: contact.name,
        //     avatar: contact.avatar,
        //     lastMessage: "",
        //     timestamp: new Date().toISOString(),
        //     isOnline: contact.isOnline,
        //     messages: [],
        //   }
        //   setChats((prev) => [existingChat!, ...prev])
        // } else {
        //   existingChat = {
        //     id: contactId,
        //     name: contactId,
        //     avatar: `/placeholder.svg?height=48&width=48&text=${contactId[0]}`,
        //     lastMessage: "",
        //     timestamp: new Date().toISOString(),
        //     isOnline: true,
        //     messages: [],
        //   }
        setChats((prev) => [existingChat!, ...prev])
      }
    }

    if (existingChat) {
      handleChatOpen(existingChat.id)
    }
  }

  const handleSendMessage = (chatId: string, message: string, replyTo?: {
    id: string
    content: string
    senderName: string
  }) => {
    const newMessage = {
      id: Date.now().toString(),
      content: message,
      timestamp: new Date().toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      isOwn: true,
      senderName: "Tôi",
      senderAvatar: "/placeholder.svg?height=28&width=28&text=Me",
      replyTo: replyTo
        ? {
          id: replyTo.id,
          content: replyTo.content,
          senderName: replyTo.senderName,
        }
        : undefined,
      isRead: false,
      deliveredAt: new Date().toISOString(),
    }

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: message,
            timestamp: new Date().toISOString(),
          }
          : chat,
      ),
    )
  }

  const handleChatSelect = (chatId: string) => {
    setChats((prevChats) => prevChats.map((chat) => (chat.id === chatId ? { ...chat, unreadCount: 0 } : chat)))

    // Open chat bubble
    const chat = chats.find(c => c.id === chatId)
    if (chat) {
      // Calculate position for the chat bubble (bottom right corner)
      const bubblePosition = { x: window.innerWidth - 320, y: window.innerHeight - 400 }
      setOpenChatBubbles(prev => ({
        ...prev,
        [chatId]: bubblePosition
      }))
    }
  }

  const handleChatBubbleClose = (chatId: string) => {
    setOpenChatBubbles(prev => {
      const newBubbles = { ...prev }
      delete newBubbles[chatId]
      return newBubbles
    })
  }

  const handleChatBubbleMinimize = (chatId: string) => {
    // Add to minimized chats
    if (!minimizedChats.includes(chatId)) {
      setMinimizedChats(prev => [...prev, chatId])
    }
    // Close the bubble
    handleChatBubbleClose(chatId)
  }

  const handleQuickCall = (chatId: string) => {
    console.log(`Starting voice call with ${chatId}`)
  }

  const handleQuickVideo = (chatId: string) => {
    console.log(`Starting video call with ${chatId}`)
  }

  const filteredChats = chats.filter((chat) => {
    const matchesSearch =
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    switch (activeFilter) {
      case "unread":
        return chat.unreadCount && chat.unreadCount > 0
      case "groups":
        return chat.name.includes("Nhóm") || chat.name.includes("Group") || chat.isGroup
      default:
        return true
    }
  })

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative rounded-full w-10 h-10 flex items-center justify-center bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50"
          >
            <MessageSquare className="w-6 h-6 text-gray-800 dark:text-white" />
            {totalUnreadMessages > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">
                {totalUnreadMessages > 9 ? "9+" : totalUnreadMessages}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 md:w-96 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg mr-4 p-0">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Đoạn chat
              </h1>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full"
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full"
                >
                  <Maximize2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full"
                  onClick={handleMessengerToggle}
                >
                  <Edit className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm trên Messenger"
                className="pl-9 bg-gray-100 dark:bg-gray-700 border-transparent rounded-full focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2 mb-4">
              <Button
                onClick={() => setActiveFilter("all")}
                size="sm"
                variant={activeFilter === "all" ? "default" : "secondary"}
                className="rounded-full"
              >
                Tất cả
              </Button>
              <Button
                onClick={() => setActiveFilter("unread")}
                size="sm"
                variant={activeFilter === "unread" ? "default" : "secondary"}
                className="rounded-full"
              >
                Chưa đọc
              </Button>
              <Button
                onClick={() => setActiveFilter("groups")}
                size="sm"
                variant={activeFilter === "groups" ? "default" : "secondary"}
                className="rounded-full"
              >
                Nhóm
              </Button>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto simple-scrollbar">
            {filteredChats.map((chat) => (
              <DropdownMenuItem
                key={chat.id}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700/[.5] focus:bg-gray-100 dark:focus:bg-gray-700/[.5] cursor-pointer"
                onSelect={() => handleChatSelect(chat.id)}
              >
                <div className="flex items-center gap-3 w-full group relative">
                  <div className="relative shrink-0">
                    <Avatar
                      className={`w-14 h-14 ${chat.hasStory
                        ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-800"
                        : ""
                        }`}
                    >
                      <AvatarImage src={chat.avatar} alt={chat.name} />
                      <AvatarFallback className="bg-gray-300 dark:bg-gray-600">
                        {chat.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {chat.isOnline && (
                      <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
                    )}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {chat.name}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 ml-2">
                        {formatTimestamp(chat.timestamp)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      {chat.isTyping ? (
                        <p className="text-sm text-blue-500 truncate">
                          đang nhập...
                        </p>
                      ) : (
                        <p
                          className={`text-sm truncate ${chat.unreadCount > 0
                            ? "text-gray-800 dark:text-gray-200 font-medium"
                            : "text-gray-500 dark:text-gray-400"
                            }`}
                        >
                          {chat.lastMessage}
                        </p>
                      )}
                      {chat.unreadCount > 0 ? (
                        <Badge
                          variant="default"
                          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full h-5 min-w-[20px] flex items-center justify-center text-xs p-1"
                        >
                          {chat.unreadCount}
                        </Badge>
                      ) : (
                        <div className="w-3 h-3 rounded-full border-2 border-gray-400 dark:border-gray-500 group-hover:bg-blue-500 group-hover:border-blue-500" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 top-1/2 -translate-y-1/2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-8 h-8 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuickCall(chat.id)
                      }}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-8 h-8 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleQuickVideo(chat.id)
                      }}
                    >
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-8 h-8 rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>

          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuItem className="p-0">
            <Button
              variant="link"
              className="w-full justify-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 py-3"
            >
              Xem tất cả trong Messenger
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="fixed bottom-0 right-0 flex items-end gap-4 p-4 z-50 pointer-events-none">
        {/* Open Chat Windows */}
      </div>

      <div className="fixed bottom-0 right-24 flex items-end gap-2 pr-4 z-40 pointer-events-auto">
        <EnhancedFloatingAvatars
          minimizedChats={minimizedChats}
          chats={chats}
          onChatRestore={handleChatOpen}
          onChatClose={handleChatClose}
          onNewChat={() => handleContactClick("new")}
          onQuickCall={handleQuickCall}
          onQuickVideo={handleQuickVideo}
        />
      </div>

      {showMessengerSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <SiderBarChat />
        </div>
      )}

      {/* Enhanced Chat Bubbles */}
      {Object.entries(openChatBubbles).map(([chatId, position]) => {
        const chat = chats.find(c => c.id === chatId)
        if (!chat) return null

        return (
          <EnhancedChatBubble
            key={chatId}
            chat={{
              id: chat.id,
              name: chat.name,
              avatar: chat.avatar,
              isOnline: chat.isOnline,
              lastSeen: chat.timestamp,
              isTyping: chat.isTyping,
              messages: chat.messages,
            }}
            onClose={() => handleChatBubbleClose(chatId)}
            onMinimize={() => handleChatBubbleMinimize(chatId)}
            onSendMessage={handleSendMessage}
            position={position}
          />
        )
      })}
    </>
  )
}
