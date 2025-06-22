import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Search, Maximize2, Edit } from 'lucide-react'

interface Chat {
  id: string
  name: string
  avatar: string
  isOnline: boolean
  hasStory: boolean
  isTyping: boolean
  unreadCount: number
  lastMessage: string
  timestamp: number
}

export default function SiderBarChat() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeChat, setActiveChat] = useState<string | null>(null)

  const chats: Chat[] = [
    {
      id: '1',
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      isOnline: true,
      hasStory: true,
      isTyping: false,
      unreadCount: 0,
      lastMessage: 'Hello, how are you?',
      timestamp: Date.now()
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
      isOnline: false,
      hasStory: false,
      isTyping: true,
      unreadCount: 2,
      lastMessage: 'Hey, what\'s up?',
      timestamp: Date.now()
    },
    {
      id: '3',
      name: 'Alice Johnson',
      avatar: 'https://via.placeholder.com/150',
      isOnline: true,
      hasStory: true,
      isTyping: false,
      unreadCount: 1,
      lastMessage: 'Just checking in. How are you doing?',
      timestamp: Date.now()
    },
    {
      id: '4',
      name: 'Bob Brown',
      avatar: 'https://via.placeholder.com/150',
      isOnline: false,
      hasStory: false,
      isTyping: false,
      unreadCount: 0,
      lastMessage: 'See you later!',
      timestamp: Date.now()
    },
    {
      id: '5',
      name: 'Charlie Davis',
      avatar: 'https://via.placeholder.com/150',
      isOnline: true,
      hasStory: false,
      isTyping: false,
      unreadCount: 0,
      lastMessage: 'Have a great day!',
      timestamp: Date.now()
    },
  ]

  const filteredChats = chats.filter((chat) => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'unread' && chat.unreadCount > 0) ||
      (activeFilter === 'groups' && chat.name.includes('Group'))

    return matchesSearch && matchesFilter
  })

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId)
  }

  const handleChatOpen = (chatId: string) => {
    setActiveChat(chatId)
  }

  const formatTimestamp = (timestamp: number) => {
    const now = new Date()
    const messageDate = new Date(timestamp)
    const isToday = now.toDateString() === messageDate.toDateString()
    const isYesterday = now.toDateString() === messageDate.toDateString()
    const isThisYear = now.getFullYear() === messageDate.getFullYear()

    if (isToday) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else if (isYesterday) {
      return 'Hôm qua'
    } else if (isThisYear) {
      return messageDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })
    } else {
      return messageDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }
  }

  return (
    <div className="fixed right-0 top-0 w-80 h-screen bg-gray-800 border-l border-gray-700 z-40 transform transition-transform duration-300 ease-in-out">
      {/* Messenger Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">Đoạn chat</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-700">
            <MoreHorizontal className="w-4 h-4 text-gray-300" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-700">
            <Maximize2 className="w-4 h-4 text-gray-300" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-700">
            <Edit className="w-4 h-4 text-gray-300" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm trên Messenger"
          className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        <Button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === "all"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
        >
          Tất cả
        </Button>
        <Button
          onClick={() => setActiveFilter("unread")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === "unread"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
        >
          Chưa đọc
        </Button>
        <Button
          onClick={() => setActiveFilter("groups")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === "groups"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
        >
          Nhóm
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="px-3 py-2 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat, index) => (
          <div
            key={chat.id}
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer transition-all duration-200 ${activeChat === chat.id ? "bg-gray-700" : ""
              }`}
            onClick={() => {
              handleChatSelect(chat.id)
              handleChatOpen(chat.id)
            }}
          >
            <div className="relative">
              <Avatar
                className={`w-12 h-12 ${chat.hasStory ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800" : ""}`}
              >
                <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                <AvatarFallback className="bg-gray-600 text-white">{chat.name[0]}</AvatarFallback>
              </Avatar>
              {chat.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-white truncate">{chat.name}</h3>
                <span className="text-xs text-gray-400 flex-shrink-0">{formatTimestamp(chat.timestamp)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  {chat.isTyping ? (
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-sm text-blue-400 ml-1">đang nhập...</span>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
                  )}
                </div>

                {chat.unreadCount && chat.unreadCount > 0 && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* View all link */}
        <div className="p-4 text-center">
          <Button variant="ghost" className="text-blue-400 hover:text-blue-300 text-sm">
            Xem tất cả trong Messenger
          </Button>
        </div>
      </div>
    </div>
  )
}
