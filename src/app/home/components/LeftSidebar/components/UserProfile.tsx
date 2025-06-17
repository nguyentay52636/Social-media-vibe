import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardContent } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import React from 'react'



export default function UserProfile() {
    return (
        <div className="">
            <Card>
                <CardContent className="p-6">
                    <div className="text-center space-y-4">
                        <div className="relative inline-block">
                            <Avatar className="h-20 w-20 mx-auto ring-4 ring-primary/30 shadow-lg">
                                <AvatarImage src="/placeholder.svg?height=80&width=80&text=User" alt={user.name} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-xl font-bold">
                                    {user.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-3 border-background rounded-full shadow-sm"></div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-foreground">{user.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Lập trình viên Full-stack | Yêu thích công nghệ và du lịch
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                            <div className="text-center">
                                <p className="font-bold text-xl bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                                    234
                                </p>
                                <p className="text-xs text-muted-foreground">Bạn bè</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-xl bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                                    150
                                </p>
                                <p className="text-xs text-muted-foreground">Bài đăng</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
