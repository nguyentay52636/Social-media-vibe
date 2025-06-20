"use client"

import { useState } from "react"
import type { User, FriendRequest } from "@/types"
import { users, friendRequests, currentUser } from "@/lib/mock-data"
import UnfriendDialog from "./components/Dialog/UnfriendDialog"
import MainContentFriends from "./components/MainContentFriends"
import HeaderFriends from "./components/HeaderFriends"
import SearchAndFilters from "./components/SearchAndFilters"
import BLockFriends from "./components/Dialog/BLockFriends"
import StatsCard from "./suggestions/components/Card/StatsCard"

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
            <StatsCard />

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
            <BLockFriends
                showBlockDialog={showBlockDialog}
                setShowBlockDialog={setShowBlockDialog}
                selectedFriend={selectedFriend}
                handleBlock={handleBlock}
            />
        </div>
    )
}


