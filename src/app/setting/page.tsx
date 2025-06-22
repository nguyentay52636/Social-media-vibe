"use client"

import { useState } from "react"

import { Tabs } from "@/components/ui/tabs"
import TabsContentProfile from "./components/TabsContent/TabsContentProfile"
import TabsContentNotifications from "./components/TabsContent/TabsContentNotifications"
import TabsContentAppearance from "./components/TabsContent/TabsContentAppearance"
import TabsContentHelp from "./components/TabsContent/TabsContentHelp"
import TabsListContent from "./components/TabsContent/TabsListContent"

export default function SettingsPage() {
    // const { theme, setTheme } = useTheme()
    const [notifications, setNotifications] = useState({
        likes: true,
        comments: true,
        messages: true,
        friendRequests: true,
        events: false,
    })

    const [privacy, setPrivacy] = useState({
        profileVisibility: "friends",
        postVisibility: "friends",
        friendListVisibility: "friends",
        onlineStatus: true,
    })

    // Mock user data
    const currentUser = {
        name: "Demo User",
        email: "demo@socialvibe.com",
        location: "Hà Nội, Việt Nam",
        website: "https://socialvibe.com",
        bio: "Lập trình viên Full-stack | Yêu thích công nghệ và du lịch",
        avatar: "/placeholder.svg?height=96&width=96&text=User",
    }

    const handleSaveProfile = () => {
        console.log("Profile saved")
    }

    const handleChangePassword = () => {
        console.log("Password changed")
    }

    const handleNotificationChange = (key: string, value: boolean) => {
        setNotifications((prev) => ({ ...prev, [key]: value }))
        console.log(`Notification ${key} set to:`, value)
    }

    const handlePrivacyChange = (key: string, value: string | boolean) => {
        setPrivacy((prev) => ({ ...prev, [key]: value }))
        console.log(`Privacy ${key} set to:`, value)
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Cài đặt</h1>
                    <p className="text-muted-foreground">Quản lý tài khoản và tùy chọn của bạn</p>
                </div>
            </div>

            <Tabs defaultValue="profile" className="w-full">
                <TabsListContent />
                <TabsContentProfile handleSaveProfile={handleSaveProfile} handleChangePassword={handleChangePassword} />
                <TabsContentNotifications handleNotificationChange={handleNotificationChange} />
                <TabsContentAppearance />
                <TabsContentHelp />
            </Tabs>
        </div>
    )
}
