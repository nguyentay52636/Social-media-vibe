"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
// import { currentUser, users } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import TabsMessages from "./components/TabsMessages"
import InputMessages from "./components/InputMessages"
import InfoSider from "./InfoSider"
import HeaderChat from "./components/HeaderChat"

export default function ConversationPage() {
  const params = useParams()
  const router = useRouter()
  const conversationId = params.id as string

  const [newMessage, setNewMessage] = useState("")
  const [showInfo, setShowInfo] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)


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

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderChat otherUser={otherUser} conversation={conversation} />

        {/* Messages */}
        <TabsMessages messages={messages} currentUser={currentUser} setSelectedMessage={setSelectedMessage} />

        {/* Message Input */}
        <InputMessages newMessage={newMessage} setNewMessage={setNewMessage} handleSendMessage={handleSendMessage} />
      </div>

      {/* Info Sidebar */}
      {showInfo && (
        <InfoSider otherUser={otherUser} />
      )}
    </div>
  )
}
