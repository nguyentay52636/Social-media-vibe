import { CardContent, CardTitle } from '@/components/ui/card'
import { CardHeader } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { User } from '@/types'

export default function OnlineFriendsPreview({ onlineUsers }: { onlineUsers: User[] }) {
    const handleStartChat = (user: User) => {
        console.log(user)
    }
    return (
        <div className="">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            Bạn bè đang online
                        </div>
                        <span className="text-xs text-primary">{onlineUsers.length}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {onlineUsers.slice(0, 4).map((onlineUser) => (
                        <div
                            key={onlineUser.id}
                            className="flex items-center space-x-3 cursor-pointer hover:bg-accent/50 p-2 rounded-xl transition-all duration-300 group"
                            onClick={() => handleStartChat(onlineUser)}
                        >
                            <div className="relative">
                                <Avatar className="h-9 w-9 ring-2 ring-green-500/50 group-hover:ring-green-500 transition-all">
                                    <AvatarImage src={onlineUser.avatar || "/placeholder.svg"} alt={onlineUser.name} />
                                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-xs">
                                        {onlineUser.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-background rounded-full"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate text-foreground group-hover:text-primary transition-colors">
                                    {onlineUser.name}
                                </p>
                                <p className="text-xs text-muted-foreground">Đang hoạt động</p>
                            </div>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        className="w-full mt-3 h-9 text-sm"
                        onClick={() => handleStartChat(onlineUsers[0])}
                    >
                        Xem tất cả ({onlineUsers.length})
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
