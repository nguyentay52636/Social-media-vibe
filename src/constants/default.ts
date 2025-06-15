export const DEFAULT_VALUES = {
    PAGINATION: {
      PAGE_SIZE: 10,
      INITIAL_PAGE: 1,
    },
    UPLOAD: {
      MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
      ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp"],
      ALLOWED_VIDEO_TYPES: ["video/mp4", "video/webm"],
    },
    TIMEOUTS: {
      API_REQUEST: 30000, // 30 seconds
      DEBOUNCE: 300, // 300ms
    },
    LIMITS: {
      POST_CONTENT_LENGTH: 2000,
      COMMENT_LENGTH: 500,
      BIO_LENGTH: 160,
    },
  } as const
  
  export const MOCK_AVATARS = {
    DEFAULT: "/placeholder.svg?height=40&width=40&text=U",
    GENERATE: (text: string, size = 40) => `/placeholder.svg?height=${size}&width=${size}&text=${text}`,
  } as const
  
  export const STATUS = {
    ONLINE: "online",
    OFFLINE: "offline",
    AWAY: "away",
    BUSY: "busy",
  } as const
  