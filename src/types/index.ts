export interface User {
    id: string
    name: string
    stats: {},
    username?: string
    email: string
    avatar?: string
    coverPhoto?: string
    bio?: string
    location?: string
    workplace?: string
    education?: string
    followers?: number
    following?: number
    photos?: number
    isOnline?: boolean
    interests?: string[]
    mutualFriends?: number
    friendsCount?: number
    postsCount?: number
    lastSeen?: string
    website?: string
    joinDate?: string
    notifications?: {
      likes: boolean
      comments: boolean
      messages: boolean
      friendRequests: boolean
      events: boolean
    }
    privacy?: {
      profileVisibility: string
      postVisibility: string
      friendListVisibility: string
      onlineStatus: boolean
    }
  }
  
  export interface Post {
    id: string
    content: string
    images?: string[]
    author: User
    createdAt: string
    updatedAt?: string
    likes: number
    comments: number
    shares: number
    liked?: boolean
    saved?: boolean
    topics?: string[]
  }
  
  export interface Comment {
    id: string
    postId: string
    userId: string
    content: string
    createdAt: string
    likes: number
    parentId?: string
  }
  
  export interface Like {
    id: string
    userId: string
    user: User
    targetId: string
    targetType: "post" | "comment"
    createdAt: string
  }
  
  export interface Story {
    id: string
    userId: string
    user?: User
    image: string
    createdAt: string
    expiresAt: string
    views?: number
    caption?: string
    isViewed?: boolean
    type?: "image" | "video"
  }
  
  export interface FriendRequest {
    id: string
    senderId: string
    sender: User
    receiverId: string
    receiver: User
    status: "pending" | "accepted" | "rejected"
    createdAt: string
  }
  
  export interface Conversation {
    id: string
    participants: User[]
    lastMessage: Message
    updatedAt: string
  }
  
  export interface Message {
    id: string
    senderId: string
    sender?: User
    receiverId: string
    receiver?: User
    content: string
    type?: "text" | "image" | "video" | "file"
    createdAt?: string
    isRead?: boolean
    timestamp?: string
    read?: boolean
  }
  
  export interface Notification {
    id: string
    userId: string
    type: "like" | "comment" | "friend_request" | "share" | "mention"
    content: string
    actorId: string
    targetId: string | null
    read: boolean
    createdAt: string
  }
  
  export interface Call {
    id: string
    callerId: string
    caller: User
    receiverId: string
    receiver: User
    type: "voice" | "video"
    status: "calling" | "ongoing" | "ended" | "missed"
    startTime: string
    endTime?: string
  }
  
  export interface Event {
    id: string
    title: string
    description: string
    location: string
    startDate: string
    endDate: string
    image?: string
    organizer: User
    attendees: number
    interested: number
    price: string
    category: string
  }
  