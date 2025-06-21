import { Clock } from 'lucide-react'
import React from 'react'

export default function HeaderRequest() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                Lời mời kết bạn
            </h1>
            <p className="text-muted-foreground mt-2">Quản lý lời mời kết bạn đã nhận và đã gửi</p>
        </div>
    )
}
