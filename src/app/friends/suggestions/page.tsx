"use client"

import { useState } from "react"
import {  RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import TabsFilterSuggestionFriends from "./components/TabsFilterSuggestionFriends"
import { friendSuggestions } from "@/lib/mock-data"

// Dữ liệu gợi ý bạn bè mở rộng


export default function FriendSuggestionsPage() {
    const [suggestions, setSuggestions] = useState(friendSuggestions)
    const [filterBy, setFilterBy] = useState("all")
    const [sortBy, setSortBy] = useState("mutual")

    const handleAddFriend = (friendId: string) => {
        setSuggestions((prev) => prev.filter((s) => s.id !== friendId))
        console.log("Adding friend:", friendId)
    }

    const handleRemoveSuggestion = (friendId: string) => {
        setSuggestions((prev) => prev.filter((s) => s.id !== friendId))
        console.log("Removing suggestion:", friendId)
    }

    const handleRefresh = () => {
        // Giả lập làm mới danh sách gợi ý
        setSuggestions(friendSuggestions)
    }

    // Lọc và sắp xếp gợi ý
    const filteredSuggestions = suggestions
        .filter((suggestion) => {
            if (filterBy === "all") return true
            if (filterBy === "work") return suggestion.reason.includes("làm việc")
            if (filterBy === "education") return suggestion.reason.includes("học")
            if (filterBy === "location") return suggestion.reason.includes("gần")
            if (filterBy === "friends") return suggestion.reason.includes("bạn")
            return true
        })
        .sort((a, b) => {
            if (sortBy === "mutual") return b.mutualFriends - a.mutualFriends
            if (sortBy === "name") return a.name.localeCompare(b.name)
            if (sortBy === "online") return (b.isOnline ? 1 : 0) - (a.isOnline ? 1 : 0)
            return 0
        })

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Gợi ý kết bạn</h1>
                    <p className="text-muted-foreground">Những người bạn có thể biết</p>
                </div>
                <Button onClick={handleRefresh} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Làm mới
                </Button>
            </div>

            <TabsFilterSuggestionFriends
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                sortBy={sortBy}
                setSortBy={setSortBy}
                suggestions={suggestions}
                filteredSuggestions={filteredSuggestions}
                handleAddFriend={handleAddFriend}
                handleRemoveSuggestion={handleRemoveSuggestion}

            />
        </div>
    )
}

