import React from 'react'
import { FileText, Plus, Camera, User, Calendar, ShoppingBag, Megaphone, Users2 } from 'lucide-react'
export default function RightColumDropdown() {
  return (
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
  )
}
