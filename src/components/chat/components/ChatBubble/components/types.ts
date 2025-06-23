export interface MessageProps {
    id: string
    content: string
    timestamp: string
    isOwn: boolean
    senderName: string
    senderAvatar: string
    hasReaction?: string
    isImage?: boolean
    imageUrl?: string
    isVideo?: boolean
    videoUrl?: string
    isAudio?: boolean
    audioUrl?: string
    isFile?: boolean
    fileName?: string
    fileSize?: string
    isSticker?: boolean
    stickerUrl?: string
    replyTo?: {
        id: string
        content: string
        senderName: string
    }
    isRead?: boolean
    deliveredAt?: string
}

export interface ReactionPickerProps {
    onReactionSelect: (reaction: string) => void
    onClose: () => void
    position: { x: number; y: number }
}

export interface MessageContextMenuProps {
    message: MessageProps
    onClose: () => void
    onReply: () => void
    onForward: () => void
    onCopy: () => void
    onDelete: () => void
    position: { x: number; y: number }
} 