import { UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Users } from 'lucide-react'

export default function HeaderFriends() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
          Bạn bè
        </h1>
        <p className="text-muted-foreground mt-1">Quản lý danh sách bạn bè và lời mời kết bạn</p>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Tìm bạn bè
        </Button>
        <Button className="gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80">
          <Users className="h-4 w-4" />
          Gợi ý kết bạn
        </Button>
      </div>
    </div>
  )
}
