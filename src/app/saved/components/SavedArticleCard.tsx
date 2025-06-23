import { CardContent } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, BookmarkX } from 'lucide-react'
import { formatDate } from '@/utils/utils'

export default function SavedArticleCard({ article }: { article: any }) {
  const [isSaved, setIsSaved] = useState(true)

  const handleUnsave = () => {
    setIsSaved(false)
  }

  return (
    <Card className={`overflow-hidden animate-fade-in ${!isSaved ? "hidden" : ""}`}>
      <CardContent className="p-0">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{article.category}</Badge>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleUnsave}>
                    <BookmarkX className="mr-2 h-4 w-4" />
                    Bỏ lưu
                  </DropdownMenuItem>
                  <DropdownMenuItem>Chia sẻ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h3 className="font-semibold text-lg mt-2">{article.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-medium">{article.author.name}</p>
                  <p className="text-xs text-muted-foreground">{article.source}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Đã lưu vào {formatDate(article.savedAt)}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Button variant="outline" size="sm">
                Đọc bài viết
              </Button>
              <Button variant="ghost" size="sm" onClick={handleUnsave}>
                <BookmarkX className="mr-2 h-4 w-4" />
                Bỏ lưu
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}