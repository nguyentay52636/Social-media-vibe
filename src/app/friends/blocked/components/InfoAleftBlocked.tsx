import { Alert } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import React from 'react'
import { AlertDescription } from '@/components/ui/alert'
export default function InfoAleftBlocked() {
    return (
        <>
            <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                    Những người bạn chặn sẽ không thể tìm thấy trang cá nhân của bạn, gửi tin nhắn hoặc tương tác với bài viết của
                    bạn.
                </AlertDescription>
            </Alert>
        </>
    )
}
