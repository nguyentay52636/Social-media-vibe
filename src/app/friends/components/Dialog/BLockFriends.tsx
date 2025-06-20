import { Button } from '@/components/ui/button'
import { Dialog, DialogFooter, DialogDescription, DialogTitle, DialogHeader, DialogContent } from '@/components/ui/dialog'
import { User } from '@/types'
import React from 'react'

export default function BLockFriends({
  showBlockDialog,
  setShowBlockDialog,
  selectedFriend,
  handleBlock
}: {
  showBlockDialog: boolean
  setShowBlockDialog: (show: boolean) => void
  selectedFriend: User
  handleBlock: () => void
}) {
  return (
    <>
      <Dialog open={showBlockDialog} onOpenChange={setShowBlockDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chặn người dùng</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn chặn <strong>{selectedFriend?.name}</strong>? Họ sẽ không thể tìm thấy trang cá nhân
              của bạn hoặc liên hệ với bạn.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBlockDialog(false)}>
              Hủy
            </Button>
            <Button variant="destructive" onClick={handleBlock}>
              Chặn
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
