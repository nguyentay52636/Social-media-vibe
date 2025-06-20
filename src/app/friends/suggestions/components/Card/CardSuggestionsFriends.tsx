import React from 'react'
import { User } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Users, Briefcase, MapPin } from 'lucide-react'

// Extended type for friend suggestions
interface FriendSuggestion extends User {
    mutualFriendsNames: string[]
    reason: string
}

export default function CardSuggestionsFriends({ suggestion }: { suggestion: FriendSuggestion }) {
    return (
        <div className="flex-1">
            <h3 className="font-semibold text-lg">{suggestion.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{suggestion.bio}</p>

            <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{suggestion.mutualFriends} bạn chung</span>
                </div>

                {suggestion.workplace && (
                    <div className="flex items-center">
                        <Briefcase className="h-3 w-3 mr-1" />
                        <span className="truncate">{suggestion.workplace}</span>
                    </div>
                )}

                {suggestion.location && (
                    <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{suggestion.location}</span>
                    </div>
                )}
            </div>

            <div className="mt-2">
                <Badge variant="outline" className="text-xs">
                    {suggestion.reason}
                </Badge>
            </div>

            {suggestion.mutualFriendsNames.length > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                    Bạn chung: {suggestion.mutualFriendsNames.slice(0, 2).join(", ")}
                    {suggestion.mutualFriendsNames.length > 2 &&
                        ` và ${suggestion.mutualFriendsNames.length - 2} người khác`}
                </p>
            )}
        </div>

    )
}
