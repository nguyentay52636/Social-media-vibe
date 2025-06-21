import { AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { FriendRequest } from '@/types'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Users } from 'lucide-react'

export default function SentRequestCard({
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