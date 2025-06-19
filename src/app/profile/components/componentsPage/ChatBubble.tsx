import { Button } from '@/components/ui/button'
import React, { useState, useRef, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { X, Phone, Video, Smile, Send } from 'lucide-react'
import { currentUser as defaultCurrentUser } from '@/lib/mock-data'
import { EmojiPicker } from '@/components/ui/emoji-picker'
import { EmojiReaction } from '@/components/ui/emoji-reaction'

interface ChatBubbleProps {
    profileData: {
        name: string;
        avatar?: string;
        coverPhoto: string;
        stats: {
            profileViews: number;
            totalLikes: number;
            [key: string]: any;
        };
        [key: string]: any;
    };
    currentUser: {
        name: string;
        avatar?: string;
        [key: string]: any;
    };
    setShowChatBubble: (show: boolean) => void;
}

interface Message {
    id: string;
    content: string;
    senderId: string;
    senderName: string;
    senderAvatar?: string;
    timestamp: Date;
    reactions: Array<{
        emoji: string;
        count: number;
        users: string[];
    }>;
}

export default function ChatBubble({ profileData, currentUser, setShowChatBubble }: ChatBubbleProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: 'Chào bạn! Bạn có thể giúp gì cho tôi?',
            senderId: profileData.name,
            senderName: profileData.name,
            senderAvatar: profileData.avatar,
            timestamp: new Date(Date.now() - 60000),
            reactions: []
        },
        {
            id: '2',
            content: 'Xin chào! Tôi cần hỗ trợ về tài khoản.',
            senderId: currentUser.name,
            senderName: currentUser.name,
            senderAvatar: currentUser.avatar,
            timestamp: new Date(),
            reactions: []
        }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Close emoji picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (showEmojiPicker && !target.closest('.emoji-picker-container') && !target.closest('.emoji-button')) {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const message: Message = {
                id: Date.now().toString(),
                content: newMessage,
                senderId: currentUser.name,
                senderName: currentUser.name,
                senderAvatar: currentUser.avatar,
                timestamp: new Date(),
                reactions: []
            };
            setMessages(prev => [...prev, message]);
            setNewMessage('');
            setShowEmojiPicker(false);
        }
    };

    const handleEmojiSelect = (emoji: string) => {
        setNewMessage(prev => prev + emoji);
        inputRef.current?.focus();
    };

    const handleReactionAdd = (messageId: string, emoji: string) => {
        setMessages(prev => prev.map(message => {
            if (message.id === messageId) {
                const existingReaction = message.reactions.find(r => r.emoji === emoji);
                if (existingReaction) {
                    // If user already reacted, remove their reaction
                    const updatedReaction = {
                        ...existingReaction,
                        count: existingReaction.count - 1,
                        users: existingReaction.users.filter(user => user !== currentUser.name)
                    };

                    if (updatedReaction.count === 0) {
                        // Remove reaction if count is 0
                        return {
                            ...message,
                            reactions: message.reactions.filter(r => r.emoji !== emoji)
                        };
                    } else {
                        // Update existing reaction
                        return {
                            ...message,
                            reactions: message.reactions.map(r =>
                                r.emoji === emoji ? updatedReaction : r
                            )
                        };
                    }
                } else {
                    // Add new reaction
                    return {
                        ...message,
                        reactions: [...message.reactions, {
                            emoji,
                            count: 1,
                            users: [currentUser.name]
                        }]
                    };
                }
            }
            return message;
        }));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e as any);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="fixed bottom-24 right-6 w-96 bg-[#18191A] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gradient-to-r from-[#232526] to-[#232526]/80">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={profileData.avatar || "/placeholder.svg"} alt={profileData.name} />
                        <AvatarFallback className="bg-primary text-white font-bold">
                            {profileData.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-base text-gray-100">{profileData.name}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Button size="icon" className="bg-transparent text-green-400! hover:bg-transparent cursor-pointer"><Phone className="h-8 w-8 text-green-400" /></Button>
                    <Button variant="ghost" size="icon" className=" bg-transparent hover:bg-transparent cursor-pointer"><Video className="h-8 w-8 text-red-400" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => setShowChatBubble(false)}><X className="h-7 w-7 text-gray-400" /></Button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-3 bg-[#18191A] overflow-y-auto max-h-96">
                {messages.map((message) => (
                    <div key={message.id} className={`flex items-end gap-2 ${message.senderId === currentUser.name ? 'justify-end' : ''}`}>
                        {message.senderId !== currentUser.name && (
                            <Avatar className="h-7 w-7">
                                <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.senderName} />
                                <AvatarFallback className="bg-primary text-white font-bold">
                                    {message.senderName.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        )}
                        <div className={`${message.senderId === currentUser.name ? 'bg-gradient-to-r from-primary to-pink-500 text-white rounded-2xl rounded-br-sm' : 'bg-[#242526] text-gray-100 rounded-2xl rounded-bl-sm'} px-4 py-2 max-w-[70%] text-sm`}>
                            {message.content}
                            <div className={`text-xs opacity-70 mt-1 ${message.senderId === currentUser.name ? 'text-right' : 'text-left'}`}>
                                {formatTime(message.timestamp)}
                            </div>

                            {/* Emoji Reactions */}
                            <EmojiReaction
                                onReactionAdd={(emoji) => handleReactionAdd(message.id, emoji)}
                                reactions={message.reactions}
                                messageId={message.id}
                            />
                        </div>
                        {message.senderId === currentUser.name && (
                            <Avatar className="h-7 w-7">
                                <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.senderName} />
                                <AvatarFallback className="bg-primary text-white font-bold">
                                    {message.senderName.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="relative flex items-center gap-2 px-4 py-3 border-t border-gray-800 bg-[#18191A]">
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="hover:bg-gray-700 emoji-button"
                    >
                        <Smile className="h-5 w-5 text-gray-400" />
                    </Button>
                    <div className="emoji-picker-container">
                        <EmojiPicker
                            onEmojiSelect={handleEmojiSelect}
                            isOpen={showEmojiPicker}
                            onClose={() => setShowEmojiPicker(false)}
                        />
                    </div>
                </div>
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Nhập tin nhắn..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 rounded-full bg-[#242526] border-none focus:ring-0 text-sm px-4 text-gray-100 placeholder:text-gray-400"
                />
                <Button
                    size="icon"
                    className="bg-gradient-to-r from-primary to-pink-500 text-white rounded-full cursor-pointer hover:from-primary/80 hover:to-pink-500/80"
                    type="submit"
                    disabled={!newMessage.trim()}
                >
                    <Send className="h-5 w-5" />
                </Button>
            </form>
        </div>
    )
}