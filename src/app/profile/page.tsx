"use client";
import React, { useState } from 'react'
import CoverPhoto from './components/componentsPage/CoverPhoto'
import ProfileHeader from './components/componentsPage/ProfileHeader/ProfileHeader'
import ChatBubble from './components/componentsPage/ChatBubble'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { posts, userPhotos } from '@/lib/mock-data'

export default function page() {
    const [showChatBubble, setShowChatBubble] = useState(false)
    const [showImageSelector, setShowImageSelector] = useState<"cover" | "avatar" | null>(null)
    const profileData = {
        name: "Phuong Tay ",
        avatar: "/avatar.png",
        coverPhoto: "/dancer-bg.gif",
        stats: {
            profileViews: 1000,
            totalLikes: 100,
            totalComments: 50,
            postViews: 2000,
            friendsCount: 100,
        },
        skills: [
            { name: "ReactJS", level: 80 },
            { name: "NodeJS", level: 70 }
        ],
        socialLinks: [],
        gender: '',
        birthday: '',
        relationship: '',
        hometown: '',
        location: '',
        languages: [],
        interests: [],
        workExperience: [],
        education: [],
        achievements: [],
    }
    return (
        <div className="min-h-screen bg-background">
            {/* Cover Photo */}
            <CoverPhoto profileData={profileData} setShowImageSelector={(selector: string) => setShowImageSelector(selector as "cover" | "avatar")} />
            {/* Profile Header */}
            <ProfileHeader profileData={profileData} userPosts={posts} userPhotos={userPhotos} setShowImageSelector={setShowImageSelector} />
            {/* Chat Bubble */}
            {showChatBubble && (
                <ChatBubble profileData={profileData} setShowImageSelector={(selector: string) => setShowImageSelector(selector as "cover" | "avatar")} />
            )}
            <Button
                onClick={() => setShowChatBubble(!showChatBubble)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80 shadow-lg z-50"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>

        </div>
    )
}
