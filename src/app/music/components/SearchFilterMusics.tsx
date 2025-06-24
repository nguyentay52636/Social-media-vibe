import { Card } from '@/components/ui/card'
import React from 'react'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Play, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import PlayListCard from './PlayListCard'
import TrackItem from './TrackItem'

export default function SearchFilterMusics({ searchQuery, setSearchQuery, recentlyPlayed, playlists, tracks }: { searchQuery: string, setSearchQuery: (value: string) => void, recentlyPlayed: any[], playlists: any[], tracks: any[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Tìm kiếm</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Tìm bài hát, nghệ sĩ..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Nghe gần đây</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {recentlyPlayed.map((track) => (
                            <div
                                key={track.id}
                                className="flex items-center space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded-md"
                            >
                                <img src={track.cover || "/placeholder.svg"} alt={track.title} className="w-10 h-10 rounded-md" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{track.title}</p>
                                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3">
                <Tabs defaultValue="playlists" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="playlists">Playlist</TabsTrigger>
                        <TabsTrigger value="tracks">Bài hát</TabsTrigger>
                        <TabsTrigger value="discover">Khám phá</TabsTrigger>
                    </TabsList>

                    <TabsContent value="playlists" className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {playlists.map((playlist) => (
                                <PlayListCard key={playlist.id} playlist={playlist} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tracks" className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                            {tracks.map((track) => (
                                <TrackItem key={track.id} track={track} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="discover" className="space-y-6 animate-fade-in">
                        <Card>
                            <CardHeader>
                                <CardTitle>Đề xuất cho bạn</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {tracks.slice(0, 4).map((track) => (
                                        <div key={track.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                                            <img
                                                src={track.cover || "/placeholder.svg"}
                                                alt={track.title}
                                                className="w-12 h-12 rounded-md"
                                            />
                                            <div className="flex-1">
                                                <p className="font-medium">{track.title}</p>
                                                <p className="text-sm text-muted-foreground">{track.artist}</p>
                                            </div>
                                            <Button size="icon" variant="ghost">
                                                <Play className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
