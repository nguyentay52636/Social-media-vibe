import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Header } from "@/components/layout/Header/Header"
import { HeaderUpdate } from "@/components/layout/Header/HeaderUpdate"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SocialVibe - Kết nối và chia sẻ",
  description: "Mạng xã hội hiện đại cho người Việt",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <div className="fixed top-0 left-0 right-0 z-50">
              {/* <Header /> */}
              <HeaderUpdate />
            </div>
            <main className="pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
