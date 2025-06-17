import { Card } from '@/components/ui/card'
import React from 'react'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Camera, Users } from 'lucide-react'

export default function Introduction() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Chào mừng đến với SocialVibe
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Kết nối với bạn bè, chia sẻ khoảnh khắc đẹp và khám phá thế giới xung quanh bạn
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Tin nhắn thời gian thực</h3>
                            <p className="text-sm text-muted-foreground">Chat với bạn bè mọi lúc mọi nơi</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Chia sẻ ảnh & video</h3>
                            <p className="text-sm text-muted-foreground">Lưu giữ những khoảnh khắc đẹp</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Kết nối bạn bè</h3>
                            <p className="text-sm text-muted-foreground">Tìm kiếm và kết bạn mới</p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-center">Tài khoản demo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="p-3 bg-blue-50/10 rounded-lg">
                            <p className="font-medium text-blue-500">Admin</p>
                            <p className="text-sm text-blue-400">admin@example.com / admin123</p>
                        </div>
                        <div className="p-3 bg-green-50/10 rounded-lg">
                            <p className="font-medium text-green-500">User</p>
                            <p className="text-sm text-green-400">user@example.com / password</p>
                        </div>
                        <div className="p-3 bg-purple-50/10 rounded-lg">
                            <p className="font-medium text-purple-500">John</p>
                            <p className="text-sm text-purple-400">john@example.com / john123</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}
