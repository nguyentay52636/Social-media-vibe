import { TabsContent } from '@/components/ui/tabs'
import { Clock, Users, UserPlus } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import FriendCard from './Card/FriendCard'

import type { User, FriendRequest } from '@/types'
import RequestCard from './Card/RequestCard'


export default function MainContentFriends({
    friends,
    requests,
    handleStartChat,
    handleCall,
    handleAcceptRequest,
    handleRejectRequest,
    filteredFriends,
    searchQuery,
    setSelectedFriend,
    setShowUnfriendDialog,
    setShowBlockDialog
}: {
    friends: User[],
    requests: FriendRequest[],
    handleStartChat: (user: User) => void,
    handleCall: (user: User, type: "voice" | "video") => void,
    handleAcceptRequest: (requestId: string) => void,
    handleRejectRequest: (requestId: string) => void,
    filteredFriends: User[],
    searchQuery: string,
    setSelectedFriend: (user: User | null) => void,
    setShowUnfriendDialog: (show: boolean) => void,
    setShowBlockDialog: (show: boolean) => void
}) {
    return (
        <>
            <Tabs defaultValue="friends" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="friends" className="gap-2">
                        <Users className="h-4 w-4" />
                        Bạn bè ({filteredFriends.length})
                    </TabsTrigger>
                    <TabsTrigger value="requests" className="gap-2">
                        <Clock className="h-4 w-4" />
                        Lời mời ({requests.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="friends" className="space-y-4">
                    {filteredFriends.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredFriends.map((friend) => (
                                <FriendCard
                                    key={friend.id}
                                    user={friend}
                                    onStartChat={handleStartChat}
                                    onCall={handleCall}
                                    onUnfriend={(user) => {
                                        setSelectedFriend(user)
                                        setShowUnfriendDialog(true)
                                    }}
                                    onBlock={(user) => {
                                        setSelectedFriend(user)
                                        setShowBlockDialog(true)
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <Card>
                            <CardContent className="p-12 text-center">
                                <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">
                                    {searchQuery ? "Không tìm thấy bạn bè nào" : "Chưa có bạn bè nào"}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {searchQuery ? "Thử tìm kiếm với từ khóa khác" : "Hãy bắt đầu kết bạn để mở rộng mạng lưới của bạn"}
                                </p>
                                <Button className="gap-2">
                                    <UserPlus className="h-4 w-4" />
                                    Tìm bạn bè
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="requests" className="space-y-4">
                    {requests.length > 0 ? (
                        <div className="space-y-4">
                            {requests.map((request) => (
                                <RequestCard
                                    key={request.id}
                                    request={request}
                                    onAccept={handleAcceptRequest}
                                    onReject={handleRejectRequest}
                                />
                            ))}
                        </div>
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
            </Tabs>
        </>
    )
}
