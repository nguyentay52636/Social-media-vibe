import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Upload } from 'lucide-react'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DialogFooter } from '@/components/ui/dialog'

export default function DialogUploadsPhotos({ albums }: { albums: any[] }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold">Ảnh</h1>
                <p className="text-muted-foreground">Quản lý và chia sẻ khoảnh khắc của bạn</p>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Tải ảnh lên
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Tải ảnh lên</DialogTitle>
                        <DialogDescription>Chọn ảnh và album để tải lên</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="photo-upload">Chọn ảnh</Label>
                            <Input id="photo-upload" type="file" multiple accept="image/*" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="photo-caption">Mô tả</Label>
                            <Input id="photo-caption" placeholder="Thêm mô tả cho ảnh..." />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="photo-album">Album</Label>
                            <Select defaultValue="1">
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn album" />
                                </SelectTrigger>
                                <SelectContent>
                                    {albums.map((album) => (
                                        <SelectItem key={album.id} value={album.id}>
                                            {album.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Tải lên</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
