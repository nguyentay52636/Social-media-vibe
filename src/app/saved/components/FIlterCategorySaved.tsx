import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FIlterCategorySaved({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }: { searchQuery: string, setSearchQuery: (value: string) => void, selectedCategory: string, setSelectedCategory: (value: string) => void, categories: string[] }) {

    return (
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bộ lọc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Tìm kiếm nội dung đã lưu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-medium mb-2">Danh mục</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category === "all" ? "Tất cả" : category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium mb-2">Sắp xếp theo</h3>
                        <div className="space-y-2">
                            <Button variant="ghost" className="w-full justify-start">
                                Mới nhất
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                                Cũ nhất
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
