"use client"

import { useState } from "react"
import { Clock, UserPlus, X, Users, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { FriendRequest } from "@/types"
import { friendRequests } from "@/lib/mock-data"

// Mock sent requests
const sentRequests: FriendRequest[] = [
    {
        id: "sent1",
        senderId: "1",
        sender: {
            id: "1",
            name: "Bạn",
            email: "you@example.com",
            username: "you",
            stats: {
                profileViews: 0,
                totalLikes: 0,
                totalComments: 0,
                postViews: 0,
                friendsCount: 0,
            },
        },
        receiverId: "sent1",
        receiver: {
            id: "sent1",
            name: "Nguyễn Thị Mai",
            username: "maintn",
            email: "mai@example.com",
            avatar: "/placeholder.svg?height=40&width=40&text=NTM",
            bio: "Graphic Designer | Yêu thích nghệ thuật và thiết kế",
            location: "Hà Nội, Việt Nam",
            workplace: "Creative Studio",
            mutualFriends: 5,
            isOnline: true,
            stats: {
                profileViews: 0,
                totalLikes: 0,
                totalComments: 0,
                postViews: 0,
                friendsCount: 0,
            },
        },
        status: "pending" as const,
        createdAt: "2024-06-09T10:30:00Z",
    },
    {
        id: "sent2",
        senderId: "1",
        sender: {
            id: "1",
            name: "Bạn",
            email: "you@example.com",
            username: "you",
            stats: {
                profileViews: 0,
                totalLikes: 0,
                totalComments: 0,
                postViews: 0,
                friendsCount: 0,
            },
        },
        receiverId: "sent2",
        receiver: {
            id: "sent2",
            name: "Trần Văn Hùng",
            username: "hungtv",
            email: "hung@example.com",
            avatar: "/placeholder.svg?height=40&width=40&text=TVH",
            bio: "Software Developer | Đam mê công nghệ",
            location: "TP.HCM, Việt Nam",
            workplace: "Tech Company",
            mutualFriends: 3,
            isOnline: false,
            stats: {
                profileViews: 0,
                totalLikes: 0,
                totalComments: 0,
                postViews: 0,
                friendsCount: 0,
            },
        },
        status: "pending" as const,
        createdAt: "2024-06-08T15:20:00Z",
    },
]

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
            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Clock className="h-8 w-8 text-primary" />
                    Lời mời kết bạn
                </h1>
                <p className="text-muted-foreground mt-2">Quản lý lời mời kết bạn đã nhận và đã gửi</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500 rounded-lg">
                                <Clock className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{receivedRequests.length}</p>
                                <p className="text-sm text-blue-600 dark:text-blue-400">Lời mời nhận</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500 rounded-lg">
                                <UserPlus className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{sentRequestsList.length}</p>
                                <p className="text-sm text-orange-600 dark:text-orange-400">Lời mời gửi</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500 rounded-lg">
                                <Check className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-green-700 dark:text-green-300">12</p>
                                <p className="text-sm text-green-600 dark:text-green-400">Đã chấp nhận</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <Tabs defaultValue="received" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="received" className="gap-2">
                        <Clock className="h-4 w-4" />
                        Lời mời nhận ({receivedRequests.length})
                    </TabsTrigger>
                    <TabsTrigger value="sent" className="gap-2">
                        <UserPlus className="h-4 w-4" />
                        Lời mời gửi ({sentRequestsList.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="received" className="space-y-4">
                    {receivedRequests.length > 0 ? (
                        <>
                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>Bạn có {receivedRequests.length} lời mời kết bạn đang chờ xử lý</AlertDescription>
                            </Alert>

                            <div className="space-y-4">
                                {receivedRequests.map((request) => (
                                    <ReceivedRequestCard
                                        key={request.id}
                                        request={request}
                                        onAccept={handleAcceptRequest}
                                        onReject={handleRejectRequest}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <Card>
                            <CardContent className="p-12 text-center">
                                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Không có lời mời kết bạn nào</h3>
                                <p className="text-muted-foreground">Khi có người gửi lời mời kết bạn, chúng sẽ xuất hiện ở đây</p>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="sent" className="space-y-4">
                    {sentRequestsList.length > 0 ? (
                        <div className="space-y-4">
                            {sentRequestsList.map((request) => (
                                <SentRequestCard key={request.id} request={request} onCancel={handleCancelSentRequest} />
                            ))}
                        </div>
                    ) : (
                        <Card>
                            <CardContent className="p-12 text-center">
                                <UserPlus className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Chưa gửi lời mời nào</h3>
                                <p className="text-muted-foreground">Các lời mời kết bạn bạn gửi sẽ xuất hiện ở đây</p>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}

function ReceivedRequestCard({
    request,
    onAccept,
    onReject,
}: {
    request: FriendRequest
    onAccept: (id: string) => void
    onReject: (id: string) => void
}) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={request.sender.avatar || "/placeholder.svg"} alt={request.sender.name} />
                            <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                {request.sender.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        {request.sender.isOnline && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{request.sender.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{request.sender.bio}</p>

                                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                                    {request.sender.workplace && (
                                        <span className="flex items-center gap-1">🏢 {request.sender.workplace}</span>
                                    )}
                                    {request.sender.location && (
                                        <span className="flex items-center gap-1">📍 {request.sender.location}</span>
                                    )}
                                    {request.sender.mutualFriends && (
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {request.sender.mutualFriends} bạn chung
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                        {new Date(request.createdAt).toLocaleDateString("vi-VN")}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                        Lời mời kết bạn
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                                <Button
                                    onClick={() => onAccept(request.id)}
                                    className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80"
                                >
                                    <Check className="mr-2 h-4 w-4" />
                                    Chấp nhận
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => onReject(request.id)}
                                    className="hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                                >
                                    <X className="mr-2 h-4 w-4" />
                                    Từ chối
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function SentRequestCard({
    request,
    onCancel,
}: {
    request: FriendRequest
    onCancel: (id: string) => void
}) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={request.receiver.avatar || "/placeholder.svg"} alt={request.receiver.name} />
                            <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                {request.receiver.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        {request.receiver.isOnline && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{request.receiver.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{request.receiver.bio}</p>

                                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                                    {request.receiver.workplace && (
                                        <span className="flex items-center gap-1">🏢 {request.receiver.workplace}</span>
                                    )}
                                    {request.receiver.location && (
                                        <span className="flex items-center gap-1">📍 {request.receiver.location}</span>
                                    )}
                                    {request.receiver.mutualFriends && (
                                        <span className="flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {request.receiver.mutualFriends} bạn chung
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                        Gửi {new Date(request.createdAt).toLocaleDateString("vi-VN")}
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                                    >
                                        Đang chờ phản hồi
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                                <Button
                                    variant="outline"
                                    onClick={() => onCancel(request.id)}
                                    className="hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                                >
                                    <X className="mr-2 h-4 w-4" />
                                    Hủy lời mời
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
