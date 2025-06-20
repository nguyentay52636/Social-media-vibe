import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { User } from '@/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CardFilter from './Card/CardFilter'
import CardSuggestionOverview from './Card/CardSuggestionOverview'
import SuggestionCard from './Card/SuggestionCard'
import SuggestionListItem from './SuggestionListItem'

// Extended type for friend suggestions
interface FriendSuggestion extends User {
    mutualFriendsNames: string[]
    reason: string
}

export default function TabsFilterSuggestionFriends({
    filterBy,
    setFilterBy,
    sortBy,
    setSortBy,
    suggestions,
    filteredSuggestions,
    handleAddFriend,
    handleRemoveSuggestion,
}: {
    filterBy: string
    setFilterBy: (filterBy: string) => void
    sortBy: string
    setSortBy: (sortBy: string) => void
    suggestions: FriendSuggestion[]
    filteredSuggestions: FriendSuggestion[]
    handleAddFriend: (friendId: string) => void
    handleRemoveSuggestion: (friendId: string) => void
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
                <CardFilter filterBy={filterBy} setFilterBy={setFilterBy} sortBy={sortBy} setSortBy={setSortBy} />

                <CardSuggestionOverview suggestions={suggestions} />
            </div>

            <div className="lg:col-span-3">
                <Tabs defaultValue="grid" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="grid">Dạng lưới</TabsTrigger>
                        <TabsTrigger value="list">Dạng danh sách</TabsTrigger>
                    </TabsList>

                    <TabsContent value="grid" className="animate-fade-in">
                        {filteredSuggestions.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredSuggestions.map((suggestion) => (
                                    <SuggestionCard
                                        key={suggestion.id}
                                        suggestion={suggestion}
                                        onAddFriend={handleAddFriend}
                                        onRemove={handleRemoveSuggestion}
                                    />
                                ))}
                            </div>
                        ) : (
                            <Card className="p-8 text-center">
                                <p className="text-muted-foreground">Không có gợi ý nào phù hợp với bộ lọc</p>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="list" className="animate-fade-in">
                        {filteredSuggestions.length > 0 ? (
                            filteredSuggestions.map((suggestion) => (
                                <SuggestionListItem
                                    key={suggestion.id}
                                    suggestion={suggestion}
                                    onAddFriend={handleAddFriend}
                                    onRemove={handleRemoveSuggestion}
                                />
                            ))
                        ) : (
                            <Card className="p-8 text-center">
                                <p className="text-muted-foreground">Không có gợi ý nào phù hợp với bộ lọc</p>
                            </Card>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
