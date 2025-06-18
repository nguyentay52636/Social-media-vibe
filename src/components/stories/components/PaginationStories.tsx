import { Button } from '@/components/ui/button'
import { stories } from '@/lib/mock-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

interface PaginationStoriesProps {
    currentIndex: number
    totalStories: number
    prevStories: () => void
    nextStories: () => void
}

export default function PaginationStories({ currentIndex, totalStories, prevStories, nextStories }: PaginationStoriesProps) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Stories</h3>
            <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={prevStories} disabled={currentIndex === 0}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={nextStories}
                    disabled={currentIndex >= totalStories - 4}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
