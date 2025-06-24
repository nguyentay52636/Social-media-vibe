import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Play, Heart } from 'lucide-react'
import React from 'react'

export default function PlayListCard({ playlist }: { playlist: any }) {

    return (
        <Card className="overflow-hidden cursor-pointer group animate-fade-in">
            <div className="relative">
                <img
                    src={playlist.cover || "/placeholder.svg"}
                    alt={playlist.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <Button
                    size="icon"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <Play className="h-4 w-4" />
                </Button>
            </div>
            <CardContent className="p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold">{playlist.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {playlist.trackCount} bài hát • {playlist.duration}
                        </p>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Heart className={`h-4 w-4 ${playlist.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )

}
