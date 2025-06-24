import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import { Grid3X3, LayoutGrid } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { DialogFooter } from '@/components/ui/dialog'
import { ImageIcon } from 'lucide-react'
import PhotoCard from './PhotoCard'
import AlbumCard from '../AlbumCard'




export default function CardDisplayPhotos({ searchQuery, setSearchQuery, viewMode, setViewMode, selectedAlbum, setSelectedAlbum, albums, photos }: { searchQuery: string, setSearchQuery: (value: string) => void, viewMode: string, setViewMode: (value: string) => void, selectedAlbum: string | null, setSelectedAlbum: (value: string | null) => void, albums: any[], photos: any[] }) {
    const filteredPhotos = photos.filter((photo) => {
        const matchesSearch = photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesAlbum = selectedAlbum ? photo.albumId === selectedAlbum : true
        return matchesSearch && matchesAlbum
    })
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Bộ lọc</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Tìm kiếm ảnh..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Button
                                variant={viewMode === "grid" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewMode("grid")}
                            >
                                <Grid3X3 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={viewMode === "masonry" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewMode("masonry")}
                            >
                                <LayoutGrid className="h-4 w-4" />
                            </Button>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-2">Albums</h3>
                            <div className="space-y-2">
                                <Button
                                    variant={selectedAlbum === null ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setSelectedAlbum(null)}
                                >
                                    Tất cả ảnh
                                </Button>
                                {albums.map((album) => (
                                    <Button
                                        key={album.id}
                                        variant={selectedAlbum === album.id ? "secondary" : "ghost"}
                                        className="w-full justify-between"
                                        onClick={() => setSelectedAlbum(album.id)}
                                    >
                                        <span>{album.name}</span>
                                        <span className="text-xs text-muted-foreground">{album.count}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Tạo album mới
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Tạo album mới</DialogTitle>
                                    <DialogDescription>Tạo album để tổ chức ảnh của bạn</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="album-name">Tên album</Label>
                                        <Input id="album-name" placeholder="Nhập tên album" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="album-description">Mô tả</Label>
                                        <Input id="album-description" placeholder="Mô tả album (tùy chọn)" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Tạo album</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3">
                <Tabs defaultValue="photos" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="photos">Ảnh ({photos.length})</TabsTrigger>
                        <TabsTrigger value="albums">Albums ({albums.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="photos" className="animate-fade-in">
                        {filteredPhotos.length > 0 ? (
                            <div
                                className={
                                    viewMode === "grid"
                                        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                        : "columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                                }
                            >
                                {filteredPhotos.map((photo) => (
                                    <PhotoCard key={photo.id} photo={photo} />
                                ))}
                            </div>
                        ) : (
                            <Card className="p-8 text-center">
                                <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">Không có ảnh nào</p>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="albums" className="animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {albums.map((album) => (
                                <AlbumCard key={album.id} album={album} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
