"use client"

import { useState } from "react"
import { UserPlus, UserX, MapPin, Briefcase, Users, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dữ liệu gợi ý bạn bè mở rộng
const friendSuggestions = [
    {
        id: "11",
        name: "Đỗ Thị Lan",
        avatar: "/placeholder.svg?height=100&width=100&text=DTL",
        bio: "Marketing Manager | Yêu thích du lịch và ẩm thực",
        location: "Hà Nội, Việt Nam",
        workplace: "Công ty TNHH ABC",
        education: "Đại học Ngoại thương",
        mutualFriends: 8,
        mutualFriendsNames: ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"],
        isOnline: true,
        reason: "Cùng làm việc tại Công ty TNHH ABC",
        friendsCount: 245,
        postsCount: 89,
    },
    {
        id: "12",
        name: "Bùi Văn Nam",
        avatar: "/placeholder.svg?height=100&width=100&text=BVN",
        bio: "Software Engineer | Đam mê công nghệ và game",
        location: "TP.HCM, Việt Nam",
        workplace: "FPT Software",
        education: "Đại học Bách Khoa TP.HCM",
        mutualFriends: 5,
        mutualFriendsNames: ["Phạm Văn D", "Hoàng Thị E"],
        isOnline: false,
        reason: "Cùng học tại Đại học Bách Khoa TP.HCM",
        friendsCount: 156,
        postsCount: 67,
    },
    {
        id: "13",
        name: "Lý Thị Hoa",
        avatar: "/placeholder.svg?height=100&width=100&text=LTH",
        bio: "Giáo viên tiểu học | Yêu thích đọc sách và âm nhạc",
        location: "Hà Nội, Việt Nam",
        workplace: "Trường Tiểu học Kim Liên",
        education: "Đại học Sư phạm Hà Nội",
        mutualFriends: 12,
        mutualFriendsNames: ["Nguyễn Thị F", "Trần Văn G", "Lê Thị H"],
        isOnline: true,
        reason: "Sống gần bạn",
        friendsCount: 198,
        postsCount: 134,
    },
    {
        id: "14",
        name: "Trịnh Văn Đức",
        avatar: "/placeholder.svg?height=100&width=100&text=TVD",
        bio: "Kỹ sư xây dựng | Thích thể thao và du lịch",
        location: "Đà Nẵng, Việt Nam",
        workplace: "Công ty Xây dựng Hòa Bình",
        education: "Đại học Xây dựng",
        mutualFriends: 3,
        mutualFriendsNames: ["Phạm Thị I"],
        isOnline: false,
        reason: "Bạn của bạn bè",
        friendsCount: 87,
        postsCount: 45,
    },
    {
        id: "15",
        name: "Võ Thị Mai",
        avatar: "/placeholder.svg?height=100&width=100&text=VTM",
        bio: "Nhà thiết kế đồ họa | Sáng tạo không giới hạn",
        location: "TP.HCM, Việt Nam",
        workplace: "Studio Design Creative",
        education: "Đại học Mỹ thuật TP.HCM",
        mutualFriends: 7,
        mutualFriendsNames: ["Nguyễn Văn J", "Trần Thị K"],
        isOnline: true,
        reason: "Cùng sở thích thiết kế",
        friendsCount: 312,
        postsCount: 156,
    },
    {
        id: "16",
        name: "Phan Minh Tuấn",
        avatar: "/placeholder.svg?height=100&width=100&text=PMT",
        bio: "Bác sĩ nội khoa | Quan tâm đến sức khỏe cộng đồng",
        location: "Hà Nội, Việt Nam",
        workplace: "Bệnh viện Bạch Mai",
        education: "Đại học Y Hà Nội",
        mutualFriends: 6,
        mutualFriendsNames: ["Lê Văn L", "Hoàng Thị M"],
        isOnline: false,
        reason: "Cùng ngành nghề y tế",
        friendsCount: 234,
        postsCount: 78,
    },
]

export default function FriendSuggestionsPage() {
    const [suggestions, setSuggestions] = useState(friendSuggestions)
    const [filterBy, setFilterBy] = useState("all")
    const [sortBy, setSortBy] = useState("mutual")

    const handleAddFriend = (friendId: string) => {
        setSuggestions((prev) => prev.filter((s) => s.id !== friendId))
        console.log("Adding friend:", friendId)
    }

    const handleRemoveSuggestion = (friendId: string) => {
        setSuggestions((prev) => prev.filter((s) => s.id !== friendId))
        console.log("Removing suggestion:", friendId)
    }

    const handleRefresh = () => {
        // Giả lập làm mới danh sách gợi ý
        setSuggestions(friendSuggestions)
    }

    // Lọc và sắp xếp gợi ý
    const filteredSuggestions = suggestions
        .filter((suggestion) => {
            if (filterBy === "all") return true
            if (filterBy === "work") return suggestion.reason.includes("làm việc")
            if (filterBy === "education") return suggestion.reason.includes("học")
            if (filterBy === "location") return suggestion.reason.includes("gần")
            if (filterBy === "friends") return suggestion.reason.includes("bạn")
            return true
        })
        .sort((a, b) => {
            if (sortBy === "mutual") return b.mutualFriends - a.mutualFriends
            if (sortBy === "name") return a.name.localeCompare(b.name)
            if (sortBy === "online") return (b.isOnline ? 1 : 0) - (a.isOnline ? 1 : 0)
            return 0
        })

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Gợi ý kết bạn</h1>
                    <p className="text-muted-foreground">Những người bạn có thể biết</p>
                </div>
                <Button onClick={handleRefresh} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Làm mới
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Bộ lọc</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Lọc theo</label>
                                <Select value={filterBy} onValueChange={setFilterBy}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn bộ lọc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tất cả</SelectItem>
                                        <SelectItem value="work">Cùng nơi làm việc</SelectItem>
                                        <SelectItem value="education">Cùng trường học</SelectItem>
                                        <SelectItem value="location">Cùng khu vực</SelectItem>
                                        <SelectItem value="friends">Bạn của bạn bè</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Sắp xếp theo</label>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn cách sắp xếp" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mutual">Bạn chung</SelectItem>
                                        <SelectItem value="name">Tên A-Z</SelectItem>
                                        <SelectItem value="online">Đang online</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Thống kê</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Tổng gợi ý:</span>
                                <Badge variant="secondary">{suggestions.length}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Đang online:</span>
                                <Badge variant="secondary">{suggestions.filter((s) => s.isOnline).length}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Cùng nơi làm việc:</span>
                                <Badge variant="secondary">{suggestions.filter((s) => s.reason.includes("làm việc")).length}</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-3">
                    <Tabs defaultValue="grid" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="grid">Dạng lưới</TabsTrigger>
                            <TabsTrigger value="list">Dạng danh sách</TabsTrigger>
                        </TabsList>

                        <TabsContent value="grid" className="animate-fade-in">
                            {filteredSuggestions.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredSuggestions.map((suggestion) => (
                                        <SuggestionCard
                                            key={suggestion.id}
                                            suggestion={suggestion}
                                            onAddFriend={handleAddFriend}
                                            onRemove={handleRemoveSuggestion}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <Card className="p-8 text-center">
                                    <p className="text-muted-foreground">Không có gợi ý nào phù hợp với bộ lọc</p>
                                </Card>
                            )}
                        </TabsContent>

                        <TabsContent value="list" className="animate-fade-in">
                            {filteredSuggestions.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredSuggestions.map((suggestion) => (
                                        <SuggestionListItem
                                            key={suggestion.id}
                                            suggestion={suggestion}
                                            onAddFriend={handleAddFriend}
                                            onRemove={handleRemoveSuggestion}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <Card className="p-8 text-center">
                                    <p className="text-muted-foreground">Không có gợi ý nào phù hợp với bộ lọc</p>
                                </Card>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

function SuggestionCard({
    suggestion,
    onAddFriend,
    onRemove,
}: {
    suggestion: any
    onAddFriend: (id: string) => void
    onRemove: (id: string) => void
}) {
    return (
        <Card className="overflow-hidden animate-fade-in">
            <CardContent className="p-0">
                <div className="relative">
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600" />
                    <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-20 w-20 border-4 border-background">
                        <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                        <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {suggestion.isOnline && (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                    )}
                </div>
                <div className="pt-12 p-4 text-center space-y-3">
                    <div>
                        <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{suggestion.bio}</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-center text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{suggestion.mutualFriends} bạn chung</span>
                        </div>

                        {suggestion.workplace && (
                            <div className="flex items-center justify-center text-xs text-muted-foreground">
                                <Briefcase className="h-3 w-3 mr-1" />
                                <span className="truncate">{suggestion.workplace}</span>
                            </div>
                        )}

                        {suggestion.location && (
                            <div className="flex items-center justify-center text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{suggestion.location}</span>
                            </div>
                        )}

                        <Badge variant="outline" className="text-xs">
                            {suggestion.reason}
                        </Badge>
                    </div>

                    <div className="flex space-x-2">
                        <Button className="flex-1" onClick={() => onAddFriend(suggestion.id)}>
                            <UserPlus className="mr-2 h-4 w-4" />
                            Kết bạn
                        </Button>
                        <Button variant="outline" onClick={() => onRemove(suggestion.id)}>
                            <UserX className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function SuggestionListItem({
    suggestion,
    onAddFriend,
    onRemove,
}: {
    suggestion: any
    onAddFriend: (id: string) => void
    onRemove: (id: string) => void
}) {
    return (
        <Card className="animate-fade-in">
            <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                    <div className="relative">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                            <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {suggestion.isOnline && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{suggestion.bio}</p>

                                <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center">
                                        <Users className="h-3 w-3 mr-1" />
                                        <span>{suggestion.mutualFriends} bạn chung</span>
                                    </div>

                                    {suggestion.workplace && (
                                        <div className="flex items-center">
                                            <Briefcase className="h-3 w-3 mr-1" />
                                            <span className="truncate">{suggestion.workplace}</span>
                                        </div>
                                    )}

                                    {suggestion.location && (
                                        <div className="flex items-center">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            <span>{suggestion.location}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-2">
                                    <Badge variant="outline" className="text-xs">
                                        {suggestion.reason}
                                    </Badge>
                                </div>

                                {suggestion.mutualFriendsNames.length > 0 && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Bạn chung: {suggestion.mutualFriendsNames.slice(0, 2).join(", ")}
                                        {suggestion.mutualFriendsNames.length > 2 &&
                                            ` và ${suggestion.mutualFriendsNames.length - 2} người khác`}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center space-x-2 ml-4">
                                <Button onClick={() => onAddFriend(suggestion.id)}>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    Kết bạn
                                </Button>
                                <Button variant="outline" onClick={() => onRemove(suggestion.id)}>
                                    <UserX className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
