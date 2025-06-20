"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, UserPlus, Shield, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

const friendsNavItems = [
    {
        href: "/friends",
        label: "Tất cả bạn bè",
        icon: Users,
        badge: 156,
        description: "Danh sách bạn bè của bạn",
    },
    {
        href: "/friends/suggestions",
        label: "Gợi ý kết bạn",
        icon: UserPlus,
        badge: 12,
        description: "Những người bạn có thể biết",
    },
    {
        href: "/friends/requests",
        label: "Lời mời kết bạn",
        icon: Clock,
        badge: 3,
        description: "Lời mời đang chờ xử lý",
    },
    {
        href: "/friends/blocked",
        label: "Đã chặn",
        icon: Shield,
        description: "Người dùng đã bị chặn",
    },
]

export default function FriendsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <Suspense fallback={null}>
            <div className="flex min-h-screen bg-background">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-background transition-all duration-300 z-30",
                        "w-80",
                    )}
                >
                    <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                                Bạn bè
                            </h2>
                            <p className="text-sm text-muted-foreground">Quản lý mạng lưới bạn bè của bạn</p>
                        </div>

                        <Separator />

                        {/* Quick Actions */}
                        <div className="space-y-3">
                            <Button className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80">
                                <Search className="h-4 w-4" />
                                Tìm bạn bè
                            </Button>
                            <Button variant="outline" className="w-full justify-start gap-2">
                                <UserPlus className="h-4 w-4" />
                                Mời bạn bè
                            </Button>
                        </div>

                        <Separator />

                        {/* Navigation */}
                        <nav className="space-y-2">
                            {friendsNavItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link key={item.href} href={item.href}>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start h-auto p-4 transition-all duration-200",
                                                "justify-start",
                                                isActive
                                                    ? "bg-primary/10 text-primary border border-primary/30 shadow-sm"
                                                    : "hover:bg-accent/50 hover:scale-[1.02]",
                                            )}
                                        >
                                            <div className={cn("flex items-center gap-3", "flex-row")}>
                                                <item.icon
                                                    className={cn(
                                                        "h-5 w-5 transition-colors",
                                                        isActive ? "text-primary" : "text-muted-foreground",
                                                    )}
                                                />

                                                <div className="flex-1 text-left">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">{item.label}</span>
                                                        {item.badge && (
                                                            <Badge
                                                                variant={isActive ? "default" : "secondary"}
                                                                className={cn(
                                                                    "ml-2 text-xs",
                                                                    isActive && "bg-primary/20 text-primary border-primary/30",
                                                                )}
                                                            >
                                                                {item.badge}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                )
                            })}
                        </nav>

                        <Separator />

                        {/* Stats Card */}
                        <Card className="bg-gradient-to-br from-primary/5 to-pink-500/5 border-primary/20">
                            <CardContent className="p-4">
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold text-primary">156</div>
                                    <div className="text-sm text-muted-foreground">Tổng số bạn bè</div>
                                    <div className="flex items-center justify-center gap-2 text-xs">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-green-600">24 đang online</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 transition-all duration-300 ml-80">{children}</main>
            </div>
        </Suspense>
    )
}
