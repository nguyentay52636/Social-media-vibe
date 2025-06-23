import React from "react"
import { ReactionPickerProps } from "./types"

export function ReactionPicker({ onReactionSelect, onClose, position }: ReactionPickerProps) {
    const reactions = ["❤️", "😂", "😮", "😢", "😡", "👍"]

    return (
        <div
            className="fixed bg-gray-800 rounded-full p-2 flex gap-1 shadow-lg border border-gray-600 z-50"
            style={{ left: position.x, top: position.y - 60 }}
        >
            {reactions.map((reaction) => (
                <button
                    key={reaction}
                    className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center text-lg transition-transform hover:scale-110"
                    onClick={() => {
                        onReactionSelect(reaction)
                        onClose()
                    }}
                >
                    {reaction}
                </button>
            ))}
        </div>
    )
} 