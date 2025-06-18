import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Heart, MessageCircle, Share } from 'lucide-react'
import React from 'react'

interface ActionsPostProps {
    isLiked: boolean
    showComments: boolean
    handleLike: () => void
    handleShare: () => void
}

export default function ActionsPost({ isLiked, showComments, handleLike, handleShare }: ActionsPostProps) {
    return (
        <div className="flex items-center justify-between pt-3 border-t">
            <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={cn(
                    "flex-1 hover:bg-red-500/20 hover:text-red-400 rounded-xl h-11 transition-all duration-300 mx-1",
                    isLiked && "text-red-400 bg-red-500/20",
                )}
            >
                <Heart className={cn("mr-2 h-5 w-5", isLiked && "fill-current")} />
                Thích
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowComments(!showComments)}
                className="flex-1 hover:bg-blue-500/20 hover:text-blue-400 rounded-xl h-11 transition-all duration-300 mx-1"
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                Bình luận
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex-1 hover:bg-green-500/20 hover:text-green-400 rounded-xl h-11 transition-all duration-300 mx-1"
            >
                <Share className="mr-2 h-5 w-5" />
                Chia sẻ
            </Button>
        </div>
    )
}
