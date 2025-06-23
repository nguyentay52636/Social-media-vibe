import React from "react"
import { MessageContextMenuProps } from "./types"
import { Reply, Forward, Copy, Delete } from "lucide-react"

export function MessageContextMenu({
    message,
    onClose,
    onReply,
    onForward,
    onCopy,
    onDelete,
    position,
}: MessageContextMenuProps) {
    return (
        <div
            className="fixed bg-gray-800 rounded-lg shadow-lg border border-gray-600 py-2 min-w-48 z-50"
            style={{ left: position.x, top: position.y }}
        >
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onReply()
                    onClose()
                }}
            >
                <Reply className="w-4 h-4" />
                Trả lời
            </button>
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onForward()
                    onClose()
                }}
            >
                <Forward className="w-4 h-4" />
                Chuyển tiếp
            </button>
            <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-3"
                onClick={() => {
                    onCopy()
                    onClose()
                }}
            >
                <Copy className="w-4 h-4" />
                Sao chép
            </button>
            {message.isOwn && (
                <button
                    className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 flex items-center gap-3"
                    onClick={() => {
                        onDelete()
                        onClose()
                    }}
                >
                    <Delete className="w-4 h-4" />
                    Xóa
                </button>
            )}
        </div>
    )
} 