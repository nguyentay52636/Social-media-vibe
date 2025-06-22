import { SelectContent } from '@/components/ui/select'
import { SelectValue } from '@/components/ui/select'
import { SelectTrigger } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { CardContent } from '@/components/ui/card'
import { CardHeader } from '@/components/ui/card'
import { CardTitle } from '@/components/ui/card'
import { CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { SelectItem } from '@/components/ui/select'
import { currentUser } from '@/lib/mock-data'

export default function TabsContentPrivacy({ handlePrivacyChange }: { handlePrivacyChange: (key: string, value: string) => void }) {
    return (
        <>
            <TabsContent value="privacy" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Cài đặt riêng tư</CardTitle>
                        <CardDescription>Kiểm soát ai có thể xem thông tin của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Hiển thị hồ sơ</Label>
                            <Select
                                value={currentUser.privacy?.profileVisibility}
                                onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="public">Công khai</SelectItem>
                                    <SelectItem value="friends">Chỉ bạn bè</SelectItem>
                                    <SelectItem value="private">Riêng tư</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Hiển thị bài viết</Label>
                            <Select
                                value={currentUser.privacy?.postVisibility}
                                onValueChange={(value) => handlePrivacyChange("postVisibility", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="public">Công khai</SelectItem>
                                    <SelectItem value="friends">Chỉ bạn bè</SelectItem>
                                    <SelectItem value="private">Riêng tư</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Danh sách bạn bè</Label>
                            <Select
                                value={currentUser.privacy?.friendListVisibility}
                                onValueChange={(value) => handlePrivacyChange("friendListVisibility", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="public">Công khai</SelectItem>
                                    <SelectItem value="friends">Chỉ bạn bè</SelectItem>
                                    <SelectItem value="private">Riêng tư</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Hiển thị trạng thái online</Label>
                                <p className="text-sm text-muted-foreground">Cho phép người khác thấy khi bạn đang online</p>
                            </div>
                            <Switch
                                checked={currentUser.privacy?.onlineStatus}
                                onCheckedChange={(checked) => handlePrivacyChange("onlineStatus", checked.toString())}
                            />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}
