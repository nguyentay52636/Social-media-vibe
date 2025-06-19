# Emoji Features Documentation

## Tổng quan

Tính năng emoji đã được tích hợp vào ChatBubble component với các chức năng sau:

### 1. Emoji Picker Component (`src/components/ui/emoji-picker.tsx`)

**Tính năng:**
- Hiển thị emoji được phân loại theo 5 danh mục:
  - 😊 Smileys (Biểu tượng cảm xúc)
  - ❤️ Hearts (Trái tim)
  - 👍 Gestures (Cử chỉ)
  - ⭐ Objects (Đồ vật)
  - 🎉 Celebration (Lễ hội)

**Chức năng:**
- Tìm kiếm emoji theo từ khóa
- Chọn emoji bằng cách click
- Giao diện responsive với tabs
- Tự động đóng khi click ra ngoài

**Sử dụng:**
```tsx
import { EmojiPicker } from '@/components/ui/emoji-picker'

<EmojiPicker 
  onEmojiSelect={(emoji) => console.log(emoji)}
  isOpen={showEmojiPicker}
  onClose={() => setShowEmojiPicker(false)}
/>
```

### 2. Emoji Reactions Component (`src/components/ui/emoji-reaction.tsx`)

**Tính năng:**
- 6 emoji phản ứng nhanh: 👍, ❤️, 😂, 😮, 😢, 😡
- Nút tùy chỉnh để chọn emoji khác
- Hiển thị số lượng phản ứng
- Toggle phản ứng (thêm/xóa)

**Chức năng:**
- Click để thêm/xóa phản ứng
- Hiển thị tổng số phản ứng
- Giao diện compact và đẹp mắt

**Sử dụng:**
```tsx
import { EmojiReaction } from '@/components/ui/emoji-reaction'

<EmojiReaction
  onReactionAdd={(emoji) => handleReaction(messageId, emoji)}
  reactions={message.reactions}
  messageId={message.id}
/>
```

### 3. Emoji Suggestions Component (`src/components/ui/emoji-suggestions.tsx`)

**Tính năng:**
- Gợi ý emoji khi gõ từ khóa
- Hỗ trợ tìm kiếm theo tên và từ khóa
- Hiển thị tối đa 8 gợi ý
- Giao diện grid 4x2

**Chức năng:**
- Tự động hiển thị khi gõ từ khóa
- Click để chọn emoji
- Tự động ẩn khi không có kết quả

### 4. Custom Hook (`src/hooks/useEmojiPicker.ts`)

**Tính năng:**
- Quản lý state của emoji picker
- Xử lý đóng/mở picker
- Xử lý click outside và escape key
- Tối ưu performance với useCallback

**Sử dụng:**
```tsx
import { useEmojiPicker } from '@/hooks/useEmojiPicker'

const {
  isOpen,
  togglePicker,
  closePicker,
  handleEmojiSelect
} = useEmojiPicker({
  onEmojiSelect: (emoji) => setMessage(prev => prev + emoji)
})
```

## Tích hợp vào ChatBubble

### State Management
```tsx
const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    content: 'Tin nhắn mẫu',
    senderId: 'user1',
    senderName: 'User 1',
    timestamp: new Date(),
    reactions: [] // Array chứa phản ứng emoji
  }
])
```

### Xử lý phản ứng emoji
```tsx
const handleReactionAdd = (messageId: string, emoji: string) => {
  setMessages(prev => prev.map(message => {
    if (message.id === messageId) {
      const existingReaction = message.reactions.find(r => r.emoji === emoji)
      if (existingReaction) {
        // Xóa phản ứng nếu đã tồn tại
        return {
          ...message,
          reactions: message.reactions.filter(r => r.emoji !== emoji)
        }
      } else {
        // Thêm phản ứng mới
        return {
          ...message,
          reactions: [...message.reactions, {
            emoji,
            count: 1,
            users: [currentUser.name]
          }]
        }
      }
    }
    return message
  }))
}
```

## Cấu trúc dữ liệu

### Message Interface
```tsx
interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderAvatar?: string
  timestamp: Date
  reactions: Array<{
    emoji: string
    count: number
    users: string[]
  }>
}
```

### Reaction Interface
```tsx
interface Reaction {
  emoji: string
  count: number
  users: string[]
}
```

## Styling

Tất cả components sử dụng Tailwind CSS với theme tối:
- Background: `bg-[#242526]`
- Border: `border-gray-700`
- Text: `text-gray-100`
- Hover: `hover:bg-gray-600`

## Tính năng nâng cao

### 1. Keyboard Navigation
- Escape key để đóng emoji picker
- Enter key để gửi tin nhắn
- Tab navigation trong emoji picker

### 2. Accessibility
- ARIA labels cho buttons
- Keyboard navigation support
- Focus management

### 3. Performance
- Lazy loading emoji
- Debounced search
- Memoized components

## Tùy chỉnh

### Thêm emoji mới
```tsx
// Trong emoji-picker.tsx
const emojiCategories = {
  'custom': {
    icon: <CustomIcon className="h-4 w-4" />,
    emojis: ['🆕', '🆒', '🆓']
  }
}
```

### Thay đổi quick reactions
```tsx
// Trong emoji-reaction.tsx
const quickReactions = ['👍', '❤️', '😂', '😮', '😢', '😡', '🆕']
```

### Tùy chỉnh styling
```tsx
// Override CSS classes
<EmojiPicker 
  className="custom-emoji-picker"
  // ...
/>
```

## Troubleshooting

### Lỗi thường gặp

1. **Emoji không hiển thị**
   - Kiểm tra font support
   - Đảm bảo encoding UTF-8

2. **Picker không đóng**
   - Kiểm tra event listeners
   - Đảm bảo class names đúng

3. **Reactions không cập nhật**
   - Kiểm tra state management
   - Đảm bảo message ID đúng

### Debug
```tsx
// Thêm console.log để debug
const handleEmojiSelect = (emoji: string) => {
  console.log('Selected emoji:', emoji)
  setNewMessage(prev => prev + emoji)
}
``` 