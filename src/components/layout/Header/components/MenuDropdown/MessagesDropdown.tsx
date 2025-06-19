import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function MessagesDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 relative"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Tin nhắn</h3>
              <Button variant="ghost" size="sm">
                Xem tất cả
              </Button>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48&text=NA" />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <div className="font-medium">Nguyễn Văn An</div>
                <div className="text-sm text-gray-500">Bạn: Chào bạn! · 2 phút</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48&text=TB" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <div className="font-medium">Trần Thị Bình</div>
                <div className="text-sm text-gray-500">Hẹn gặp lại nhé! · 5 phút</div>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48&text=LC" />
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Lê Minh Cường</div>
                <div className="text-sm text-gray-500">Cảm ơn bạn nhiều! · 1 giờ</div>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
