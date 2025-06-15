export const ROUTES = {
  
    HOME: "/",
    AUTH: {
      LOGIN: "/auth/login",
      SIGNUP: "/auth/signup",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/reset-password",
    },
    PROFILE: "/profile",
    SETTINGS: "/settings",
    MESSAGES: "/messages",
    NOTIFICATIONS: "/notifications",
    FRIENDS: "/friends",
    PHOTOS: "/photos",
    EVENTS: "/events",
    GAMES: "/games",
    MUSIC: "/music",
    SAVED: "/saved",
    SEARCH: "/search",
    TRENDING: "/trending",
  } as const
  
  export const API_ROUTES = {
    AUTH: {
      LOGIN: "/api/auth/login",
      SIGNUP: "/api/auth/register",
      LOGOUT: "/api/auth/logout",
      FORGOT_PASSWORD: "/api/auth/forgot-password",
      RESET_PASSWORD: "/api/auth/reset-password",
    },
    POSTS: "/api/posts",
    MESSAGES: "/api/messages",
    NOTIFICATIONS: "/api/notifications",
    USERS: "/api/users",
  } as const
  