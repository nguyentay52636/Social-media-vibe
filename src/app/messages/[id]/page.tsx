"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import {
  ArrowLeft,
  Phone,
  Video,
  Send,
  Smile,
  Paperclip,
  ImageIcon,
  Mic,
  Star,
  Archive,
  Trash2,
  Info,
  Download,
  Reply,
  Forward,
  Copy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
// import { currentUser, users } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export default function ConversationPage() {
  const params = useParams()
  const router = useRouter()
  const conversationId = params.id as string

  const [newMessage, setNewMessage] = useState("")
  const [showInfo, setShowInfo] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock conversation data - in real app this would come from API
  const conversation = {
    id: conversationId,
    participants: [currentUser, users[0]],
    isOnline: true,
    isTyping: false,
  }

  const messages = [
    {
      id: "1",
      senderId: "2",
      sender: users[0],
      content: "Chào An! Bạn có khỏe không?",
      type: "text",
      createdAt: "2024-06-09T15:00:00Z",
      isRead: true,
      reactions: [],
    },
    {
      id: "2",
      senderId: "1",
      sender: currentUser,
      content: "Chào Bình! Mình khỏe, cảm ơn bạn. Bạn thì sao?",
      type: "text",
      createdAt: "2024-06-09T15:02:00Z",
      isRead: true,
      reactions: [],
    },
    // Add more messages...
  ]

  const otherUser = conversation.participants.find((p) => p.id !== currentUser.id)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 glass-effect">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-white/10"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                  <AvatarImage src={otherUser?.avatar || "/placeholder.svg"} alt={otherUser?.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                    {otherUser?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {conversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                )}
              </div>

              <div>
                <p className="font-semibold text-lg text-foreground">{otherUser?.name}</p>
                <p className="text-sm text-muted-foreground">
                  {conversation.isTyping ? (
                    <span className="text-primary">Đang nhập...</span>
                  ) : conversation.isOnline ? (
                    "Đang hoạt động"
                  ) : (
                    "Hoạt động lâu rồi"
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-green-500/20 hover:text-green-400"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-blue-500/20 hover:text-blue-400"
              >
                <Video className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-white/10"
                onClick={() => setShowInfo(!showInfo)}
              >
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
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

        {/* Message Input */}
        <div className="p-6 border-t border-white/10 glass-effect">
          <div className="flex items-end space-x-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/10">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/10">
                <ImageIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 relative">
              <Textarea
                placeholder="Nhập tin nhắn..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="min-h-[50px] max-h-32 resize-none glass-effect border-white/20 rounded-2xl pr-20"
              />
              <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="icon"
              className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-pink-500"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Info Sidebar */}
      {showInfo && (
        <div className="w-80 glass-effect border-l border-white/20 p-6 space-y-6">
          <div className="text-center space-y-4">
            <Avatar className="h-24 w-24 mx-auto ring-4 ring-primary/30">
              <AvatarImage src={otherUser?.avatar || "/placeholder.svg"} alt={otherUser?.name} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-2xl">
                {otherUser?.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-xl">{otherUser?.name}</h3>
              <p className="text-sm text-muted-foreground">{otherUser?.bio}</p>
            </div>
          </div>

          <Separator className="bg-white/20" />

          <div className="space-y-4">
            <h4 className="font-semibold">Hành động</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start border-white/20">
                <Star className="mr-2 h-4 w-4" />
                Ghim cuộc trò chuyện
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20">
                <Archive className="mr-2 h-4 w-4" />
                Lưu trữ
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-white/20 text-red-400 hover:bg-red-500/20"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Xóa cuộc trò chuyện
              </Button>
            </div>
          </div>

          <Separator className="bg-white/20" />

          <div className="space-y-4">
            <h4 className="font-semibold">Tệp đã chia sẻ</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10">
                <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <ImageIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">project-screenshot.png</p>
                  <p className="text-xs text-muted-foreground">2.4 MB</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
