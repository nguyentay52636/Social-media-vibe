import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { SelectContent } from '@/components/ui/select'
import { SelectValue } from '@/components/ui/select'
import { SelectItem } from '@/components/ui/select'
import { Select } from '@/components/ui/select'
import React from 'react'
import { SelectTrigger } from '@/components/ui/select'
export default function CardFilter({ filterBy, setFilterBy, sortBy, setSortBy }: { filterBy: string, setFilterBy: (filterBy: string) => void, sortBy: string, setSortBy: (sortBy: string) => void }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Bộ lọc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Lọc theo</label>
                        <Select value={filterBy} onValueChange={setFilterBy}>
                            <SelectTrigger>
                                <SelectValue placeholder="Chọn bộ lọc" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tất cả</SelectItem>
                                <SelectItem value="work">Cùng nơi làm việc</SelectItem>
                                <SelectItem value="education">Cùng trường học</SelectItem>
                                <SelectItem value="location">Cùng khu vực</SelectItem>
                                <SelectItem value="friends">Bạn của bạn bè</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Sắp xếp theo</label>
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger>
                                <SelectValue placeholder="Chọn cách sắp xếp" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mutual">Bạn chung</SelectItem>
                                <SelectItem value="name">Tên A-Z</SelectItem>
                                <SelectItem value="online">Đang online</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
