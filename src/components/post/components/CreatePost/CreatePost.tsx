import { Card } from '@/components/ui/card'
import React, { useRef, useState } from 'react'
import ContentCreatePost from './components/ContentCreatePost'

export default function CreatePost() {

    const [content, setContent] = useState("")
    const [isExpanded, setIsExpanded] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [attachments, setAttachments] = useState<{ type: "image" | "video"; url: string }[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        setIsExpanded(true)
    }

    const handleCancel = () => {
        setIsExpanded(false)
        setContent("")
        setAttachments([])
    }

    const handleSubmit = () => {
        if (!content.trim() && attachments.length === 0) return

        setIsSubmitting(true)

        // Simulate posting
        setTimeout(() => {
            console.log("Post created:", { content, attachments })
            setIsSubmitting(false)
            setContent("")
            setAttachments([])
            setIsExpanded(false)
        }, 1000)
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        const newAttachments = Array.from(files).map((file) => {
            const isVideo = file.type.startsWith("video/")
            return {
                type: isVideo ? ("video" as const) : ("image" as const),
                url: URL.createObjectURL(file),
            }
        })

        setAttachments([...attachments, ...newAttachments])

        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const removeAttachment = (index: number) => {
        const newAttachments = [...attachments]
        URL.revokeObjectURL(newAttachments[index].url)
        newAttachments.splice(index, 1)
        setAttachments(newAttachments)
    }
    return (
        <>
            <Card>
                <ContentCreatePost isExpanded={isExpanded} setIsExpanded={setIsExpanded} content={content} setContent={setContent} handleFocus={handleFocus} handleCancel={handleCancel} handleSubmit={handleSubmit} handleFileSelect={handleFileSelect} removeAttachment={removeAttachment} attachments={attachments} isSubmitting={isSubmitting} fileInputRef={fileInputRef} />
            </Card>
        </>
    )
}
