"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { NavItem } from "../types"
import { cn } from "@/lib/utils"

interface NavItemsProps {
    items: NavItem[]
    collapsed: boolean
}

export function NavItems({ items, collapsed }: NavItemsProps) {
    const pathname = usePathname()

    return (
        <nav className="space-y-2">
            {items.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Tooltip key={item.href}>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start h-14 rounded-2xl transition-all duration-300 group",
                                    collapsed ? "justify-center px-0" : "px-4",
                                    isActive
                                        ? "bg-primary/10 text-primary border border-primary/30"
                                        : "hover:bg-accent/50 hover:scale-105",
                                )}
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon
                                        className={cn(
                                            "h-6 w-6 transition-all duration-300",
                                            !collapsed && "mr-4",
                                            isActive ? "text-primary" : item.color || "text-muted-foreground group-hover:text-foreground",
                                        )}
                                    />
                                    {!collapsed && (
                                        <>
                                            <span className="flex-1 text-left font-medium">{item.label}</span>
                                            {item.badge && (
                                                <Badge className="ml-auto bg-gradient-to-r from-primary to-pink-500 border-0 text-white">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </>
                                    )}
                                    {collapsed && item.badge && (
                                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-primary to-pink-500 border-0 text-xs">
                                            {item.badge}
                                        </Badge>
                                    )}
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        {collapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                    </Tooltip>
                )
            })}
        </nav>
    )
} 