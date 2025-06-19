"use client"

import { usePathname } from "next/navigation"
import { HeaderUpdate } from "./Header/HeaderUpdate"

export function ConditionalHeader() {
    const pathname = usePathname()

    // Kiểm tra xem có đang ở trang auth không
    const isAuthPage = pathname?.startsWith('/auth/')

    if (isAuthPage) {
        return null
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <HeaderUpdate />
        </div>
    )
}

// Hook để kiểm tra xem có phải trang auth không
export function useIsAuthPage() {
    const pathname = usePathname()
    return pathname?.startsWith('/auth/') || false
} 