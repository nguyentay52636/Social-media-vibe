"use client"

import { useState, useEffect } from "react"
import CardPhotos from "./components/CardDisplayPhotos"
import DialogUploadsPhotos from "./components/DialogUploadsPhotos"
import { albums } from "@/lib/mock-data"
import { photos } from "@/lib/mock-data"
import Loading from "../loading"


const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export default function PhotosPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
    const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Giả lập thời gian loading
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const filteredPhotos = photos.filter((photo) => {
        const matchesSearch = photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesAlbum = selectedAlbum ? photo.albumId === selectedAlbum : true
        return matchesSearch && matchesAlbum
    })

    if (isLoading) {
        return <Loading text="Đang tải ảnh..." />
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <DialogUploadsPhotos albums={albums} />

            <CardPhotos
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                viewMode={viewMode}
                setViewMode={(value: "grid" | "masonry") => setViewMode(value)}
                selectedAlbum={selectedAlbum}
                setSelectedAlbum={setSelectedAlbum}
                albums={albums}
                photos={photos}
            />
        </div>
    )
}


