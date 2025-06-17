import React from 'react'
import MainContent from './MainContent/MainContent'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSideBar from './RightSidebar/RightSideBar'
import { cn } from '@/lib/utils'
import { User } from '@/types'

export default function CorePage({ sidebarCollapsed, onlineUsers }: { sidebarCollapsed: boolean, onlineUsers: User[] }) {
    return (
        <div className="container mx-auto px-4 py-6 max-w-none">
            <div
                className={cn(
                    "grid gap-6 transition-all duration-500 ease-in-out",
                    sidebarCollapsed ? "grid-cols-1 xl:grid-cols-10 lg:grid-cols-8" : "grid-cols-1 lg:grid-cols-12",
                )}
            >
                <LeftSidebar sidebarCollapsed={sidebarCollapsed} onlineUsers={onlineUsers} />
                <MainContent sidebarCollapsed={sidebarCollapsed} />
                <RightSideBar sidebarCollapsed={sidebarCollapsed} />
            </div>
        </div>
    )
}
