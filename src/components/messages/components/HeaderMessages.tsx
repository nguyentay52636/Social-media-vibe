import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Star, Archive, Trash2, Phone, Video, MoreVertical } from 'lucide-react'

export default function HeaderMessages() {
    return (
        <>
            <div className="p-6 border-b border-white/10 glass-effect">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                                <AvatarImage src={otherUser?.avatar || "/placeholder.svg"} alt={otherUser?.name} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold">
                                    {otherUser?.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            {selectedConversation.isOnline && (
                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                            )}
                        </div>
                        <div>
                            <p className="font-semibold text-lg text-foreground">{otherUser?.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {selectedConversation.isTyping ? (
                                    <span className="text-primary">Đang nhập...</span>
                                ) : selectedConversation.isOnline ? (
                                    "Đang hoạt động"
                                ) : (
                                    `Hoạt động ${otherUser?.lastSeen ? formatTime(otherUser.lastSeen) : "lâu rồi"}`
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl hover:bg-green-500/20 hover:text-green-400"
                        >
                            <Phone className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl hover:bg-blue-500/20 hover:text-blue-400"
                        >
                            <Video className="h-5 w-5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/10">
                                    <MoreVertical className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="glass-effect border-white/20">
                                <DropdownMenuItem className="hover:bg-white/10 rounded-lg m-1">
                                    <Star className="mr-2 h-4 w-4" />
                                    {selectedConversation.isPinned ? "Bỏ ghim" : "Ghim cuộc trò chuyện"}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/10 rounded-lg m-1">
                                    <Archive className="mr-2 h-4 w-4" />
                                    Lưu trữ
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-white/10 rounded-lg m-1">Tắt thông báo</DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-red-500/20 text-red-400 rounded-lg m-1">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Xóa cuộc trò chuyện
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    )
}
