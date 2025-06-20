"use client"

import { useState } from "react"
import { Shield, ShieldOff, MoreHorizontal, Search, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { User } from "@/types"

// Mock blocked users data
const blockedUsers: User[] = [
    {
        id: "blocked1",
        name: "Người dùng đã chặn 1",
        username: "blocked1",
        email: "blocked1@example.com",
        avatar: "/placeholder.svg?height=40&width=40&text=B1",
        bio: "Đã bị chặn vì vi phạm quy định cộng đồng",
        location: "Hà Nội, Việt Nam",
        isOnline: false,
        stats: {
            profileViews: 0,
            totalLikes: 0,
            totalComments: 0,
            postViews: 0,
            friendsCount: 0,
        },
    },
    {
        id: "blocked2",
        name: "Người dùng đã chặn 2",
        username: "blocked2",
        email: "blocked2@example.com",
        avatar: "/placeholder.svg?height=40&width=40&text=B2",
        bio: "Đã bị chặn vì spam tin nhắn",
        location: "TP.HCM, Việt Nam",
        isOnline: false,
        stats: {
            profileViews: 0,
            totalLikes: 0,
            totalComments: 0,
            postViews: 0,
            friendsCount: 0,
        },
    },
]

export default function BlockedUsersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [blocked, setBlocked] = useState<User[]>(blockedUsers)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [showUnblockDialog, setShowUnblockDialog] = useState(false)

    const filteredBlocked = blocked.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleUnblock = () => {
        if (selectedUser) {
            setBlocked((prev) => prev.filter((u) => u.id !== selectedUser.id))
            setShowUnblockDialog(false)
            setSelectedUser(null)
        }
    }

    return (
        <div className="container mx-auto px-4 py-6 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Shield className="h-8 w-8 text-red-500" />
                    Người dùng đã chặn
                </h1>
                <p className="text-muted-foreground mt-2">Quản lý danh sách những người bạn đã chặn</p>
            </div>

            {/* Info Alert */}
            <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                    Những người bạn chặn sẽ không thể tìm thấy trang cá nhân của bạn, gửi tin nhắn hoặc tương tác với bài viết của
                    bạn.
                </AlertDescription>
            </Alert>

            {/* Search */}
            <Card className="mb-6">
                <CardContent className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Tìm kiếm người đã chặn..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Blocked Users List */}
            {filteredBlocked.length > 0 ? (
                <div className="space-y-4">
                    {filteredBlocked.map((user) => (
                        <Card key={user.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16 opacity-60">
                                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                        <AvatarFallback className="bg-gray-400 text-white">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg text-muted-foreground">{user.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{user.bio}</p>
                                        {user.location && <p className="text-xs text-muted-foreground mt-1">📍 {user.location}</p>}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setSelectedUser(user)
                                                setShowUnblockDialog(true)
                                            }}
                                            className="hover:bg-green-50 hover:border-green-200 hover:text-green-600"
                                        >
                                            <ShieldOff className="mr-2 h-4 w-4" />
                                            Bỏ chặn
                                        </Button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Báo cáo người dùng</DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        setSelectedUser(user)
                                                        setShowUnblockDialog(true)
                                                    }}
                                                    className="text-green-600 focus:text-green-600"
                                                >
                                                    Bỏ chặn
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="p-12 text-center">
                        <Shield className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            {searchQuery ? "Không tìm thấy người dùng nào" : "Chưa chặn ai"}
                        </h3>
                        <p className="text-muted-foreground">
                            {searchQuery ? "Thử tìm kiếm với từ khóa khác" : "Khi bạn chặn ai đó, họ sẽ xuất hiện ở đây"}
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* Unblock Dialog */}
            <Dialog open={showUnblockDialog} onOpenChange={setShowUnblockDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Bỏ chặn người dùng</DialogTitle>
                        <DialogDescription>
                            Bạn có chắc chắn muốn bỏ chặn <strong>{selectedUser?.name}</strong>? Họ sẽ có thể tìm thấy trang cá nhân
                            của bạn và tương tác với bạn trở lại.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowUnblockDialog(false)}>
                            Hủy
                        </Button>
                        <Button onClick={handleUnblock} className="bg-green-600 hover:bg-green-700">
                            Bỏ chặn
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
