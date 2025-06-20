import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Search, Smile, Heart, Star, ThumbsUp, PartyPopper } from 'lucide-react'

interface EmojiPickerProps {
    onEmojiSelect: (emoji: string) => void
    isOpen: boolean
    onClose: () => void
}

const emojiCategories = {
    'smileys': {
        icon: <Smile className="h-4 w-4" />,
        emojis: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠']
    },
    'hearts': { 
        icon: <Heart className="h-4 w-4" />,
        emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💌', '💋', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💬', '🗨️', '🗯️', '💭', '💤']
    },
    'gestures': {
        icon: <ThumbsUp className="h-4 w-4" />,
        emojis: ['👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀', '👁️', '👅', '👄', '💋', '🩸']
    },
    'objects': {
        icon: <Star className="h-4 w-4" />,
        emojis: ['⭐', '🌟', '✨', '⚡', '💫', '🔥', '💥', '☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '☃️', '⛄', '🌬️', '💨', '🌪️', '🌫️', '🌊', '💧', '💦', '☔', '☂️', '🌈', '☀️', '🌙', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜']
    },
    'celebration': {
        icon: <PartyPopper className="h-4 w-4" />,
        emojis: ['🎉', '🎊', '🎈', '🎂', '🎁', '🎄', '🎃', '🎗️', '🎟️', '🎫', '🎖️', '🏆', '🏅', '🥇', '🥈', '🥉', '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷️', '⛸️', '🥌', '🎿', '⛷️', '🏂', '🪂', '🏋️‍♀️', '🏋️', '🏋️‍♂️', '🤼‍♀️', '🤼', '🤼‍♂️', '🤸‍♀️', '🤸', '🤸‍♂️', '⛹️‍♀️', '⛹️', '⛹️‍♂️', '🤺', '🤾‍♀️', '🤾', '🤾‍♂️', '🏌️‍♀️', '🏌️', '🏌️‍♂️', '🏇', '🧘‍♀️', '🧘', '🧘‍♂️', '🏄‍♀️', '🏄', '🏄‍♂️', '🏊‍♀️', '🏊', '🏊‍♂️', '🤽‍♀️', '🤽', '🤽‍♂️', '🚣‍♀️', '🚣', '🚣‍♂️', '🧗‍♀️', '🧗', '🧗‍♂️', '🚵‍♀️', '🚵', '🚵‍♂️', '🚴‍♀️', '🚴', '🚴‍♂️', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎪', '🤹‍♀️', '🤹', '🤹‍♂️', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕', '🎻', '🎲', '♟️', '🎯', '🎳', '🎮', '🎰', '🧩', '🎨', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🎮', '🎰', '🧩', '🎨', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️']
    }
}

export function EmojiPicker({ onEmojiSelect, isOpen, onClose }: EmojiPickerProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('smileys')

    const filteredEmojis = Object.entries(emojiCategories).reduce((acc, [category, data]) => {
        const filtered = data.emojis.filter(emoji =>
            emoji.includes(searchTerm) ||
            (searchTerm && emoji.charCodeAt(0).toString(16).includes(searchTerm.toLowerCase()))
        )
        if (filtered.length > 0) {
            acc[category] = filtered
        }
        return acc
    }, {} as Record<string, string[]>)

    const handleEmojiClick = (emoji: string) => {
        onEmojiSelect(emoji)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="absolute bottom-full right-0 mb-2 w-80 bg-[#242526] border border-gray-700 rounded-xl shadow-2xl z-50">
            <div className="p-3 border-b border-gray-700">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Tìm emoji..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-[#18191A] border-gray-600 text-gray-100 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-[#18191A] border-b border-gray-700">
                    {Object.entries(emojiCategories).map(([category, data]) => (
                        <TabsTrigger
                            key={category}
                            value={category}
                            className="data-[state=active]:bg-[#242526] data-[state=active]:text-primary"
                        >
                            {data.icon}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="max-h-64 overflow-y-auto p-3">
                    {Object.entries(filteredEmojis).map(([category, emojis]) => (
                        <TabsContent key={category} value={category} className="mt-0">
                            <div className="grid grid-cols-8 gap-2">
                                {emojis.map((emoji, index) => (
                                    <Button
                                        key={`${category}-${index}`}
                                        variant="ghost"
                                        size="sm"
                                        className="h-10 w-10 p-0 text-xl hover:bg-gray-600 rounded-lg"
                                        onClick={() => handleEmojiClick(emoji)}
                                    >
                                        {emoji}
                                    </Button>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
        </div>
    )
} 