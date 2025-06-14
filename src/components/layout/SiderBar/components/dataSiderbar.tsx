import {
    Home,
    Users,
    MessageCircle,
    Calendar,
    Bookmark,
    TrendingUp,
    Camera,
    Music,
    Gamepad2,
} from "lucide-react"
import { NavItem, FriendSuggestion } from "../types"

export const mainNavItems: NavItem[] = [
    { href: "/", label: "Trang chủ", icon: Home },
    { href: "/friends", label: "Bạn bè", icon: Users, badge: 3 },
    { href: "/messages", label: "Tin nhắn", icon: MessageCircle, badge: 2 },
    { href: "/events", label: "Sự kiện", icon: Calendar },
    { href: "/saved", label: "Đã lưu", icon: Bookmark },
]

export const shortcutItems: NavItem[] = [
    { href: "/trending", label: "Xu hướng", icon: TrendingUp, color: "text-orange-400" },
    { href: "/photos", label: "Ảnh", icon: Camera, color: "text-green-400" },
    { href: "/music", label: "Âm nhạc", icon: Music, color: "text-purple-400" },
    { href: "/games", label: "Trò chơi", icon: Gamepad2, color: "text-blue-400" },
]

export const friendSuggestions: FriendSuggestion[] = [
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