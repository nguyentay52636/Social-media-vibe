import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { ChevronDown, User, Settings, HelpCircle, Monitor, MessageSquare, LogOut } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function UserMenu({ handleLogout }: { handleLogout: () => void }) {
    const currentUser = {
        avatar: "/avatar.png",
        name: "Phuong Tay",
    }
    return (
        <>
            <div className='cursor-pointer'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-10 px-2 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={currentUser.avatar || "/avatar.png"} alt={currentUser.name} />
                                <AvatarFallback>Tay</AvatarFallback>
                            </Avatar>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
                        {/* User Profile Section */}
                        <div className="p-4 border-b">
                            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                                    <AvatarFallback>PT</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{currentUser.name}</p>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-3 justify-start" asChild>
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4" />
                                    Xem tất cả trang cá nhân
                                </Link>
                            </Button>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <Settings className="mr-3 h-5 w-5" />
                                <div className="flex-1">
                                    <div className="font-medium">Cài đặt và quyền riêng tư</div>
                                </div>
                                <ChevronDown className="h-4 w-4 rotate-270" />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <HelpCircle className="mr-3 h-5 w-5" />
                                <div className="flex-1">
                                    <div className="font-medium">Trợ giúp và hỗ trợ</div>
                                </div>
                                <ChevronDown className="h-4 w-4 rotate-270" />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <Monitor className="mr-3 h-5 w-5" />
                                <div className="flex-1">
                                    <div className="font-medium">Màn hình & trợ năng</div>
                                </div>
                                <ChevronDown className="h-4 w-4 rotate-270" />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-3 cursor-pointer">
                                <MessageSquare className="mr-3 h-5 w-5" />
                                <div className="flex-1">
                                    <div className="font-medium">Đóng góp ý kiến</div>
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="p-3 cursor-pointer" onClick={handleLogout}>
                                <LogOut className="mr-3 h-5 w-5" />
                                <div className="font-medium">Đăng xuất</div>
                            </DropdownMenuItem>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t text-xs text-gray-500">
                            <div className="flex flex-wrap gap-2">
                                <span>Quyền riêng tư</span>
                                <span>·</span>
                                <span>Điều khoản</span>
                                <span>·</span>
                                <span>Quảng cáo</span>
                                <span>·</span>
                                <span>Lựa chọn quảng cáo</span>
                                <span>·</span>
                                <span>Cookie</span>
                                <span>·</span>
                                <span>Xem thêm</span>
                                <span>·</span>
                                <span>Meta © 2025</span>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}
