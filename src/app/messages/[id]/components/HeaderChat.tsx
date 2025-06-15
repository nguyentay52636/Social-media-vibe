import { AvatarFallback } from '@radix-ui/react-avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '@/components/ui/button'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'
import { ArrowLeft, Phone, Video, Info } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface HeaderChatProps {
    otherUser: {
        id: string
        name: string
        avatar?: string
    }
    conversation: {
        isOnline: boolean
        isTyping: boolean
    }
}

export default function HeaderChat({ otherUser, conversation }: HeaderChatProps) {
    const router = useRouter()

    return (
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
                    >
                        <Info className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
