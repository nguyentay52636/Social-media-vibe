import { CardHeader } from '@/components/ui/card'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Bookmark } from 'lucide-react'

interface HeaderCardProps {
    userAvatar: string
    userName: string
    isOnline: boolean
    isSaved: boolean
    setIsSaved: (isSaved: boolean) => void
    post: { createdAt: string }
    timeAgo: (date: string) => string
}

export default function HeaderCard({ userAvatar, userName, isOnline, isSaved, setIsSaved, post, timeAgo }: HeaderCardProps) {
    return (
        <>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                    {userName.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            {isOnline && (
                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                            )}
                        </div>
                        <div>
                            <p className="font-semibold text-base text-foreground">{userName}</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span>{timeAgo(post.createdAt)}</span>
                                {isOnline && (
                                    <Badge variant="secondary" className="h-5 px-2 bg-green-500/20 text-green-400 border-green-500/30">
                                        Online
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setIsSaved(!isSaved)}>
                                <Bookmark className="mr-2 h-4 w-4" />
                                {isSaved ? "Bỏ lưu" : "Lưu bài viết"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>Ẩn bài viết</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400">Báo cáo</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
        </>
    )
}
