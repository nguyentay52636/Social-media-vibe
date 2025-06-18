import React from 'react'
import CardPost from './components/CardPost'
import { Post, User } from '@/types'

interface PostCardProps {
    post: Post
    user: User
}
export default function PostCard({ post, user }: PostCardProps) {
    return (
        <CardPost post={post} user={user} />
    )
}
