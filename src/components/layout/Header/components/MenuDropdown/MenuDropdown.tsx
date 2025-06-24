import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Briefcase, Calendar, FileText, Plus, Grid3X3, User, Search, Target, Users, Camera, Megaphone, Users2, ShoppingBag, Newspaper, Gamepad2, BarChart3 } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'
import RightColumDropdown from './MenuChildren/RightColumDropdown'
import LeftColumDropdown from './MenuChildren/LeftColumDropdown'

export default function MenuDropdown() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800">
                        <Grid3X3 className="w-5 h-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-0" align="end" forceMount>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Menu</h2>

                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="search"
                                placeholder="Tìm kiếm trong menu"
                                className="pl-10 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Column */}
                            <LeftColumDropdown />
                            {/* Right Column */}
                            <RightColumDropdown />
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
