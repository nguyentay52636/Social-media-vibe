import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { Search } from 'lucide-react'

export default function ActionsBlocked() {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <>
            <Card className="mb-6">
                <CardContent className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Tìm kiếm người đã chặn..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
