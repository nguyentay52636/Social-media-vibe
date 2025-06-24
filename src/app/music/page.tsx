"use client"

import { useState } from "react"
import SearchFilterMusics from "./components/SearchFilterMusics"
import MusicPlayer from "./components/MusicPlayer"
import HeaderTitleMusic from "./components/HeaderTitleMusic"
import { recentlyPlayed, playlists, tracks } from "@/lib/mock-data"


export default function MusicPage() {
    const [currentTrack, setCurrentTrack] = useState(tracks[1])
    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState(75)
    const [progress, setProgress] = useState(45)
    const [searchQuery, setSearchQuery] = useState("")

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, "0")}`
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <HeaderTitleMusic />
            <SearchFilterMusics searchQuery={searchQuery} setSearchQuery={setSearchQuery} recentlyPlayed={recentlyPlayed} playlists={playlists} tracks={tracks} />
            <MusicPlayer currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} volume={volume} setVolume={setVolume} />
        </div>
    )
}




