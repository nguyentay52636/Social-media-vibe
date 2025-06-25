"use client"
import { useState, useEffect, ReactNode } from "react"
import Loading from "@/app/loading"

interface LoadingWrapperProps {
    children: ReactNode
    loadingTime?: number
    loadingText?: string
    showLoading?: boolean
}

export default function LoadingWrapper({
    children,
    loadingTime = 1500,
    loadingText = "Đang tải...",
    showLoading = true
}: LoadingWrapperProps) {
    const [isLoading, setIsLoading] = useState(showLoading)

    useEffect(() => {
        if (showLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, loadingTime)

            return () => clearTimeout(timer)
        } else {
            setIsLoading(false)
        }
    }, [loadingTime, showLoading])

    if (isLoading) {
        return <Loading />
    }

    return <>{children}</>
} 