import { useState, useEffect, useCallback } from 'react'

interface UseEmojiPickerProps {
  onEmojiSelect: (emoji: string) => void
}

export function useEmojiPicker({ onEmojiSelect }: UseEmojiPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const openPicker = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closePicker = useCallback(() => {
    setIsOpen(false)
    setSearchTerm('')
  }, [])

  const togglePicker = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleEmojiSelect = useCallback((emoji: string) => {
    onEmojiSelect(emoji)
    closePicker()
  }, [onEmojiSelect, closePicker])

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest('.emoji-picker-container') && !target.closest('.emoji-button')) {
        closePicker()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen, closePicker])

  // Close picker on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closePicker()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, closePicker])

  return {
    isOpen,
    searchTerm,
    setSearchTerm,
    openPicker,
    closePicker,
    togglePicker,
    handleEmojiSelect
  }
} 