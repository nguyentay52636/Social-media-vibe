import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { SelectItem } from '@/components/ui/select'
import { SelectContent } from '@/components/ui/select'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { SelectTrigger } from '@/components/ui/select'
import { SelectValue } from '@/components/ui/select'

export default function TabsContentAppearance() {
  return (
    <>
      <TabsContent value="appearance" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Giao diện</CardTitle>
            <CardDescription>Tùy chỉnh giao diện theo sở thích của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Chế độ hiển thị</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Sáng</SelectItem>
                  <SelectItem value="dark">Tối</SelectItem>
                  <SelectItem value="system">Theo hệ thống</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  )
}
