"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Star } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate loading
        setTimeout(() => {
            setIsLoading(false)

            // Save user to localStorage to simulate login
            const mockUser = {
                id: "1",
                name: "Demo User",
                email: email,
                avatar: "/placeholder.svg?height=40&width=40&text=User",
            }
            localStorage.setItem("user", JSON.stringify(mockUser))

            // Redirect to main page
            router.push("/")
        }, 800)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Hero Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20" />

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-green-200/30 rounded-full blur-xl" />
                <div className="absolute bottom-40 left-10 w-24 h-24 bg-emerald-300/40 rounded-full blur-lg" />



                {/* Hero Content */}
                <div className="flex flex-col justify-center px-12 z-10 max-w-lg">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Kết nối với{" "}
                            <span className="text-green-600 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                bạn bè!
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Chia sẻ những khoảnh khắc mới và cuộc sống với bạn bè của bạn. Tạo kỷ niệm đẹp cùng nhau.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex space-x-8 mb-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">10K+</div>
                            <div className="text-sm text-gray-600">Người dùng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">50K+</div>
                            <div className="text-sm text-gray-600">Bài viết</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">100K+</div>
                            <div className="text-sm text-gray-600">Kết nối</div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-tl-[4rem] overflow-hidden shadow-2xl">
                    <Image
                        src="https://smo-space-react.vercel.app/assets/welcome-Bq9Z5EyF.jpg"
                        alt="Friends embracing at sunset"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">
                            Social<span className="text-pink-500">Vibe</span>
                        </span>
                    </div>

                    {/* Form Header */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Chào mừng trở lại!</h2>
                        <p className="text-gray-600 text-lg">Tham gia SocialVibe ngay bây giờ!</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Tên đăng nhập hoặc Email
                            </Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Mật khẩu
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 px-4 pr-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Đang đăng nhập...</span>
                                </div>
                            ) : (
                                "Đăng nhập"
                            )}
                        </Button>

                        <div className="text-right">
                            <Link
                                href="/auth/forgot-password"
                                className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>

                        <div className="text-center text-gray-600">
                            Chưa có tài khoản?{" "}
                            <Link href="/auth/signup" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                                Đăng ký
                            </Link>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}
