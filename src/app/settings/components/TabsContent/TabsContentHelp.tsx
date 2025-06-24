import { CardContent } from '@/components/ui/card'
import { CardDescription } from '@/components/ui/card'
import { CardHeader } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'

export default function TabsContentHelp() {
    return (
        <>
            <TabsContent value="help" className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Trợ giúp & Hỗ trợ</CardTitle>
                        <CardDescription>Tìm câu trả lời cho câu hỏi của bạn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            Câu hỏi thường gặp
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Liên hệ hỗ trợ
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Chính sách bảo mật
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Điều khoản sử dụng
                        </Button>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}
