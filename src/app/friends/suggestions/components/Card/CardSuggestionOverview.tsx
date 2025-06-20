import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { User } from '@/types'

interface FriendSuggestion extends User {
    reason: string
}

export default function CardSuggestionOverview({ suggestions }: { suggestions: FriendSuggestion[] }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Thống kê</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm">Tổng gợi ý:</span>
                        <Badge variant="secondary">{suggestions.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm">Đang online:</span>
                        <Badge variant="secondary">{suggestions.filter((s) => s.isOnline).length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm">Cùng nơi làm việc:</span>
                        <Badge variant="secondary">{suggestions.filter((s) => s.reason.includes("làm việc")).length}</Badge>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
