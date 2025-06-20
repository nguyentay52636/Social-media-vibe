import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Clock, MessageCircle, UserCheck } from 'lucide-react'
import { Users } from 'lucide-react'
import React from 'react'
import { friendSuggestions } from '@/lib/mock-data'


export default function StatsCard() {
    const friends = friendSuggestions
    const onlineFriendsCount = friends.filter((f) => f.isOnline).length
    // const pendingRequestsCount = friends.filter((f) => f.isPending).length
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500 rounded-lg">
                                <Users className="h-5        w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{friends.length}</p>
                                <p className="text-sm text-blue-600 dark:text-blue-400">Tổng bạn bè</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500 rounded-lg">
                                <UserCheck className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{onlineFriendsCount}</p>
                                <p className="text-sm text-green-600 dark:text-green-400">Đang online</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500 rounded-lg">
                                <Clock className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{/* pendingRequestsCount */}</p>
                                <p className="text-sm text-orange-600 dark:text-orange-400">Lời mời</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500 rounded-lg">
                                <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">24</p>
                                <p className="text-sm text-purple-600 dark:text-purple-400">Tin nhắn mới</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
