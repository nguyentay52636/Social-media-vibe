import { AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { FriendSuggestion } from '@/components/layout/SiderBar/types'
import { Avatar } from '@/components/ui/avatar'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserPlus, UserX } from 'lucide-react'
import CardSuggestionsFriends from './Card/CardSuggestionsFriends'

export default function SuggestionListItem({
  suggestion,
  onAddFriend,
  onRemove,
}: {
  suggestion: FriendSuggestion
  onAddFriend: (id: string) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="space-y-4">
    <Card className="animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.name} />
              <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {suggestion.isOnline && (
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <CardSuggestionsFriends suggestion={suggestion} />

              <div className="flex items-center space-x-2 ml-4">
                <Button onClick={() => onAddFriend(suggestion.id)}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Kết bạn
                </Button>
                <Button variant="outline" onClick={() => onRemove(suggestion.id)}>
                  <UserX className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}