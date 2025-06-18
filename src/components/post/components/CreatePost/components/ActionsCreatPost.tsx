import { Button } from '@/components/ui/button'
import { ImageIcon, Users, Smile, MapPin, Loader2 } from 'lucide-react'
import React from 'react'

export default function ActionsCreatPost({ fileInputRef, handleFileSelect, handleCancel, handleSubmit, content, attachments, isSubmitting }: { fileInputRef: React.RefObject<HTMLInputElement | null>, handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void, handleCancel: () => void, handleSubmit: () => void, content: string, attachments: { type: "image" | "video"; url: string }[], isSubmitting: boolean }) {
    return (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-green-500 flex items-center gap-2"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <ImageIcon className="h-5 w-5" /> Ảnh/Video
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*,video/*"
                    multiple
                    className="hidden"
                    onChange={handleFileSelect}
                />
                <Button variant="ghost" size="sm" className="text-blue-500 flex items-center gap-2">
                    <Users className="h-5 w-5" /> Gắn thẻ
                </Button>
                <Button variant="ghost" size="sm" className="text-yellow-500 flex items-center gap-2">
                    <Smile className="h-5 w-5" /> Cảm xúc
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Vị trí
                </Button>
            </div>

            <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm" className="rounded-full px-4" onClick={handleCancel}>
                    Hủy
                </Button>
                <Button
                    size="sm"
                    className="bg-blue-500 text-white font-semibold rounded-full px-6 shadow-md hover:bg-blue-600"
                    onClick={handleSubmit}
                    disabled={(!content.trim() && attachments.length === 0) || isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Đang đăng...
                        </>
                    ) : (
                        "Đăng"
                    )}
                </Button>
            </div>
        </div>
    )
}