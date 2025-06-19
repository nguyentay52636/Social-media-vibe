import { Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Star } from 'lucide-react'

export default function LeftSectionHeader() {
    return (
        <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold hidden sm:block">
                    Social<span className="text-pink-500">Vibe</span>
                </span>
                <span className="text-lg font-bold sm:hidden">
                    <span className="text-pink-500">V</span>
                </span>
            </Link>

            <div className="relative max-w-xs hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                    type="search"
                    placeholder="Tìm kiếm trên Facebook"
                    className="pl-10 bg-gray-100 dark:bg-gray-800 border-0 rounded-full h-10 w-60"
                />
            </div>
        </div>
    )
}
