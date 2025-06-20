import { DialogDescription } from '@/components/ui/dialog'
import { DialogHeader, DialogFooter, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { Dialog } from '@/components/ui/dialog'
import React from 'react'
import type { User } from '@/types'

export default function UnfriendDialog({ showUnfriendDialog, setShowUnfriendDialog, selectedFriend, handleUnfriend }: { showUnfriendDialog: boolean, setShowUnfriendDialog: (show: boolean) => void, selectedFriend: User | null, handleUnfriend: () => void }) {
    return (
        <>
            <Dialog open={showUnfriendDialog} onOpenChange={setShowUnfriendDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Hủy kết bạn</DialogTitle>
                        <DialogDescription>
                            Bạn có chắc chắn muốn hủy kết bạn với <strong>{selectedFriend?.name}</strong>? Bạn sẽ không còn thấy bài
                            viết của họ trong bảng tin.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowUnfriendDialog(false)}>
                            Hủy
                        </Button>
                        <Button variant="destructive" onClick={handleUnfriend}>
                            Hủy kết bạn
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
