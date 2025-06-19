import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Briefcase, Calendar, FileText, Plus, Grid3X3, User, Search, Target, Users, Camera, Megaphone, Users2, ShoppingBag, Newspaper, Gamepad2, BarChart3 } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'

export default function MenuDropdown() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800">
                        <Grid3X3 className="w-5 h-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-0" align="end" forceMount>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Menu</h2>

                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="search"
                                placeholder="Tìm kiếm trong menu"
                                className="pl-10 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div>
                                <h3 className="font-semibold mb-4">Chuyên nghiệp</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <BarChart3 className="w-8 h-8 text-blue-600" />
                                        <div>
                                            <div className="font-medium">Trình quản lý quảng cáo</div>
                                            <div className="text-sm text-gray-500">Tạo, quản lý và theo dõi hiệu quả quảng cáo.</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Briefcase className="w-8 h-8 text-purple-600" />
                                        <div>
                                            <div className="font-medium">Công cụ chuyên nghiệp</div>
                                            <div className="text-sm text-gray-500">
                                                Xem thông tin chi tiết, tạo quảng cáo và khám phá các công cụ quản lý hỗ trợ bạn tiếp cận
                                                đối tượng.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Target className="w-8 h-8 text-green-600" />
                                        <div>
                                            <div className="font-medium">Trung tâm quảng cáo</div>
                                            <div className="text-sm text-gray-500">
                                                Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo bạn tạo trên Trang.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-semibold mb-4 mt-6">Xã hội</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Calendar className="w-8 h-8 text-red-600" />
                                        <div>
                                            <div className="font-medium">Sự kiện</div>
                                            <div className="text-sm text-gray-500">
                                                Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Users className="w-8 h-8 text-blue-600" />
                                        <div>
                                            <div className="font-medium">Bạn bè</div>
                                            <div className="text-sm text-gray-500">Tìm kiếm bạn bè hoặc những người bạn có thể biết.</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Users2 className="w-8 h-8 text-green-600" />
                                        <div>
                                            <div className="font-medium">Nhóm</div>
                                            <div className="text-sm text-gray-500">Kết nối với những người cùng chung sở thích.</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Newspaper className="w-8 h-8 text-blue-600" />
                                        <div>
                                            <div className="font-medium">Bảng tin</div>
                                            <div className="text-sm text-gray-500">
                                                Xem bài viết phù hợp của những người và Trang bạn theo dõi.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-semibold mb-4 mt-6">Giải trí</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Gamepad2 className="w-8 h-8 text-purple-600" />
                                        <div>
                                            <div className="font-medium">Chơi game</div>
                                            <div className="text-sm text-gray-500">Chơi game yêu thích và khám phá game mới.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <h3 className="font-semibold mb-4">Tạo</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <FileText className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Đăng</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Plus className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Tin</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Camera className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Thước phim</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <User className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Sự kiện trong đời</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <FileText className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Trang</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Megaphone className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Quảng cáo</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Users2 className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Nhóm</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <Calendar className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Sự kiện</div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                        <ShoppingBag className="w-6 h-6 text-gray-600" />
                                        <div className="font-medium">Bài niêm yết trên Marketplace</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
