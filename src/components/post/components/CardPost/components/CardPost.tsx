"use client";
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React, { useState } from 'react'

import CardContentPost from './CardContentPost'
import HeaderCard from './HeaderCard'
import { Post, User } from '@/types'

export interface CardPostProps {
    post: Post,
    user: User
}

export default function CardPost({ post, user }: CardPostProps) {
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [newComment, setNewComment] = useState("")
    const [likesCount, setLikesCount] = useState(post.likes || 0)
    const userName = user.name || "Unknown User"
    const userAvatar = user.avatar || "/placeholder.svg?height=40&width=40&text=U"
    const isOnline = user.isOnline || false

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
        console.log(`${isLiked ? "Unliked" : "Liked"} post:`, post.id)
    }

    const handleComment = () => {
        if (newComment.trim()) {
            console.log("Comment added:", newComment)
            setNewComment("")
        }
    }

    const handleShare = () => {
        console.log("Shared post:", post.id)
    }

    const timeAgo = (date: string) => {
        const now = new Date()
        const postDate = new Date(date)
        const diffInHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60))

        if (diffInHours < 1) return "Vừa xong"
        if (diffInHours < 24) return `${diffInHours} giờ trước`
        return `${Math.floor(diffInHours / 24)} ngày trước`
    }
    return (
        <>
            <Card className="w-full overflow-hidden mb-6">
                <HeaderCard
                    setIsSaved={setIsSaved}
                    isSaved={isSaved}
                    userAvatar={userAvatar}
                    userName={userName}
                    isOnline={isOnline}
                    post={post}
                    timeAgo={timeAgo}
                />
                <CardContentPost
                    post={post}
                    user={user}
                    likesCount={likesCount}
                    isLiked={isLiked}
                    setIsLiked={setIsLiked}
                    showComments={showComments}
                    setShowComments={setShowComments}
                    newComment={newComment}
                    setNewComment={setNewComment}
                    handleLike={handleLike}
                    handleComment={handleComment}
                    handleShare={handleShare}
                />
            </Card>
        </>
    )
}
