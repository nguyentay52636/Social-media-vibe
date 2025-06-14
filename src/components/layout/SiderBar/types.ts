import { LucideIcon } from "lucide-react"

export interface NavItem {
    href: string
    label: string
    icon: LucideIcon
    badge?: number
    color?: string
}

export interface FriendSuggestion {
    id: string
    name: string
    avatar: string
    mutualFriends: number
    workplace?: string
    education?: string
    location?: string
    isOnline: boolean
}

export interface User {
    id: string
    name: string
    avatar: string
} 