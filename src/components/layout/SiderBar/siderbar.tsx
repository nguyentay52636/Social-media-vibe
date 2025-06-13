"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    Users,
    MessageCircle,
    Calendar,
    Bookmark,
    Settings,
    TrendingUp,
    Camera,
    Music,
    Gamepad2,
    ChevronLeft,
    ChevronRight,
    UserPlus,
    Sparkles,
    Heart,
    Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card } from "@/components/ui/card"

import { cn } from "@/lib/utils"

const mainNavItems = [
    { href: "/", label: "Trang chủ", icon: Home },
    { href: "/friends", label: "Bạn bè", icon: Users, badge: 3 },
    { href: "/messages", label: "Tin nhắn", icon: MessageCircle, badge: 2 },
    { href: "/events", label: "Sự kiện", icon: Calendar },
    { href: "/saved", label: "Đã lưu", icon: Bookmark },
]

const shortcutItems = [
    { href: "/trending", label: "Xu hướng", icon: TrendingUp, color: "text-orange-400" },
    { href: "/photos", label: "Ảnh", icon: Camera, color: "text-green-400" },
    { href: "/music", label: "Âm nhạc", icon: Music, color: "text-purple-400" },
    { href: "/games", label: "Trò chơi", icon: Gamepad2, color: "text-blue-400" },
]

const friendSuggestions = [
    {
        id: "11",
        name: "Đỗ Thị Lan",
        avatar: "/placeholder.svg?height=40&width=40&text=DTL",
        mutualFriends: 8,
        workplace: "Công ty ABC",
        isOnline: true,
    },
    {
        id: "12",
        name: "Bùi Văn Nam",
        avatar: "/placeholder.svg?height=40&width=40&text=BVN",
        mutualFriends: 5,
        education: "Đại học Bách Khoa",
        isOnline: false,
    },
    {
        id: "13",
        name: "Lý Thị Hoa",
        avatar: "/placeholder.svg?height=40&width=40&text=LTH",
        mutualFriends: 12,
        location: "Hà Nội",
        isOnline: true,
    },
]

