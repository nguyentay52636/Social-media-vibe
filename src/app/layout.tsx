import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { LayoutContent } from "@/components/layout/LayoutContent"

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
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  )
}
