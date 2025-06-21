import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, UserPlus, AlertCircle } from 'lucide-react'
import React from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import ReceivedRequestCard from './Card/ReceivedRequestCard'

import { FriendRequest } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import SentRequestCard from './Card/ SentRequestCard'

export default function TabsContentRequest({
    receivedRequests,
    sentRequestsList,
    handleAcceptRequest,
    handleRejectRequest,
    handleCancelSentRequest,
}: {
    receivedRequests: FriendRequest[]
    sentRequestsList: FriendRequest[]
    handleAcceptRequest: (requestId: string) => void
    handleRejectRequest: (requestId: string) => void
    handleCancelSentRequest: (requestId: string) => void
}) {
    return (
        <>
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
        </>
    )
}
