import { BarChart3, Briefcase, Target, Calendar, Users, Users2, Newspaper, Gamepad2 } from 'lucide-react'
import React from 'react'
export default function LeftColumDropdown() {
  return (
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
  )
}
