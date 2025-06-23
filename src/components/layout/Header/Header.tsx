"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Bell, MessageCircle, Settings, LogOut, User, Star, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"


export function Header() {
    const [searchQuery, setSearchQuery] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", searchQuery)
    }

    const handleLogout = () => {
        console.log("Logout clicked")
        // Clear user data and redirect to login
        localStorage.removeItem("user")
        window.location.href = "/auth/login"
    }

    return (
        <header className="flex justify-center items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">
                        Social<span className="text-pink-500">Vibe</span>
                    </span>
                </Link>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <form onSubmit={handleSearch} className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Tìm kiếm bạn bè, bài viết..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 w-full"
                        />
                    </form>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Notifications */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="w-5 h-5" />
                                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                                    3
                                </Badge>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <div className="flex items-center space-x-3">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                                        <AvatarFallback>A</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm">Anna đã thích bài viết của bạn</p>
                                        <p className="text-xs text-muted-foreground">2 phút trước</p>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="flex items-center space-x-3">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="/avatar.png" />
                                        <AvatarFallback>B</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm">Bob đã bình luận bài viết của bạn</p>
                                        <p className="text-xs text-muted-foreground">5 phút trước</p>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Messages */}
                    <Button variant="ghost" size="icon" className="relative" asChild>
                        <Link href="/messages">
                            <MessageCircle className="w-5 h-5" />
                            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">2</Badge>
                        </Link>
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">Demo User</p>
                                    <p className="text-xs leading-none text-muted-foreground">demo@example.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Trang cá nhân</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/settings">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Cài đặt</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Đăng xuất</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <div className="container px-4 py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                                type="text"
                                placeholder="Tìm kiếm..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 w-full"
                            />
                        </form>

                        {/* Theme Toggle Mobile */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Giao diện</span>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="justify-start" asChild>
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4" />
                                    Trang cá nhân
                                </Link>
                            </Button>
                            <Button variant="ghost" className="justify-start" asChild>
                                <Link href="/messages">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Tin nhắn
                                    <Badge className="ml-auto">2</Badge>
                                </Link>
                            </Button>
                            <Button variant="ghost" className="justify-start" asChild>
                                <Link href="/notifications">
                                    <Bell className="mr-2 h-4 w-4" />
                                    Thông báo
                                    <Badge className="ml-auto">3</Badge>
                                </Link>
                            </Button>
                            <Button variant="ghost" className="justify-start" asChild>
                                <Link href="/settings">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Cài đặt
                                </Link>
                            </Button>
                            <Button variant="ghost" className="justify-start text-red-600" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Đăng xuất
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
