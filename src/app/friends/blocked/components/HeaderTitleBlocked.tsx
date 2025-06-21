import { Shield } from 'lucide-react'
import React from 'react'

export default function HeaderTitleBlocked() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <Shield className="h-8 w-8 text-red-500" />
        Người dùng đã chặn
      </h1>
      <p className="text-muted-foreground mt-2">Quản lý danh sách những người bạn đã chặn</p>
    </div>
  )
}
