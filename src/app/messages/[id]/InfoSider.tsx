import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Star, Archive, Trash2, Download, ImageIcon } from 'lucide-react'

interface InfoSiderProps {
    otherUser: {
        id: string
        name: string
        avatar: string
        bio: string
    }
}

export default function InfoSider({ otherUser }: InfoSiderProps) {
    return (
        <>
            <div className="w-80 glass-effect border-l border-white/20 p-6 space-y-6">
                <div className="text-center space-y-4">
                    <Avatar className="h-24 w-24 mx-auto ring-4 ring-primary/30">
                        <AvatarImage src={otherUser?.avatar || "/placeholder.svg"} alt={otherUser?.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-2xl">
                            {otherUser?.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-bold text-xl">{otherUser?.name}</h3>
                        <p className="text-sm text-muted-foreground">{otherUser?.bio}</p>
                    </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="space-y-4">
                    <h4 className="font-semibold">Hành động</h4>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start border-white/20">
                            <Star className="mr-2 h-4 w-4" />
                            Ghim cuộc trò chuyện
                        </Button>
                        <Button variant="outline" className="w-full justify-start border-white/20">
                            <Archive className="mr-2 h-4 w-4" />
                            Lưu trữ
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start border-white/20 text-red-400 hover:bg-red-500/20"
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Xóa cuộc trò chuyện
                        </Button>
                    </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="space-y-4">
                    <h4 className="font-semibold">Tệp đã chia sẻ</h4>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10">
                            <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <ImageIcon className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">project-screenshot.png</p>
                                <p className="text-xs text-muted-foreground">2.4 MB</p>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
