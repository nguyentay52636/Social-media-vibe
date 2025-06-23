import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, BookmarkX } from "lucide-react"

export default function SavedPostCard({ post }: { post: any }) {
    const [isSaved, setIsSaved] = useState(true)

    const handleUnsave = () => {
        setIsSaved(false)
    }

    return (
        <Card className={`overflow-hidden animate-fade-in ${!isSaved ? "hidden" : ""}`}>
            <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-sm">{post.author.name}</p>
                                <p className="text-xs text-muted-foreground">Đã lưu vào {formatDate(post.savedAt)}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Badge variant="outline">{post.category}</Badge>
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
                                        <DropdownMenuItem>Báo cáo</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <p className="text-sm mt-2">{post.content}</p>
                        {post.images && post.images.length > 0 && (
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                {post.images.slice(0, 2).map((image: string, index: number) => (
                                    <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                                        <img
                                            src={image || "/placeholder.svg"}
                                            alt={`Post image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                {post.images.length > 2 && (
                                    <div className="col-span-2 text-xs text-muted-foreground text-center mt-1">
                                        +{post.images.length - 2} ảnh khác
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="flex items-center justify-between mt-4">
                            <Button variant="outline" size="sm">
                                Xem bài viết
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