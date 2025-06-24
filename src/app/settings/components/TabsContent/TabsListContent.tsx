import { Palette, User } from 'lucide-react'
import { TabsTrigger } from '@/components/ui/tabs'
import { Bell } from 'lucide-react'
import { TabsList } from '@/components/ui/tabs'
import React from 'react'
import { Shield } from 'lucide-react'
import { HelpCircle } from 'lucide-react'

export default function TabsListContent() {
  return (
    <>
      <TabsList className="grid w-full grid-cols-5 mb-6">
        <TabsTrigger value="profile">
          <User className="mr-2 h-4 w-4" />
          Hồ sơ
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="mr-2 h-4 w-4" />
          Thông báo
        </TabsTrigger>
        <TabsTrigger value="privacy">
          <Shield className="mr-2 h-4 w-4" />
          Riêng tư
        </TabsTrigger>
        <TabsTrigger value="appearance">
          <Palette className="mr-2 h-4 w-4" />
          Giao diện
        </TabsTrigger>
        <TabsTrigger value="help">
          <HelpCircle className="mr-2 h-4 w-4" />
          Trợ giúp
        </TabsTrigger>
      </TabsList>
    </>
  )
}
