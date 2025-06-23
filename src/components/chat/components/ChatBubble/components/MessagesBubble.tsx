import React from 'react'
import { MessageBubble } from './MessageBubble'
import { Message } from '@/types'

interface MessagesBubbleProps {
  chat: {
    messages: Message[]
  }
}

export default function MessagesBubble({ chat }: MessagesBubbleProps) {
  return (
    <div className="flex-1 overflow-y-auto p-3 bg-gray-900">
      {chat.messages.map((message, index) => {
        const prev = chat.messages[index - 1]
        const next = chat.messages[index + 1]
        const isFirstInGroup = !prev || prev.senderName !== message.senderName
        const isLastInGroup = !next || next.senderName !== message.senderName
        return (
          <div key={message.id}>
            {isFirstInGroup && (
              <div className="text-center text-xs text-gray-400 my-4">
                {message.timestamp}
              </div>
            )}
            <MessageBubble
              message={message}
              isFirstInGroup={isFirstInGroup}
              isLastInGroup={isLastInGroup}
              onReaction={handleReaction}
              onReply={handleReply}
              onContextMenu={handleContextMenu}
            />
          </div>
        )
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}
