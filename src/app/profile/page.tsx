"use client";
import React, { useState } from 'react'
import CoverPhoto from './components/componentsPage/CoverPhoto'
import ProfileHeader from './components/componentsPage/ProfileHeader/ProfileHeader'
import ChatBubble from './components/componentsPage/ChatBubble'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { posts, profileData, userPhotos, currentUser } from '@/lib/mock-data'
import { ImageSelectionModal } from '@/components/layout/SiderBar/Profile/ImageSelectionModal'
export default function page() {
    const [showChatBubble, setShowChatBubble] = useState(false)
    const [selectedImages, setSelectedImages] = useState<string[]>([])
    const [showImageSelector, setShowImageSelector] = useState<"cover" | "avatar" | null>(null)

    return (
        <div className="min-h-screen bg-background">
            {/* Cover Photo */}
            <CoverPhoto profileData={profileData} setShowImageSelector={(selector: string) => setShowImageSelector(selector as "cover" | "avatar")} />
            {/* Profile Header */}
            <ProfileHeader profileData={profileData} userPosts={posts} userPhotos={userPhotos} setShowImageSelector={setShowImageSelector} />
            {/* Chat Bubble */}
            {showChatBubble && (
                <ChatBubble profileData={profileData as any} currentUser={currentUser as any} setShowChatBubble={setShowChatBubble} />
            )}
            <Button
                onClick={() => setShowChatBubble(!showChatBubble)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80 shadow-lg z-50"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>
            {/* Image Selector Modal */}
            {showImageSelector && (
                <ImageSelectionModal
                    type={showImageSelector}
                    onClose={() => setShowImageSelector(null)}
                    onSelect={(images) => {
                        setSelectedImages(images)
                        setShowImageSelector(null)
                    }}
                />
            )}

        </div>
    )
}

