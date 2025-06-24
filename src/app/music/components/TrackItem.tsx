import { Heart, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function TrackItem({ track }: { track: any }) {
    return (
        <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 cursor-pointer group">
            <div className="relative">
                <img src={track.cover || "/placeholder.svg"} alt={track.title} className="w-12 h-12 rounded-md" />
                {track.isPlaying && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <p className={`font-medium truncate ${track.isPlaying ? "text-primary" : ""}`}>{track.title}</p>
                <p className="text-sm text-muted-foreground truncate">
                    {track.artist} • {track.album}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                    <Heart className={`h-4 w-4 ${track.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <span className="text-sm text-muted-foreground">{track.duration}</span>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                    {track.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    )
}