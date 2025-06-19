import React from 'react'
import { Button } from '@/components/ui/button'

interface EmojiSuggestion {
    emoji: string
    name: string
    keywords: string[]
}

interface EmojiSuggestionsProps {
    searchTerm: string
    onEmojiSelect: (emoji: string) => void
    isVisible: boolean
}

const emojiSuggestions: EmojiSuggestion[] = [
    { emoji: '😀', name: 'grinning face', keywords: ['smile', 'happy', 'grin', 'laugh'] },
    { emoji: '😃', name: 'grinning face with big eyes', keywords: ['smile', 'happy', 'joy', 'laugh'] },
    { emoji: '😄', name: 'grinning face with smiling eyes', keywords: ['smile', 'happy', 'joy', 'laugh'] },
    { emoji: '😁', name: 'beaming face with smiling eyes', keywords: ['smile', 'happy', 'joy', 'laugh'] },
    { emoji: '😆', name: 'grinning squinting face', keywords: ['smile', 'happy', 'joy', 'laugh'] },
    { emoji: '😅', name: 'grinning face with sweat', keywords: ['smile', 'happy', 'sweat', 'relief'] },
    { emoji: '😂', name: 'face with tears of joy', keywords: ['laugh', 'joy', 'tears', 'funny'] },
    { emoji: '🤣', name: 'rolling on the floor laughing', keywords: ['laugh', 'joy', 'funny', 'rolling'] },
    { emoji: '😊', name: 'smiling face with smiling eyes', keywords: ['smile', 'happy', 'content', 'pleased'] },
    { emoji: '😇', name: 'smiling face with halo', keywords: ['smile', 'happy', 'angel', 'innocent'] },
    { emoji: '🙂', name: 'slightly smiling face', keywords: ['smile', 'happy', 'slight', 'gentle'] },
    { emoji: '🙃', name: 'upside-down face', keywords: ['silly', 'upside down', 'playful'] },
    { emoji: '😉', name: 'winking face', keywords: ['wink', 'sly', 'playful', 'flirt'] },
    { emoji: '😌', name: 'relieved face', keywords: ['relieved', 'peaceful', 'calm', 'content'] },
    { emoji: '😍', name: 'smiling face with heart-eyes', keywords: ['love', 'heart', 'adore', 'crush'] },
    { emoji: '🥰', name: 'smiling face with hearts', keywords: ['love', 'heart', 'adore', 'crush'] },
    { emoji: '😘', name: 'face blowing a kiss', keywords: ['kiss', 'love', 'romance', 'affection'] },
    { emoji: '😗', name: 'kissing face', keywords: ['kiss', 'love', 'romance', 'affection'] },
    { emoji: '😙', name: 'kissing face with smiling eyes', keywords: ['kiss', 'love', 'romance', 'affection'] },
    { emoji: '😚', name: 'kissing face with closed eyes', keywords: ['kiss', 'love', 'romance', 'affection'] },
    { emoji: '😋', name: 'face savoring food', keywords: ['food', 'yummy', 'delicious', 'tasty'] },
    { emoji: '😛', name: 'face with tongue', keywords: ['tongue', 'silly', 'playful', 'naughty'] },
    { emoji: '😝', name: 'squinting face with tongue', keywords: ['tongue', 'silly', 'playful', 'naughty'] },
    { emoji: '😜', name: 'winking face with tongue', keywords: ['tongue', 'wink', 'silly', 'playful'] },
    { emoji: '🤪', name: 'zany face', keywords: ['crazy', 'zany', 'silly', 'wild'] },
    { emoji: '🤨', name: 'face with raised eyebrow', keywords: ['skeptical', 'doubt', 'question', 'curious'] },
    { emoji: '🧐', name: 'face with monocle', keywords: ['monocle', 'fancy', 'sophisticated', 'curious'] },
    { emoji: '🤓', name: 'nerd face', keywords: ['nerd', 'geek', 'smart', 'intelligent'] },
    { emoji: '😎', name: 'smiling face with sunglasses', keywords: ['cool', 'sunglasses', 'awesome', 'stylish'] },
    { emoji: '🤩', name: 'star-struck', keywords: ['star', 'amazed', 'wow', 'impressed'] },
    { emoji: '🥳', name: 'partying face', keywords: ['party', 'celebration', 'birthday', 'fun'] },
    { emoji: '😏', name: 'smirking face', keywords: ['smirk', 'sly', 'confident', 'smug'] },
    { emoji: '😒', name: 'unamused face', keywords: ['unamused', 'bored', 'disappointed', 'meh'] },
    { emoji: '😞', name: 'disappointed face', keywords: ['disappointed', 'sad', 'let down', 'upset'] },
    { emoji: '😔', name: 'pensive face', keywords: ['pensive', 'thoughtful', 'sad', 'melancholy'] },
    { emoji: '😟', name: 'worried face', keywords: ['worried', 'concerned', 'anxious', 'nervous'] },
    { emoji: '😕', name: 'confused face', keywords: ['confused', 'unsure', 'puzzled', 'uncertain'] },
    { emoji: '🙁', name: 'slightly frowning face', keywords: ['sad', 'frown', 'disappointed', 'unhappy'] },
    { emoji: '☹️', name: 'frowning face', keywords: ['sad', 'frown', 'disappointed', 'unhappy'] },
    { emoji: '😣', name: 'persevering face', keywords: ['persevering', 'struggling', 'determined', 'tough'] },
    { emoji: '😖', name: 'confounded face', keywords: ['confounded', 'frustrated', 'angry', 'upset'] },
    { emoji: '😫', name: 'tired face', keywords: ['tired', 'exhausted', 'sleepy', 'weary'] },
    { emoji: '😩', name: 'weary face', keywords: ['weary', 'tired', 'exhausted', 'frustrated'] },
    { emoji: '🥺', name: 'pleading face', keywords: ['pleading', 'begging', 'puppy eyes', 'cute'] },
    { emoji: '😢', name: 'crying face', keywords: ['cry', 'sad', 'tears', 'upset'] },
    { emoji: '😭', name: 'loudly crying face', keywords: ['cry', 'sad', 'tears', 'sobbing'] },
    { emoji: '😤', name: 'face with steam from nose', keywords: ['steam', 'angry', 'frustrated', 'mad'] },
    { emoji: '😠', name: 'angry face', keywords: ['angry', 'mad', 'furious', 'irritated'] },
    { emoji: '😡', name: 'pouting face', keywords: ['angry', 'mad', 'furious', 'pout'] },
    { emoji: '🤬', name: 'face with symbols on mouth', keywords: ['angry', 'mad', 'furious', 'swearing'] },
    { emoji: '🤯', name: 'exploding head', keywords: ['exploding', 'mind blown', 'shocked', 'amazed'] },
    { emoji: '😳', name: 'flushed face', keywords: ['flushed', 'embarrassed', 'shocked', 'surprised'] },
    { emoji: '🥵', name: 'hot face', keywords: ['hot', 'sweating', 'fever', 'temperature'] },
    { emoji: '🥶', name: 'cold face', keywords: ['cold', 'freezing', 'temperature', 'chilly'] },
    { emoji: '😱', name: 'face screaming in fear', keywords: ['scream', 'fear', 'shocked', 'terrified'] },
    { emoji: '😨', name: 'fearful face', keywords: ['fear', 'scared', 'terrified', 'anxious'] },
    { emoji: '😰', name: 'anxious face with sweat', keywords: ['anxious', 'worried', 'sweat', 'nervous'] },
    { emoji: '😥', name: 'sad but relieved face', keywords: ['sad', 'relieved', 'mixed', 'emotions'] },
    { emoji: '😓', name: 'downcast face with sweat', keywords: ['downcast', 'sweat', 'tired', 'exhausted'] },
    { emoji: '🤗', name: 'hugging face', keywords: ['hug', 'love', 'affection', 'comfort'] },
    { emoji: '🤔', name: 'thinking face', keywords: ['thinking', 'thoughtful', 'contemplating', 'pondering'] },
    { emoji: '🤭', name: 'face with hand over mouth', keywords: ['secret', 'shush', 'quiet', 'surprised'] },
    { emoji: '🤫', name: 'shushing face', keywords: ['shush', 'quiet', 'secret', 'silence'] },
    { emoji: '🤥', name: 'lying face', keywords: ['lie', 'dishonest', 'deceitful', 'fib'] },
    { emoji: '😶', name: 'face without mouth', keywords: ['speechless', 'silent', 'quiet', 'mute'] },
    { emoji: '😐', name: 'neutral face', keywords: ['neutral', 'indifferent', 'expressionless', 'blank'] },
    { emoji: '😑', name: 'expressionless face', keywords: ['expressionless', 'blank', 'neutral', 'indifferent'] },
    { emoji: '😯', name: 'hushed face', keywords: ['hushed', 'surprised', 'quiet', 'shocked'] },
    { emoji: '😦', name: 'frowning face with open mouth', keywords: ['frown', 'sad', 'disappointed', 'open mouth'] },
    { emoji: '😧', name: 'anguished face', keywords: ['anguished', 'pain', 'suffering', 'distressed'] },
    { emoji: '😮', name: 'face with open mouth', keywords: ['open mouth', 'surprised', 'shocked', 'amazed'] },
    { emoji: '😲', name: 'astonished face', keywords: ['astonished', 'surprised', 'shocked', 'amazed'] },
    { emoji: '🥱', name: 'yawning face', keywords: ['yawn', 'tired', 'sleepy', 'bored'] },
    { emoji: '😴', name: 'sleeping face', keywords: ['sleep', 'asleep', 'tired', 'resting'] },
    { emoji: '🤤', name: 'drooling face', keywords: ['drool', 'hungry', 'desire', 'attraction'] },
    { emoji: '😪', name: 'sleepy face', keywords: ['sleepy', 'tired', 'drowsy', 'exhausted'] },
    { emoji: '😵', name: 'dizzy face', keywords: ['dizzy', 'confused', 'disoriented', 'spinning'] },
    { emoji: '🤐', name: 'zipper-mouth face', keywords: ['zipper', 'silent', 'quiet', 'secret'] },
    { emoji: '🥴', name: 'woozy face', keywords: ['woozy', 'dizzy', 'confused', 'intoxicated'] },
    { emoji: '🤢', name: 'nauseated face', keywords: ['nauseated', 'sick', 'disgusted', 'ill'] },
    { emoji: '🤮', name: 'face vomiting', keywords: ['vomit', 'sick', 'nauseated', 'ill'] },
    { emoji: '🤧', name: 'sneezing face', keywords: ['sneeze', 'sick', 'allergy', 'cold'] },
    { emoji: '😷', name: 'face with medical mask', keywords: ['mask', 'sick', 'ill', 'protection'] },
    { emoji: '🤒', name: 'face with thermometer', keywords: ['thermometer', 'sick', 'fever', 'ill'] },
    { emoji: '🤕', name: 'face with head-bandage', keywords: ['bandage', 'injured', 'hurt', 'wound'] },
    { emoji: '🤑', name: 'money-mouth face', keywords: ['money', 'rich', 'wealth', 'greedy'] },
    { emoji: '🤠', name: 'cowboy hat face', keywords: ['cowboy', 'hat', 'western', 'country'] }
]

export function EmojiSuggestions({ searchTerm, onEmojiSelect, isVisible }: EmojiSuggestionsProps) {
    if (!isVisible || !searchTerm.trim()) {
        return null
    }

    const filteredSuggestions = emojiSuggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        suggestion.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    ).slice(0, 8) // Limit to 8 suggestions

    if (filteredSuggestions.length === 0) {
        return null
    }

    return (
        <div className="absolute bottom-full left-0 mb-2 bg-[#242526] border border-gray-700 rounded-xl shadow-2xl z-50 p-2">
            <div className="grid grid-cols-4 gap-1">
                {filteredSuggestions.map((suggestion, index) => (
                    <Button
                        key={`${suggestion.emoji}-${index}`}
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 p-0 text-lg hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center"
                        onClick={() => onEmojiSelect(suggestion.emoji)}
                    >
                        <span>{suggestion.emoji}</span>
                        <span className="text-xs text-gray-400 mt-1 truncate w-full text-center">
                            {suggestion.name}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
    )
} 