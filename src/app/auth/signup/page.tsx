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

export default function SignupPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate loading
        setTimeout(() => {
            setIsLoading(false)

            // Save user to localStorage to simulate signup
            const mockUser = {
                id: "1",
                name: name,
                email: email,
                avatar: "/placeholder.svg?height=40&width=40&text=" + name.charAt(0),
            }
            localStorage.setItem("user", JSON.stringify(mockUser))

            // Redirect to main page
            router.push("/")
        }, 800)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Hero Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20" />

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-green-200/30 rounded-full blur-xl" />
                <div className="absolute bottom-40 left-10 w-24 h-24 bg-green-300/40 rounded-full blur-lg" />

                {/* Logo */}
                <div className="absolute top-8 left-8 z-10">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">
                            Social<span className="text-pink-500">Vibe</span>
                        </span>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="flex flex-col justify-center px-12 z-10 max-w-lg">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Tham gia{" "}
                            <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                                cộng đồng!
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Tạo tài khoản để kết nối với bạn bè và chia sẻ những khoảnh khắc đáng nhớ.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700">Kết nối với bạn bè</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700">Chia sẻ khoảnh khắc</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700">Tạo kỷ niệm đẹp</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-tl-[4rem] overflow-hidden shadow-2xl">
                    <Image
                        src="https://smo-space-react.vercel.app/assets/register-BbiBWzj8.jpg"
                        alt="People joining community"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>

            {/* Right Side - Signup Form */}
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Tạo tài khoản</h2>
                        <p className="text-gray-600 text-lg">Bắt đầu hành trình kết nối của bạn!</p>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Họ và tên
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Nhập họ và tên"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
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

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                Xác nhận mật khẩu
                            </Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="h-12 px-4 pr-12 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 cursor-pointer bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Đang tạo tài khoản...</span>
                                </div>
                            ) : (
                                "Tạo tài khoản"
                            )}
                        </Button>

                        <div className="text-center text-gray-600">
                            Đã có tài khoản?{" "}
                            <Link href="/auth/login" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                                Đăng nhập
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
