"use client"

import { ConditionalHeader, useIsAuthPage } from "./ConditionalHeader"

export function LayoutContent({ children }: { children: React.ReactNode }) {
    const isAuthPage = useIsAuthPage()

    return (
        <div className="min-h-screen bg-background">
            <ConditionalHeader />
            <main className={isAuthPage ? "" : "pt-16"}>{children}</main>
        </div>
    )
} 