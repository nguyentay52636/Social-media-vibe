import { Card } from '@/components/ui/card'
import React from 'react'

export default function PhotoCard({ photo }: { photo: any }) {
    return (
        <Card className="overflow-hidden group cursor-pointer animate-fade-in">
            <div className="relative">
                <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.caption}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium truncate">{photo.caption}</p>
                    <p className="text-xs">{photo.likes} lượt thích</p>
                </div>
            </div>
        </Card>
    )
}