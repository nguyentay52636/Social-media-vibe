"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const errorMessages = {
    Configuration: "Có sự cố với cấu hình máy chủ.",
    AccessDenied: "Bạn không có quyền truy cập.",
    Verification: "Mã xác thực đã hết hạn hoặc đã được sử dụng.",
    Default: "Đã xảy ra lỗi trong quá trình xác thực.",
}

export default function AuthError() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error") as keyof typeof errorMessages

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="mt-4 text-2xl font-bold text-gray-900">
                        Lỗi xác thực
                    </CardTitle>
                    <CardDescription>
                        {errorMessages[error] || errorMessages.Default}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button asChild className="w-full">
                        <Link href="/auth/login">Thử lại</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                        <Link href="/">Về trang chủ</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
