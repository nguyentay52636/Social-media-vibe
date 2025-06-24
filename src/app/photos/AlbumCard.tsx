import { Card, CardContent } from '@/components/ui/card'
import { formatDate } from '@/utils/utils'
import React from 'react'

export default function AlbumCard({ album }: { album: any }) {
    return (
        <Card className="overflow-hidden cursor-pointer animate-fade-in">
            <div className="relative h-48">
                <img src={album.coverImage || "/placeholder.svg"} alt={album.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{album.name}</h3>
                    <p className="text-sm opacity-90">{album.count} ảnh</p>
                </div>
            </div>
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Cập nhật lần cuối: {formatDate(album.lastUpdated)}</p>
            </CardContent>
        </Card>
    )
}