import { Dialog } from '@/components/ui/dialog'
import { DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { User } from '@/types'

interface DIalogUnblockedProps {
  showUnblockDialog: boolean
  setShowUnblockDialog: (show: boolean) => void 
  selectedUser: User | null
  handleUnblock: () => void
}
export default function DIalogUnblocked({ showUnblockDialog, setShowUnblockDialog, selectedUser, handleUnblock }: DIalogUnblockedProps) {
  return (
    <>
      <Dialog open={showUnblockDialog} onOpenChange={setShowUnblockDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bỏ chặn người dùng</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn bỏ chặn <strong>{selectedUser?.name}</strong>? Họ sẽ có thể tìm thấy trang cá nhân
              của bạn và tương tác với bạn trở lại.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUnblockDialog(false)}>
              Hủy
            </Button>
            <Button onClick={handleUnblock} className="bg-green-600 hover:bg-green-700">
              Bỏ chặn
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
