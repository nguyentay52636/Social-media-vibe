import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function NotificationsDropdown() {
    return (
        <>
            <div className='cursor-pointer'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 relative"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                3
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
                        <div className="p-4 border-b">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">Thông báo</h3>
                                <Button variant="ghost" size="sm">
                                    Xem tất cả
                                </Button>
                            </div>
                        </div>

                        <div className="p-2">
                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer bg-blue-50 dark:bg-blue-900/20">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=NA" />
                                    <AvatarFallback>NA</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="text-sm">
                                        <span className="font-medium">Nguyễn Văn An</span> đã thích bài viết của bạn
                                    </div>
                                    <div className="text-xs text-blue-600">2 phút trước</div>
                                </div>
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=TB" />
                                    <AvatarFallback>TB</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="text-sm">
                                        <span className="font-medium">Trần Thị Bình</span> đã bình luận bài viết của bạn
                                    </div>
                                    <div className="text-xs text-gray-500">5 phút trước</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=LC" />
                                    <AvatarFallback>LC</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="text-sm">
                                        <span className="font-medium">Lê Minh Cường</span> đã gửi lời mời kết bạn
                                    </div>
                                    <div className="text-xs text-gray-500">10 phút trước</div>
                                </div>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
