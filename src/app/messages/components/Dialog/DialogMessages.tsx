import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
export default function DialogMessages() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <>
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold gradient-text">Tin nhắn</h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="icon" className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary to-pink-500">
                                <Plus className="h-5 w-5" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="glass-effect border-white/20">
                            <DialogHeader>
                                <DialogTitle>Tin nhắn mới</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="recipient">Người nhận</Label>
                                    <Input id="recipient" placeholder="Tìm kiếm bạn bè..." className="glass-effect border-white/20" />
                                </div>
                                <div>
                                    <Label htmlFor="message">Tin nhắn</Label>
                                    <Textarea id="message" placeholder="Nhập tin nhắn..." className="glass-effect border-white/20" />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-primary to-pink-500">Gửi tin nhắn</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Tìm kiếm cuộc trò chuyện..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 glass-effect border-white/20 rounded-xl"
                    />
                </div>
            </div>
        </>
    )
}
