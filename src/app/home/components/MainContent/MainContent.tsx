import { StoriesContainer } from '@/components/stories/StoriesContainer'
import { stories } from '@/lib/mock-data'

import React from 'react'

export default function MainContent({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
    return (
        <div className="space-y-6">
            <StoriesContainer stories={stories} />
        </div>
    )
}
