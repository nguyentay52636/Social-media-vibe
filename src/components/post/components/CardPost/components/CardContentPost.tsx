import React from 'react'
import { CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, Share } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Smile, Send } from 'lucide-react'
import Image from 'next/image'

import { Post, User } from '@/types'

interface CardContentPostProps {
    post: Post;
    user: User;
    likesCount: number;
    isLiked: boolean;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
    showComments: boolean;
    setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
    newComment: string;
    setNewComment: React.Dispatch<React.SetStateAction<string>>;
    handleLike: () => void;
    handleComment: () => void;
    handleShare: () => void;
}

export default function CardContentPost({ post, user, likesCount, isLiked, setIsLiked, showComments, setShowComments, newComment, setNewComment, handleLike, handleComment, handleShare }: CardContentPostProps) {
    return (
        <>
            <CardContent className="space-y-6">
                {/* Post Content */}
                <p className="text-base leading-relaxed text-foreground">{post.content}</p>

                {/* Post Images */}
                {post.images && post.images.length > 0 && (
                    <div
                        className={cn(
                            "grid gap-3 rounded-2xl overflow-hidden",
                            post.images.length === 1 && "grid-cols-1",
                            post.images.length === 2 && "grid-cols-2",
                            post.images.length > 2 && "grid-cols-2",
                        )}
                    >
                        {post.images.slice(0, 4).map((image, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "relative aspect-square overflow-hidden rounded-xl",
                                    post.images!.length === 3 && index === 0 && "row-span-2",
                                    post.images!.length > 4 && index === 3 && "relative",
                                )}
                            >
                                <Image
                                    src={image}
                                    alt={`Post image ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                                {post.images!.length > 4 && index === 3 && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-white font-bold text-2xl">+{post.images!.length - 4}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Post Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground px-2">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center">
                            <Heart className="h-4 w-4 mr-1 text-red-400" />
                            {likesCount} lượt thích
                        </span>
                        <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1 text-blue-400" />
                            {post.comments || 0} bình luận
                        </span>
                        <span className="flex items-center">
                            <Share className="h-4 w-4 mr-1 text-green-400" />
                            {post.shares || 0} chia sẻ
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
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

                {/* Comments Section */}
                {showComments && (
                    <div className="space-y-4 pt-4 border-t animate-fade-in">
                        {/* Mock Comments */}
                        <div className="flex space-x-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="/placeholder.svg?height=40&width=40&text=TB" alt="Trần Bình" />
                                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white">TB</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="bg-muted rounded-2xl p-4">
                                    <p className="font-semibold text-sm text-foreground">Trần Bình</p>
                                    <p className="text-sm text-foreground/90 mt-1">Bài viết rất hay! Cảm ơn bạn đã chia sẻ.</p>
                                </div>
                                <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                                    <span>2 giờ trước</span>
                                    <button className="hover:text-primary transition-colors">Thích</button>
                                    <button className="hover:text-primary transition-colors">Trả lời</button>
                                </div>
                            </div>
                        </div>

                        {/* Add Comment */}
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
                    </div>
                )}
            </CardContent>
        </>
    )
}
