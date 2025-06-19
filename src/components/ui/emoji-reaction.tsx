import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Smile, Heart, ThumbsUp, Star, PartyPopper } from 'lucide-react'
import { EmojiPicker } from './emoji-picker'

interface EmojiReactionProps {
    onReactionAdd: (emoji: string) => void
    reactions: Array<{
        emoji: string
        count: number
        users: string[]
    }>
    messageId: string
}

const quickReactions = ['👍', '❤️', '😂', '😮', '😢', '😡']

export function EmojiReaction({ onReactionAdd, reactions, messageId }: EmojiReactionProps) {
    const [showReactionPicker, setShowReactionPicker] = useState(false)

    const handleQuickReaction = (emoji: string) => {
        onReactionAdd(emoji)
    }

    const handleCustomReaction = (emoji: string) => {
        onReactionAdd(emoji)
        setShowReactionPicker(false)
    }

    return (
        <div className="flex items-center gap-1 mt-2">
            {/* Quick Reactions */}
            <div className="flex items-center gap-1">
                {quickReactions.map((emoji) => (
                    <Button
                        key={emoji}
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-xs hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-110"
                        onClick={() => handleQuickReaction(emoji)}
                    >
                        {emoji}
                    </Button>
                ))}

                {/* Custom Reaction Button */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-gray-600 rounded-full"
                        onClick={() => setShowReactionPicker(!showReactionPicker)}
                    >
                        <Smile className="h-3 w-3 text-gray-400" />
                    </Button>
                    <EmojiPicker
                        onEmojiSelect={handleCustomReaction}
                        isOpen={showReactionPicker}
                        onClose={() => setShowReactionPicker(false)}
                    />
                </div>
            </div>

            {/* Display Reactions */}
            {reactions.length > 0 && (
                <div className="flex items-center gap-1 ml-2">
                    {reactions.map((reaction, index) => (
                        <div
                            key={`${reaction.emoji}-${index}`}
                            className="flex items-center gap-1 bg-gray-700 rounded-full px-2 py-1 text-xs"
                        >
                            <span>{reaction.emoji}</span>
                            <span className="text-gray-300">{reaction.count}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
} 