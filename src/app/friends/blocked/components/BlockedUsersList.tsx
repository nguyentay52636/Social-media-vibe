import { Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'

export default function BlockedUsersList() {
    const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
      <Card>
        <CardContent className="p-12 text-center">
          <Shield className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {searchQuery ? "Không tìm thấy người dùng nào" : "Chưa chặn ai"}
          </h3>
          <p className="text-muted-foreground">
            {searchQuery ? "Thử tìm kiếm với từ khóa khác" : "Khi bạn chặn ai đó, họ sẽ xuất hiện ở đây"}
          </p>
        </CardContent>
      </Card>
    </>
  )
}
