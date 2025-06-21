import { Card, CardContent } from '@/components/ui/card'
import { Clock, UserPlus, Check } from 'lucide-react'
import React from 'react'

export default function StatstRequest({
    receivedRequests,
    sentRequestsList,
}: {
    receivedRequests: number
    sentRequestsList: number
}) {
    return (
        <>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500 rounded-lg">
                            <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{receivedRequests}</p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Lời mời nhận</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500 rounded-lg">
                            <UserPlus className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{sentRequestsList}</p>
                            <p className="text-sm text-orange-600 dark:text-orange-400">Lời mời gửi</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500 rounded-lg">
                            <Check className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-green-700 dark:text-green-300">12</p>
                            <p className="text-sm text-green-600 dark:text-green-400">Đã chấp nhận</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
