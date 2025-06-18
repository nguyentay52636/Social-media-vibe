import React from 'react'
import { CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { X, ImageIcon, Users, Smile, MapPin, Loader2 } from 'lucide-react'

export default function ContentCreatePost({ isExpanded, setIsExpanded, content, setContent, handleFocus, handleCancel, handleSubmit, handleFileSelect, removeAttachment, attachments, isSubmitting, fileInputRef }: { isExpanded: boolean, setIsExpanded: (isExpanded: boolean) => void, content: string, setContent: (content: string) => void, handleFocus: () => void, handleCancel: () => void, handleSubmit: () => void, handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void, removeAttachment: (index: number) => void, attachments: { type: "image" | "video"; url: string }[], isSubmitting: boolean, fileInputRef: React.RefObject<HTMLInputElement> }) {


    return (
        <>
            <CardContent className={cn("p-4", isExpanded && "pb-4")}>
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40&text=User" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Textarea
                            placeholder="Bạn đang nghĩ gì?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            onFocus={handleFocus}
                            className="min-h-[40px] resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-2 rounded-full pl-4"
                        />
                    </div>
                </div>

                {isExpanded && (
                    <>
                        {attachments.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {attachments.map((attachment, index) => (
                                    <div key={index} className="relative rounded-md overflow-hidden aspect-square">
                                        {attachment.type === "image" ? (
                                            <img
                                                src={attachment.url || "/placeholder.svg"}
                                                alt="Attachment"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <video src={attachment.url} className="w-full h-full object-cover" controls />
                                        )}
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/50 hover:bg-black/70"
                                            onClick={() => removeAttachment(index)}
                                        >
                                            <X className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-green-500"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <ImageIcon className="h-4 w-4 mr-2" />
                                    Ảnh
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*,video/*"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                                <Button variant="ghost" size="sm" className="text-blue-500">
                                    <Users className="h-4 w-4 mr-2" />
                                    Gắn thẻ
                                </Button>
                                <Button variant="ghost" size="sm" className="text-yellow-500">
                                    <Smile className="h-4 w-4 mr-2" />
                                    Cảm xúc
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Vị trí
                                </Button>
                            </div>

                            <div className="flex gap-2 ml-auto">
                                <Button variant="outline" size="sm" onClick={handleCancel}>
                                    Hủy
                                </Button>
                                <Button
                                    size="sm"
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
                    </>
                )}

                {!isExpanded && (
                    <div className="flex justify-between mt-4 border-t pt-4">
                        <Button variant="ghost" size="sm" className="text-blue-500" onClick={() => fileInputRef.current?.click()}>
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Ảnh/Video
                        </Button>
                        <Button variant="ghost" size="sm" className="text-green-500">
                            <Users className="h-4 w-4 mr-2" />
                            Gắn thẻ
                        </Button>
                        <Button variant="ghost" size="sm" className="text-yellow-500">
                            <Smile className="h-4 w-4 mr-2" />
                            Cảm xúc
                        </Button>
                    </div>
                )}
            </CardContent>
        </>
    )
}