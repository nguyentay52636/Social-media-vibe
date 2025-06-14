"use client"

import Link from "next/link"
import { Users, UserPlus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { FriendSuggestion } from "../types"


interface FriendSuggestionsProps {
    suggestions: FriendSuggestion[]
    onAddFriend: (friendId: string) => void
    onHide: () => void
}

export function FriendSuggestions({ suggestions, onAddFriend, onHide }: FriendSuggestionsProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-400" />
                    Gợi ý kết bạn
                </h3>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 hover:bg-accent/50 rounded-lg"
                    onClick={onHide}
                >
                    Ẩn
                </Button>
            </div>
            <div className="space-y-3">
                {suggestions.slice(0, 3).map((suggestion) => (
                    <Card key={suggestion.id} className="p-4">
                        <div className="flex items-start space-x-3">
                            <div className="relative">
                                <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                                    <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                                    <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white">
                                        {suggestion.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                {suggestion.isOnline && (
                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <Link
                                    href={`/profile/${suggestion.id}`}
                                    className="text-sm font-semibold hover:text-primary transition-colors block truncate"
                                >
                                    {suggestion.name}
                                </Link>
                                <p className="text-xs text-muted-foreground flex items-center">
                                    <Users className="h-3 w-3 mr-1" />
                                    {suggestion.mutualFriends} bạn chung
                                </p>
                                {suggestion.workplace && (
                                    <p className="text-xs text-muted-foreground/80 truncate mt-1">{suggestion.workplace}</p>
                                )}
                                <div className="flex items-center space-x-2 mt-3">
                                    <Button
                                        size="sm"
                                        className="h-8 text-xs px-3 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/80 hover:to-pink-500/80 border-0 rounded-lg"
                                        onClick={() => onAddFriend(suggestion.id)}
                                    >
                                        <UserPlus className="h-3 w-3 mr-1" />
                                        Kết bạn
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 text-xs px-3 rounded-lg">
                                        Xóa
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="text-center">
                <Link
                    href="/friends/suggestions"
                    className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                    Xem tất cả gợi ý
                </Link>
            </div>
        </div>
    )
} 