"use client"

import { useState } from "react"
import {
    MessageCircle,
    Phone,
    Video,
    UserPlus,
    MoreHorizontal,
    Search,
    Filter,
    Users,
    UserCheck,
    Clock,
    X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { User, FriendRequest } from "@/types"
import { users, friendRequests, currentUser } from "@/lib/mock-data"
import UnfriendDialog from "./components/Dialog/UnfriendDialog"
import MainContentFriends from "./components/MainContentFriends"
import HeaderFriends from "./components/HeaderFriends"
import SearchAndFilters from "./components/SearchAndFilters"

type FriendsPageProps = {}

export default function FriendsPage({ }: FriendsPageProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("all")
    const [sortBy, setSortBy] = useState("name")
    const [friends, setFriends] = useState<User[]>(users.filter((u) => u.id !== currentUser.id))
    const [requests, setRequests] = useState<FriendRequest[]>(friendRequests)
    const [selectedFriend, setSelectedFriend] = useState<User | null>(null)
    const [showUnfriendDialog, setShowUnfriendDialog] = useState(false)
    const [showBlockDialog, setShowBlockDialog] = useState(false)

    // Filter and sort friends
    const filteredFriends = friends
        .filter((friend) => {
            const matchesSearch = friend.name.toLowerCase().includes(searchQuery.toLowerCase())
            if (!matchesSearch) return false

            switch (filterBy) {
                case "online":
                    return friend.isOnline
                case "offline":
                    return !friend.isOnline
                case "recent":
                    return friend.lastSeen && new Date(friend.lastSeen) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                default:
                    return true
            }
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name)
                case "online":
                    return (b.isOnline ? 1 : 0) - (a.isOnline ? 1 : 0)
                case "recent":
                    const aTime = a.lastSeen ? new Date(a.lastSeen).getTime() : 0
                    const bTime = b.lastSeen ? new Date(b.lastSeen).getTime() : 0
                    return bTime - aTime
                default:
                    return 0
            }
        })

    const handleStartChat = (user: User) => {
        console.log("Starting chat with:", user.name)
        // Navigate to messages
        window.location.href = `/messages`
    }

    const handleCall = (user: User, type: "voice" | "video") => {
        console.log(`Starting ${type} call with:`, user.name)
        // Implement call functionality
    }

    const handleAcceptRequest = (requestId: string) => {
        const request = requests.find((r) => r.id === requestId)
        if (request) {
            setFriends((prev) => [...prev, request.sender])
            setRequests((prev) => prev.filter((r) => r.id !== requestId))
        }
    }

    const handleRejectRequest = (requestId: string) => {
        setRequests((prev) => prev.filter((r) => r.id !== requestId))
    }

    const handleUnfriend = () => {
        if (selectedFriend) {
            setFriends((prev) => prev.filter((f) => f.id !== selectedFriend.id))
            setShowUnfriendDialog(false)
            setSelectedFriend(null)
        }
    }

    const handleBlock = () => {
        if (selectedFriend) {
            setFriends((prev) => prev.filter((f) => f.id !== selectedFriend.id))
            setShowBlockDialog(false)
            setSelectedFriend(null)
            // Add to blocked list logic here
        }
    }

    const onlineFriendsCount = friends.filter((f) => f.isOnline).length
    const pendingRequestsCount = requests.length

    return (
        <div className="container mx-auto px-4 py-6 max-w-7xl">
            {/* Header */}
            <HeaderFriends />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500 rounded-lg">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{friends.length}</p>
                                <p className="text-sm text-blue-600 dark:text-blue-400">Tổng bạn bè</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500 rounded-lg">
                                <UserCheck className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{onlineFriendsCount}</p>
                                <p className="text-sm text-green-600 dark:text-green-400">Đang online</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500 rounded-lg">
                                <Clock className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{pendingRequestsCount}</p>
                                <p className="text-sm text-orange-600 dark:text-orange-400">Lời mời</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500 rounded-lg">
                                <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">24</p>
                                <p className="text-sm text-purple-600 dark:text-purple-400">Tin nhắn mới</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filters */}
            <SearchAndFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Main Content */}
            <MainContentFriends
                friends={friends}
                requests={requests}
                handleStartChat={handleStartChat}
                handleCall={handleCall}
                handleAcceptRequest={handleAcceptRequest}
                handleRejectRequest={handleRejectRequest}
                filteredFriends={filteredFriends}
                searchQuery={searchQuery}
                setSelectedFriend={setSelectedFriend}
                setShowUnfriendDialog={setShowUnfriendDialog}
                setShowBlockDialog={setShowBlockDialog}
            />

            {/* Unfriend Dialog */}
            <UnfriendDialog
                showUnfriendDialog={showUnfriendDialog}
                setShowUnfriendDialog={setShowUnfriendDialog}
                selectedFriend={selectedFriend}
                handleUnfriend={handleUnfriend}
            />

            {/* Block Dialog */}
            <Dialog open={showBlockDialog} onOpenChange={setShowBlockDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Chặn người dùng</DialogTitle>
                        <DialogDescription>
                            Bạn có chắc chắn muốn chặn <strong>{selectedFriend?.name}</strong>? Họ sẽ không thể tìm thấy trang cá nhân
                            của bạn hoặc liên hệ với bạn.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowBlockDialog(false)}>
                            Hủy
                        </Button>
                        <Button variant="destructive" onClick={handleBlock}>
                            Chặn
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}


