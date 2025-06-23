import { Button } from '@/components/ui/button'
import { Paperclip, ImageIcon, Sticker, Smile, Mic } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'

interface MessageInputProps {
    handleSendMessage: (e: React.FormEvent) => void
    fileInputRef: React.RefObject<HTMLInputElement>
    newMessage: string
    setNewMessage: (value: string) => void
    showEmojiPicker: boolean
    setShowEmojiPicker: (value: boolean) => void
    handleVoiceRecord: () => void
    isRecording: boolean
}

export default function MessageInput({ handleSendMessage, fileInputRef, newMessage, setNewMessage, showEmojiPicker, setShowEmojiPicker, handleVoiceRecord, isRecording }: MessageInputProps) {
    return (
        <div className="p-2 border-t border-gray-700 bg-gray-800">
            <form onSubmit={handleSendMessage} className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 hover:bg-gray-700"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Paperclip className="w-4 h-4 text-blue-400" />
                    </Button>

                    <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                        <ImageIcon className="w-4 h-4 text-blue-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-700">
                        <Sticker className="w-4 h-4 text-blue-400" />
                    </Button>

                </div>

                <div className="flex-1 flex items-center bg-gray-700 rounded-full px-3 py-1 w-[100px]">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Aa"
                        className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 focus:outline-none p-0 text-sm"
                    />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 hover:bg-gray-600"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <Smile className="w-4 h-4 text-blue-400" />
                    </Button>
                </div>

                {newMessage.trim() ? (
                    <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-1 rounded-full">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent text-xl;l"></div>
                        </div>
                    </Button>
                ) : (
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`p-1 hover:bg-gray-700 ${isRecording ? "bg-red-600" : ""}`}
                        onClick={handleVoiceRecord}
                    >
                        <Mic className="w-4 h-4 text-blue-400" />
                    </Button>
                )}
            </form>
        </div>
    )
}
