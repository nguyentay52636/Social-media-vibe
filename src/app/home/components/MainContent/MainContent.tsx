import PostCard from '@/components/post/components/CardPost/PostCard'
import CreatePost from '@/components/post/components/CreatePost/CreatePost'
import { StoriesContainer } from '@/components/stories/StoriesContainer'
import { posts, stories, users } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

import React from 'react'

export default function MainContent({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
    return (
        <div
            className={cn(
                "space-y-6 transition-all duration-500",
                sidebarCollapsed ? "xl:col-span-5 lg:col-span-4 col-span-1" : "lg:col-span-6 col-span-1",
            )}
        >
            <StoriesContainer stories={stories} />
            <CreatePost />
            <div className="space-y-6">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} user={users[0]} />
                ))}
            </div>
        </div>

    )
}
