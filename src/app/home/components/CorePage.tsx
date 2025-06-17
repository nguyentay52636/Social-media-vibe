import React from 'react'
import MainContent from './MainContent/MainContent'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSideBar from './RightSidebar/RightSideBar'
import { cn } from '@/lib/utils'

export default function CorePage({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
    return (
        <div className="container mx-auto px-4 py-6 max-w-none">
            <div
                className={cn(
                    "grid gap-6 transition-all duration-500 ease-in-out",
                    sidebarCollapsed ? "grid-cols-1 xl:grid-cols-10 lg:grid-cols-8" : "grid-cols-1 lg:grid-cols-12",
                )}
            >
                <LeftSidebar sidebarCollapsed={sidebarCollapsed} />
                <MainContent sidebarCollapsed={sidebarCollapsed} />
                <RightSideBar sidebarCollapsed={sidebarCollapsed} />
            </div>
        </div>
    )
}
