import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { User } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, MessageCircle, Phone, Video, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function FriendCard({
    user,
    onStartChat,
    onCall,
    onUnfriend,
    onBlock,
}: {
    user: User
    onStartChat: (user: User) => void
    onCall: (user: User, type: "voice" | "video") => void
    onUnfriend: (user: User) => void
    onBlock: (user: User) => void
}) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
                {/* Cover Photo */}
                <div className="relative h-24 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                </div>

                {/* Profile Section */}
                <div className="relative px-6 pb-6">
                    {/* Avatar */}
                    <div className="flex justify-center -mt-8 mb-4">
                        <div className="relative">
                            <Avatar className="h-16 w-16 border-4 border-background shadow-lg">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-semibold text-lg">
                                    {user.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            {user.isOnline && (
                                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-background rounded-full animate-pulse" />
                            )}
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="text-center mb-4">
                        <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{user.bio}</p>

                        {/* Status */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                            {user.isOnline ? (
                                <Badge
                                    variant="secondary"
                                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                >
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                                    Đang hoạt động
                                </Badge>
                            ) : (
                                <Badge variant="outline" className="text-xs">
                                    {user.lastSeen ? `Hoạt động ${new Date(user.lastSeen).toLocaleDateString("vi-VN")}` : "Offline"}
                                </Badge>
                            )}
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-1 text-xs text-muted-foreground">
                            {user.workplace && (
                                <p className="flex items-center justify-center gap-1">
                                    <span>🏢</span> {user.workplace}
                                </p>
                            )}
                            {user.location && (
                                <p className="flex items-center justify-center gap-1">
                                    <span>📍</span> {user.location}
                                </p>
                            )}
                            {user.mutualFriends && (
                                <p className="flex items-center justify-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {user.mutualFriends} bạn chung
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <Button
                            size="sm"
                            onClick={() => onStartChat(user)}
                            className="flex-1 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80"
                        >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Nhắn tin
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onCall(user, "voice")}
                            className="hover:bg-green-50 hover:border-green-200 hover:text-green-600"
                        >
                            <Phone className="h-4 w-4" />
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onCall(user, "video")}
                            className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                        >
                            <Video className="h-4 w-4" />
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => (window.location.href = `/profile/${user.id}`)}>
                                    Xem trang cá nhân
                                </DropdownMenuItem>
                                <DropdownMenuItem>Tắt thông báo</DropdownMenuItem>
                                <Separator />
                                <DropdownMenuItem onClick={() => onUnfriend(user)} className="text-orange-600 focus:text-orange-600">
                                    Hủy kết bạn
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onBlock(user)} className="text-red-600 focus:text-red-600">
                                    Chặn
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}