import { Camera, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import React from 'react'
    
export default function QuickActions() {
    return (
        <div className="">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">Lối tắt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start h-10 hover:bg-primary/10">
                        <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                        Sự kiện
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 hover:bg-primary/10">
                        <Camera className="h-4 w-4 mr-3 text-green-500" />
                        Ảnh
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 hover:bg-primary/10">
                        <Music className="h-4 w-4 mr-3 text-purple-500" />
                        Âm nhạc
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
