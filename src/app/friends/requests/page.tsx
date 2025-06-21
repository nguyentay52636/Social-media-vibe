"use client"

import { useState } from "react"
import type { FriendRequest } from "@/types"
import { friendRequests, sentRequests } from "@/lib/mock-data"
import StatstRequest from "./components/StatstRequest"
import TabsContentRequest from "./components/TabsContentRequest"
import HeaderRequest from "./components/HeaderRequest"

// Mock sent requests


export default function FriendRequestsPage() {
    const [receivedRequests, setReceivedRequests] = useState<FriendRequest[]>(friendRequests)
    const [sentRequestsList, setSentRequestsList] = useState<FriendRequest[]>(sentRequests)

    const handleAcceptRequest = (requestId: string) => {
        setReceivedRequests((prev) => prev.filter((r) => r.id !== requestId))
        // Add to friends list logic here
    }

    const handleRejectRequest = (requestId: string) => {
        setReceivedRequests((prev) => prev.filter((r) => r.id !== requestId))
    }

    const handleCancelSentRequest = (requestId: string) => {
        setSentRequestsList((prev) => prev.filter((r) => r.id !== requestId))
    }

    return (
        <div className="container mx-auto px-4 py-6 max-w-6xl">
            {/* Header */}
            <HeaderRequest />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatstRequest receivedRequests={receivedRequests.length} sentRequestsList={sentRequestsList.length} />
            </div>

            {/* Main Content */}
            <TabsContentRequest
                receivedRequests={receivedRequests}
                sentRequestsList={sentRequestsList}
                handleAcceptRequest={handleAcceptRequest}
                handleRejectRequest={handleRejectRequest}
                handleCancelSentRequest={handleCancelSentRequest}
            />
        </div>
    )
}


