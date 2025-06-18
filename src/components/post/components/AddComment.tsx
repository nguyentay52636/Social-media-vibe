import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Smile, Send } from 'lucide-react'

interface AddCommentProps {
    onComment: (comment: string) => void
}

export default function AddComment({ onComment }: AddCommentProps) {
    const [newComment, setNewComment] = useState('')

    const handleComment = () => {
        onComment(newComment)
        setNewComment('')
    }

    return (
        <div className="flex space-x-3">
            <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=You" alt="You" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white">B</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
                <div className="relative">
                    <Textarea
                        placeholder="Viết bình luận..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="min-h-[60px] resize-none rounded-2xl"
                    />
                    <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                            <Smile className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <Button
                    size="sm"
                    onClick={handleComment}
                    disabled={!newComment.trim()}
                    className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80 border-0 rounded-xl"
                >
                    <Send className="mr-2 h-4 w-4" />
                    Đăng
                </Button>
            </div>
        </div>
    )
}
