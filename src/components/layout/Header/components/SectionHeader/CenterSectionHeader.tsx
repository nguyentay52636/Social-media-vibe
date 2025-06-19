import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'

export default function CenterSectionHeader({ navigationItems, activeTab, setActiveTab }: { navigationItems: any[], activeTab: string, setActiveTab: (tab: string) => void }) {
    return (
        <>
            <div className="flex items-center space-x-1 lg:space-x-2 justify-center">
                {navigationItems.map((item) => (
                    <Link key={item.id} href={item.href}>
                        <Button
                            variant="ghost"
                            size="lg"
                            className={cn(
                                "h-12 px-4 lg:px-8 rounded-lg relative",
                                activeTab === item.id
                                    ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                            )}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                            {activeTab === item.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-lg" />
                            )}
                        </Button>
                    </Link>
                ))}
            </div>
        </>
    )
}
