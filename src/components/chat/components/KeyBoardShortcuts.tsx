"use client"

import { useEffect, useCallback } from "react"

interface KeyboardShortcutsProps {
    chats: Array<{
        id: string
        name: string
        avatar: string
        lastMessage: string
        timestamp: string
        isOnline: boolean
        unreadCount?: number
    }>
    activeChat: string | null
    onChatOpen: (chatId: string) => void
    onChatSelect: (chatId: string) => void
    onMessengerToggle: () => void
    showMessenger: boolean
}

export function KeyboardShortcuts({
    chats,
    activeChat,
    onChatOpen,
    onChatSelect,
    onMessengerToggle,
    showMessenger,
}: KeyboardShortcutsProps) {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            // Ctrl+Enter: Mở chat đầu tiên hoặc chat được chọn
            if (event.ctrlKey && event.key === "Enter") {
                event.preventDefault()
                if (activeChat) {
                    onChatOpen(activeChat)
                } else if (chats.length > 0) {
                    const firstChat = chats[0]
                    onChatSelect(firstChat.id)
                    onChatOpen(firstChat.id)
                }
                return
            }

            // Ctrl+M: Toggle Messenger
            if (event.ctrlKey && event.key === "m") {
                event.preventDefault()
                onMessengerToggle()
                return
            }

            // Ctrl+1-9: Mở chat theo số thứ tự
            if (event.ctrlKey && event.key >= "1" && event.key <= "9") {
                event.preventDefault()
                const index = Number.parseInt(event.key) - 1
                if (chats[index]) {
                    const chat = chats[index]
                    onChatSelect(chat.id)
                    onChatOpen(chat.id)
                }
                return
            }

            // Escape: Đóng Messenger nếu đang mở
            if (event.key === "Escape" && showMessenger) {
                event.preventDefault()
                onMessengerToggle()
                return
            }

            // Ctrl+Shift+N: Mở chat với người có tin nhắn chưa đọc
            if (event.ctrlKey && event.shiftKey && event.key === "N") {
                event.preventDefault()
                const unreadChat = chats.find((chat) => chat.unreadCount && chat.unreadCount > 0)
                if (unreadChat) {
                    onChatSelect(unreadChat.id)
                    onChatOpen(unreadChat.id)
                }
                return
            }

            // Ctrl+Shift+O: Mở chat với người đang online
            if (event.ctrlKey && event.shiftKey && event.key === "O") {
                event.preventDefault()
                const onlineChat = chats.find((chat) => chat.isOnline)
                if (onlineChat) {
                    onChatSelect(onlineChat.id)
                    onChatOpen(onlineChat.id)
                }
                return
            }

            // Arrow keys để điều hướng trong danh sách chat (khi Messenger đang mở)
            if (showMessenger && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
                event.preventDefault()
                const currentIndex = activeChat ? chats.findIndex((chat) => chat.id === activeChat) : -1

                if (event.key === "ArrowDown") {
                    const nextIndex = currentIndex < chats.length - 1 ? currentIndex + 1 : 0
                    onChatSelect(chats[nextIndex].id)
                } else if (event.key === "ArrowUp") {
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : chats.length - 1
                    onChatSelect(chats[prevIndex].id)
                }
                return
            }

            // Enter: Mở chat được chọn (khi Messenger đang mở)
            if (showMessenger && event.key === "Enter" && activeChat) {
                event.preventDefault()
                onChatOpen(activeChat)
                return
            }
        },
        [chats, activeChat, onChatOpen, onChatSelect, onMessengerToggle, showMessenger],
    )

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown])

    return null // Component này chỉ xử lý keyboard events
}
