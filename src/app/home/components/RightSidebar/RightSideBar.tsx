"use client"

import React from 'react'
import { cn } from '@/lib/utils'



export default function RightSideBar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
    return (
        <div className={cn(
            "space-y-6",
            sidebarCollapsed ? "hidden xl:block" : "hidden lg:block"
        )}>
        </div>
    )
}
