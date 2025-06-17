import React from 'react'
import UserProfile from './components/UserProfile'
import WeeklyStats from './components/WeeklyStats'
import QuickActions from './components/QuickActions'
import OnlineFriendsPreview from './components/OnlineFriendsPreview'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import { currentUser } from '@/lib/mock-data'

export default function LeftSidebar({ sidebarCollapsed, onlineUsers }: { sidebarCollapsed: boolean, onlineUsers: User[] }) {
    return (
        <div
            className={cn(
                "space-y-6 transition-all duration-500",
                sidebarCollapsed ? "xl:col-span-2 lg:col-span-2 hidden lg:block" : "lg:col-span-3",
            )}
        >
            <UserProfile user={currentUser} />
            <WeeklyStats />
            <QuickActions />
            <OnlineFriendsPreview onlineUsers={onlineUsers} />
        </div>
    )
}
