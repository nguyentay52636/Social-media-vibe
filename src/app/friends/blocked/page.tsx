"use client"

import { useState } from "react"
import { Shield, ShieldOff, MoreHorizontal, Search, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


import type { User } from "@/types"
import HeaderTitleBlocked from "./components/HeaderTitleBlocked"
import InfoAleftBlocked from "./components/InfoAleftBlocked"
import ActionsBlocked from "./components/ActionsBlocked"
import BlockedUsersList from "./components/BlockedUsersList"
import DIalogUnblocked from "./components/Dialog/DIalogUnblocked"
// Mock blocked users data
const blockedUsers: User[] = [
    {
        id: "blocked1",
        name: "Người dùng đã chặn 1",
        username: "blocked1",
        email: "blocked1@example.com",
        avatar: "/placeholder.svg?height=40&width=40&text=B1",
        bio: "Đã bị chặn vì vi phạm quy định cộng đồng",
        location: "Hà Nội, Việt Nam",
        isOnline: false,
        stats: {
            profileViews: 0,
            totalLikes: 0,
            totalComments: 0,
            postViews: 0,
            friendsCount: 0,
        },
    },
    {
        id: "blocked2",
        name: "Người dùng đã chặn 2",
        username: "blocked2",
        email: "blocked2@example.com",
        avatar: "/placeholder.svg?height=40&width=40&text=B2",
        bio: "Đã bị chặn vì spam tin nhắn",
        location: "TP.HCM, Việt Nam",
        isOnline: false,
        stats: {
            profileViews: 0,
            totalLikes: 0,
            totalComments: 0,
            postViews: 0,
            friendsCount: 0,
        },
    },
]

export default function BlockedUsersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [blocked, setBlocked] = useState<User[]>(blockedUsers)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [showUnblockDialog, setShowUnblockDialog] = useState(false)

    const filteredBlocked = blocked.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleUnblock = () => {
        if (selectedUser) {
            setBlocked((prev) => prev.filter((u) => u.id !== selectedUser.id))
            setShowUnblockDialog(false)
            setSelectedUser(null)
        }
    }

    return (
        <div className="container mx-auto px-4 py-6 max-w-4xl">
            {/* Header */}
            <HeaderTitleBlocked />

            {/* Info Alert */}
            <InfoAleftBlocked />

            {/* Search */}
            <ActionsBlocked />

            {/* Blocked Users List */}
            {filteredBlocked.length > 0 ? (
                <div className="space-y-4">
                    {filteredBlocked.map((user) => (
                        <Card key={user.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16 opacity-60">
                                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                        <AvatarFallback className="bg-gray-400 text-white">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg text-muted-foreground">{user.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{user.bio}</p>
                                        {user.location && <p className="text-xs text-muted-foreground mt-1">📍 {user.location}</p>}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setSelectedUser(user)
                                                setShowUnblockDialog(true)
                                            }}
                                            className="hover:bg-green-50 hover:border-green-200 hover:text-green-600"
                                        >
                                            <ShieldOff className="mr-2 h-4 w-4" />
                                            Bỏ chặn
                                        </Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Báo cáo người dùng</DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        setSelectedUser(user)
                                                        setShowUnblockDialog(true)
                                                    }}
                                                    className="text-green-600 focus:text-green-600"
                                                >
                                                    Bỏ chặn
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <BlockedUsersList />
            )}

            {/* Unblock Dialog */}
            <DIalogUnblocked showUnblockDialog={showUnblockDialog} setShowUnblockDialog={setShowUnblockDialog} selectedUser={selectedUser} handleUnblock={handleUnblock} />
        </div>
    )
}
