import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { currentUser } from '@/lib/mock-data'
import { Plus } from 'lucide-react'
import React from 'react'

interface CreateStoryProps {
    onClick: () => void
}

export default function CreateStory({ onClick }: CreateStoryProps) {
    return (

        <div className="flex-shrink-0" onClick={onClick}    >
            <div className="relative w-28 h-35 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Avatar className="h-12 w-12 mb-2">
                        <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                        <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-2 bg-primary rounded-full p-1">
                        <Plus className="h-4 w-4 text-white" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                    <p className="text-white text-xs font-medium text-center">Tạo Story</p>
                </div>
            </div>
        </div>
    )
}