export function Sidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)
    const [showFriendSuggestions, setShowFriendSuggestions] = useState(true)
    const user = {
        id: "1",
        name: "Demo User",
        avatar: "/placeholder.svg?height=40&width=40&text=DU",
    }

    const toggleSidebar = () => {
        const newCollapsed = !collapsed
        setCollapsed(newCollapsed)

        // Dispatch custom event to notify other components
        window.dispatchEvent(
            new CustomEvent("sidebarToggle", {
                detail: { collapsed: newCollapsed },
            }),
        )
    }

    const handleAddFriend = (friendId: string) => {
        console.log("Adding friend:", friendId)
    }



    return (
        <TooltipProvider delayDuration={0}>
            <aside
                className={cn(
                    "fixed left-0 top-16 h-[calc(100vh-4rem)] border-r overflow-y-auto custom-scrollbar transition-all duration-500 ease-in-out z-40 bg-background",
                    collapsed ? "w-24" : "w-80",
                )}
            >
                <div className={cn("space-y-6 relative", collapsed ? "p-3" : "p-6")}>
                    {/* Toggle Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -right-4 top-6 h-8 w-8 rounded-full border shadow-lg hover:scale-110 transition-all duration-300 z-50"
                        onClick={toggleSidebar}
                    >
                        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>

                    {/* User Profile */}
                    <Link
                        href="/profile"
                        className={cn(
                            "flex items-center space-x-4 p-4 rounded-2xl hover:bg-accent/50 transition-all duration-300 group",
                            collapsed && "justify-center space-x-0 p-3",
                        )}
                    >
                        <div className="relative">
                            <Avatar className="h-12 w-12 ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                    {user.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                        </div>
                        {!collapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-semibold truncate text-foreground">{user.name}</p>
                                <p className="text-sm text-muted-foreground truncate">Xem trang cá nhân</p>
                            </div>
                        )}
                    </Link>

                    <Separator />

                    {/* Main Navigation */}
                    <nav className="space-y-2">
                        {mainNavItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Tooltip key={item.href}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start h-14 rounded-2xl transition-all duration-300 group",
                                                collapsed ? "justify-center px-0" : "px-4",
                                                isActive
                                                    ? "bg-primary/10 text-primary border border-primary/30"
                                                    : "hover:bg-accent/50 hover:scale-105",
                                            )}
                                            asChild
                                        >
                                            <Link href={item.href}>
                                                <item.icon
                                                    className={cn(
                                                        "h-6 w-6 transition-all duration-300",
                                                        !collapsed && "mr-4",
                                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                                                    )}
                                                />
                                                {!collapsed && (
                                                    <>
                                                        <span className="flex-1 text-left font-medium">{item.label}</span>
                                                        {item.badge && (
                                                            <Badge className="ml-auto bg-gradient-to-r from-primary to-pink-500 border-0 text-white">
                                                                {item.badge}
                                                            </Badge>
                                                        )}
                                                    </>
                                                )}
                                                {collapsed && item.badge && (
                                                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-primary to-pink-500 border-0 text-xs">
                                                        {item.badge}
                                                    </Badge>
                                                )}
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    {collapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                                </Tooltip>
                            )
                        })}
                    </nav>

                    {/* Settings for collapsed state */}
                    {collapsed && (
                        <>
                            <Separator />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className={cn(
                                            "w-full justify-center h-14 rounded-2xl transition-all duration-300 group px-0",
                                            pathname === "/settings"
                                                ? "bg-primary/10 text-primary border border-primary/30"
                                                : "hover:bg-accent/50 hover:scale-105",
                                        )}
                                        asChild
                                    >
                                        <Link href="/settings">
                                            <Settings className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">Cài đặt</TooltipContent>
                            </Tooltip>
                        </>
                    )}

                    {!collapsed && (
                        <>
                            <Separator />

                            {/* Online Friends */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-2">
                                    <h3 className="text-sm font-semibold text-muted-foreground flex items-center">
                                        <Heart className="h-4 w-4 mr-2 text-green-400" />
                                        Bạn bè đang online
                                    </h3>
                                    <Link href="/friends" className="text-xs text-primary hover:text-primary/80 transition-colors">
                                        Xem tất cả
                                    </Link>
                                </div>
                                {/* <div className="space-y-2">
                                    {onlineFriends.map((friend) => (
                                        <Link
                                            key={friend.id}
                                            href={`/profile/${friend.id}`}
                                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-300 group"
                                        >
                                            <div className="relative">
                                                <Avatar className="h-10 w-10 ring-2 ring-green-500/50 group-hover:ring-green-500 transition-all duration-300">
                                                    <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                                                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
                                                        {friend.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full pulse-glow"></div>
                                            </div>
                                            <span className="text-sm font-medium truncate flex-1 group-hover:text-primary transition-colors">
                                                {friend.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div> */}
                            </div>

                            <Separator />

                            {/* Friend Suggestions */}
                            {showFriendSuggestions && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between px-2">
                                        <h3 className="text-sm font-semibold text-muted-foreground flex items-center">
                                            <Star className="h-4 w-4 mr-2 text-yellow-400" />
                                            Gợi ý kết bạn
                                        </h3>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs h-6 px-2 hover:bg-accent/50 rounded-lg"
                                            onClick={() => setShowFriendSuggestions(false)}
                                        >
                                            Ẩn
                                        </Button>
                                    </div>
                                    <div className="space-y-3">
                                        {friendSuggestions.slice(0, 3).map((suggestion) => (
                                            <Card key={suggestion.id} className="p-4">
                                                <div className="flex items-start space-x-3">
                                                    <div className="relative">
                                                        <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                                                            <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                                                            <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white">
                                                                {suggestion.name.charAt(0)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        {suggestion.isOnline && (
                                                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <Link
                                                            href={`/profile/${suggestion.id}`}
                                                            className="text-sm font-semibold hover:text-primary transition-colors block truncate"
                                                        >
                                                            {suggestion.name}
                                                        </Link>
                                                        <p className="text-xs text-muted-foreground flex items-center">
                                                            <Users className="h-3 w-3 mr-1" />
                                                            {suggestion.mutualFriends} bạn chung
                                                        </p>
                                                        {suggestion.workplace && (
                                                            <p className="text-xs text-muted-foreground/80 truncate mt-1">{suggestion.workplace}</p>
                                                        )}
                                                        <div className="flex items-center space-x-2 mt-3">
                                                            <Button
                                                                size="sm"
                                                                className="h-8 text-xs px-3 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80 border-0 rounded-lg"
                                                                onClick={() => handleAddFriend(suggestion.id)}
                                                            >
                                                                <UserPlus className="h-3 w-3 mr-1" />
                                                                Kết bạn
                                                            </Button>
                                                            <Button variant="outline" size="sm" className="h-8 text-xs px-3 rounded-lg">
                                                                Xóa
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            href="/friends/suggestions"
                                            className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            Xem tất cả gợi ý
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <Separator />

                            {/* Shortcuts */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-muted-foreground px-2 flex items-center">
                                    <Sparkles className="h-4 w-4 mr-2 text-primary" />
                                    Lối tắt
                                </h3>
                                <nav className="space-y-2">
                                    {shortcutItems.map((item) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <Tooltip key={item.href}>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className={cn(
                                                            "w-full justify-start h-12 rounded-xl transition-all duration-300 group",
                                                            isActive
                                                                ? "bg-primary/10 text-primary border border-primary/30"
                                                                : "hover:bg-accent/50 hover:scale-105",
                                                        )}
                                                        asChild
                                                    >
                                                        <Link href={item.href}>
                                                            <item.icon
                                                                className={cn(
                                                                    "h-5 w-5 mr-4 transition-all duration-300",
                                                                    isActive ? "text-primary" : item.color,
                                                                )}
                                                            />
                                                            <span className="text-left font-medium">{item.label}</span>
                                                        </Link>
                                                    </Button>
                                                </TooltipTrigger>
                                            </Tooltip>
                                        )
                                    })}
                                </nav>
                            </div>

                            <Separator />

                            {/* Settings */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className={cn(
                                            "w-full justify-start h-12 rounded-xl transition-all duration-300 group",
                                            pathname === "/settings"
                                                ? "bg-primary/10 text-primary border border-primary/30"
                                                : "hover:bg-accent/50 hover:scale-105",
                                        )}
                                        asChild
                                    >
                                        <Link href="/settings">
                                            <Settings className="h-5 w-5 mr-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                            <span className="font-medium">Cài đặt</span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                            </Tooltip>
                        </>
                    )}
                </div>
            </aside>
        </TooltipProvider>
    )
}
