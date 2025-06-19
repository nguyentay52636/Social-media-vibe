
"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { UserProfile } from "./components/UserProfile"
import { NavItems } from "./components/NavItems"

import { mainNavItems, shortcutItems, friendSuggestions } from "./components/dataSiderbar"
import { OnlineFriends } from "./components/OnlineFriends"
import { FriendSuggestions } from "./components/FriendSuggestions"

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)
    const [showFriendSuggestions, setShowFriendSuggestions] = useState(true)
    const user = {
        id: "1",
        name: "Phuong Tay",
        avatar: "/avatar.png",
    }

    const toggleSidebar = () => {
        const newCollapsed = !collapsed
        setCollapsed(newCollapsed)

        // Dispatch custom event to notify other components
        window.dispatchEvent(
            new CustomEvent("sidebarToggle", {
                detail: { collapsed: newCollapsed },
            }),
        )
    }

    const handleAddFriend = (friendId: string) => {
        console.log("Adding friend:", friendId)
    }

    return (
        <TooltipProvider delayDuration={0}>
            <aside
                className={cn(
                    "fixed left-0 top-16 h-[calc(100vh-4rem)] border-r overflow-y-auto custom-scrollbar transition-all duration-500 ease-in-out z-40 bg-background",
                    collapsed ? "w-24" : "w-80",
                )}
            >
                <div className={cn("space-y-6 relative", collapsed ? "p-3" : "p-6")}>
                    {/* Toggle Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute cursor-pointer -right-0 top-6 h-8 w-8  z-100 rounded-full border shadow-lg hover:scale-110 transition-all duration-300 z-50"
                        onClick={toggleSidebar}
                    >
                        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>

                    {/* User Profile */}
                    <UserProfile user={user} collapsed={collapsed} />

                    <Separator />

                    {/* Main Navigation */}
                    <NavItems items={mainNavItems} collapsed={collapsed} />

                    {/* Settings for collapsed state */}
                    {collapsed && (
                        <>
                            <Separator />
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-center h-14 rounded-2xl transition-all duration-300 group px-0 hover:bg-accent/50 hover:scale-105"
                                        asChild
                                    >
                                        <Link href="/settings">
                                            <Settings className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">Cài đặt</TooltipContent>
                            </Tooltip>
                        </>
                    )}

                    {!collapsed && (
                        <>
                            <Separator />

                            {/* Online Friends */}
                            <OnlineFriends friends={[]} />

                            <Separator />

                            {/* Friend Suggestions */}
                            {showFriendSuggestions && (
                                <FriendSuggestions
                                    suggestions={friendSuggestions}
                                    onAddFriend={handleAddFriend}
                                    onHide={() => setShowFriendSuggestions(false)}
                                />
                            )}

                            <Separator />

                            {/* Shortcuts */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-muted-foreground px-2 flex items-center">
                                    <Sparkles className="h-4 w-4 mr-2 text-primary" />
                                    Lối tắt
                                </h3>
                                <NavItems items={shortcutItems} collapsed={collapsed} />
                            </div>

                            <Separator />

                            {/* Settings */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start h-12 rounded-xl transition-all duration-300 group hover:bg-accent/50 hover:scale-105"
                                        asChild
                                    >
                                        <Link href="/settings">
                                            <Settings className="h-5 w-5 mr-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                            <span className="font-medium">Cài đặt</span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                            </Tooltip>
                        </>
                    )}
                </div>
            </aside>
        </TooltipProvider>
    )
} 