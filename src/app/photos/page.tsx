"use client"

import { useState } from "react"
import CardPhotos from "./components/CardDisplayPhotos"
import DialogUploadsPhotos from "./components/DialogUploadsPhotos"
import { albums } from "@/lib/mock-data"
import { photos } from "@/lib/mock-data"


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

    const filteredPhotos = photos.filter((photo) => {
        const matchesSearch = photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesAlbum = selectedAlbum ? photo.albumId === selectedAlbum : true
        return matchesSearch && matchesAlbum
    })

    return (
        <div className="container mx-auto px-4 py-6">
            <DialogUploadsPhotos albums={albums} />

            <CardPhotos
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                viewMode={viewMode}
                setViewMode={setViewMode}
                selectedAlbum={selectedAlbum}
                setSelectedAlbum={setSelectedAlbum}
                albums={albums}
                photos={photos}
            />
        </div>
    )
}


