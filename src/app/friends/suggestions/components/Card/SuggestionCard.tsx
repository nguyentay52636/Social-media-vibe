import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Avatar } from '@/components/ui/avatar'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserPlus, UserX } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Users, Briefcase, MapPin } from 'lucide-react'

export default function SuggestionCard({ suggestion, onAddFriend, onRemove }: { suggestion: any, onAddFriend: (id: string) => void, onRemove: (id: string) => void }) {
    return (
        <>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <Card className="overflow-hidden animate-fade-in">
                <CardContent className="p-0">
                    <div className="relative">
                        <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600" />
                        <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-20 w-20 border-4 border-background">
                            <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
                            <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {suggestion.isOnline && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                        )}
                    </div>
                    <div className="pt-12 p-4 text-center space-y-3">
                        <div>
                            <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{suggestion.bio}</p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-center text-xs text-muted-foreground">
                                <Users className="h-3 w-3 mr-1" />
                                <span>{suggestion.mutualFriends} bạn chung</span>
                            </div>

                            {suggestion.workplace && (
                                <div className="flex items-center justify-center text-xs text-muted-foreground">
                                    <Briefcase className="h-3 w-3 mr-1" />
                                    <span className="truncate">{suggestion.workplace}</span>
                                </div>
                            )}

                            {suggestion.location && (
                                <div className="flex items-center justify-center text-xs text-muted-foreground">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    <span>{suggestion.location}</span>
                                </div>
                            )}

                            <Badge variant="outline" className="text-xs">
                                {suggestion.reason}
                            </Badge>
                        </div>

                        <div className="flex space-x-2">
                            <Button className="flex-1" onClick={() => onAddFriend(suggestion.id)}>
                                <UserPlus className="mr-2 h-4 w-4" />
                                Kết bạn
                            </Button>
                            <Button variant="outline" onClick={() => onRemove(suggestion.id)}>
                                <UserX className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
