import { AvatarFallback } from '@/components/ui/avatar'
import { Avatar } from '@/components/ui/avatar'
import { FriendRequest } from '@/types'
import { AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, X, Users } from 'lucide-react'

export default function ReceivedRequestCard({
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
