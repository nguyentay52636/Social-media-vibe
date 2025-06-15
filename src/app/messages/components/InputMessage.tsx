import React from 'react'
import { Button } from '@/components/ui/button'
import { Smile, Mic, Send, Paperclip, ImageIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

export default function InputMessage({ handleFileUpload, newMessage, setNewMessage, handleKeyPress, handleSendMessage }: { handleFileUpload: () => void, newMessage: string, setNewMessage: (value: string) => void, handleKeyPress: (e: React.KeyboardEvent) => void, handleSendMessage: () => void }) {
    return (
        <>
            <div className="p-6 border-t border-white/10 glass-effect">
                <div className="flex items-end space-x-4">
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-xl hover:bg-white/10"
                            onClick={handleFileUpload}
                        >
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/10">
                            <ImageIcon className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex-1 relative">
                        <Textarea
                            placeholder="Nhập tin nhắn..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="min-h-[50px] max-h-32 resize-none glass-effect border-white/20 rounded-2xl pr-20"
                        />
                        <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                                <Smile className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                                <Mic className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        size="icon"
                        className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80"
                    >
                        <Send className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </>
    )
}
