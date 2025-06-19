"use client"

import { useState } from "react"

import {
    Home,
    Users,
    Play,
    Store,
    Users2,
    Menu,
    X,
} from "lucide-react"
import CenterSectionHeader from "./components/SectionHeader/CenterSectionHeader"
import RightSectionHeader from "./components/SectionHeader/RightSectionHeader"
import LeftSectionHeader from "./components/SectionHeader/LeftSectionHeader"

const currentUser = {
    name: "Phương Tây",
    email: "phuongtay@example.com",
    avatar: "/placeholder.svg?height=40&width=40&text=PT",
}

export function HeaderUpdate() {
    const [activeTab, setActiveTab] = useState("home")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigationItems = [
        { id: "home", icon: Home, href: "/", label: "Trang chủ" },
        { id: "friends", icon: Users, href: "/friends", label: "Bạn bè" },
        { id: "watch", icon: Play, href: "/watch", label: "Watch" },
        { id: "marketplace", icon: Store, href: "/marketplace", label: "Marketplace" },
        { id: "groups", icon: Users2, href: "/groups", label: "Nhóm" },
    ]

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.href = "/auth/login"
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Left Section - Logo & Search */}
                    <LeftSectionHeader />

                    {/* Center Section - Navigation (Hidden on mobile) */}
                    <div className="hidden lg:flex lg:justify-center">
                        <CenterSectionHeader navigationItems={navigationItems} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>

                    {/* Right Section - User Controls */}
                    <div className="hidden md:flex">
                        <RightSectionHeader handleLogout={handleLogout} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={toggleMobileMenu}
                    />

                    {/* Mobile Menu */}
                    <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Navigation */}
                            <div className="space-y-2">
                                {navigationItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`}
                                        onClick={() => {
                                            setActiveTab(item.id)
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Mobile User Controls */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-3 px-4 py-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold text-sm">PT</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900 dark:text-gray-100">{currentUser.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        handleLogout()
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
