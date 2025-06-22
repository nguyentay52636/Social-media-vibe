import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { currentUser } from '@/lib/mock-data'

export default function TabsContentNotifications({ handleNotificationChange }: { handleNotificationChange: (key: string, value: boolean) => void }) {
  return (
    <>
      <TabsContent value="notifications" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Cài đặt thông báo</CardTitle>
            <CardDescription>Chọn loại thông báo bạn muốn nhận</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Lượt thích</Label>
                <p className="text-sm text-muted-foreground">Nhận thông báo khi ai đó thích bài viết của bạn</p>
              </div>
              <Switch
                checked={currentUser.notifications?.likes}
                onCheckedChange={(checked) => handleNotificationChange("likes", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Bình luận</Label>
                <p className="text-sm text-muted-foreground">Nhận thông báo khi ai đó bình luận bài viết của bạn</p>
              </div>
              <Switch
                checked={currentUser.notifications?.comments}
                onCheckedChange={(checked) => handleNotificationChange("comments", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Tin nhắn</Label>
                <p className="text-sm text-muted-foreground">Nhận thông báo khi có tin nhắn mới</p>
              </div>
              <Switch
                checked={currentUser.notifications?.messages}
                onCheckedChange={(checked) => handleNotificationChange("messages", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Lời mời kết bạn</Label>
                <p className="text-sm text-muted-foreground">Nhận thông báo khi có lời mời kết bạn mới</p>
              </div>
              <Switch
                checked={currentUser.notifications?.friendRequests}
                onCheckedChange={(checked) => handleNotificationChange("friendRequests", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sự kiện</Label>
                <p className="text-sm text-muted-foreground">Nhận thông báo về sự kiện và hoạt động</p>
              </div>
              <Switch
                checked={currentUser.notifications?.events}
                onCheckedChange={(checked) => handleNotificationChange("events", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  )
}
