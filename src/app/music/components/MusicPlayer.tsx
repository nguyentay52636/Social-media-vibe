import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Pause, Play, Shuffle, SkipBack, SkipForward, Repeat, Volume2 } from 'lucide-react'
import { Slider } from '@/components/ui/slider'

export default function MusicPlayer({ currentTrack, isPlaying, setIsPlaying, volume, setVolume }: { currentTrack: any, isPlaying: boolean, setIsPlaying: (value: boolean) => void, volume: number, setVolume: (value: number) => void }) {
    const progress = currentTrack.currentTime && currentTrack.duration
        ? (currentTrack.currentTime / currentTrack.duration) * 100
        : 0;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] p-4 shadow-2xl z-50">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <img
                            src={currentTrack.cover || "/placeholder.svg"}
                            alt={currentTrack.title}
                            className="w-14 h-14 rounded-lg shadow-lg"
                        />
                        <div className="min-w-0">
                            <p className="font-semibold truncate text-white">{currentTrack.title}</p>
                            <p className="text-xs text-[#b3b3b3] truncate">{currentTrack.artist}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="hover:bg-[#282828]">
                            <Heart className={`h-5 w-5 ${currentTrack.isLiked ? "fill-green-500 text-green-500" : "text-[#b3b3b3]"}`} />
                        </Button>
                    </div>

                    <div className="flex flex-col items-center space-y-2 flex-1 max-w-lg">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="hover:bg-[#282828]">
                                <Shuffle className="h-5 w-5 text-[#b3b3b3]" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-[#282828]">
                                <SkipBack className="h-5 w-5 text-[#b3b3b3]" />
                            </Button>
                            <Button size="icon" onClick={() => setIsPlaying(!isPlaying)} className="h-12 w-12 bg-white text-black rounded-full shadow-lg hover:scale-105 transition">
                                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-[#282828]">
                                <SkipForward className="h-5 w-5 text-[#b3b3b3]" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:bg-[#282828]">
                                <Repeat className="h-5 w-5 text-[#b3b3b3]" />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2 w-full">
                            <span className="text-xs text-[#b3b3b3] w-10 text-right">1:32</span>
                            <div className="flex-1 h-2 rounded-full bg-[#404040] relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full rounded-full"
                                    style={{
                                        width: `${progress}%`,
                                        background: "linear-gradient(90deg, #1db954 0%, #1ed760 100%)"
                                    }}
                                />
                            </div>
                            <span className="text-xs text-[#b3b3b3] w-10">{currentTrack.duration}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 flex-1 justify-end">
                        <Volume2 className="h-5 w-5 text-[#b3b3b3]" />
                        <Slider value={[volume]} onValueChange={val => setVolume(val[0])} max={100} step={1} className="w-28" />
                    </div>
                </div>
            </div>
        </div>
    )
}
