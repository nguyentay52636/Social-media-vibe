import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    receiver: { name: string; avatar?: string }
    callStatus: "calling" | "connected" | "ended"
}

export default function UserAvatar({ receiver, callStatus }: UserAvatarProps) {
    return (
        <div className="relative mx-auto w-32 h-32">
            <Avatar className="w-full h-full">
                <AvatarImage src={receiver.avatar || ""} alt={receiver.name} />
                <AvatarFallback className="text-4xl">{receiver.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {callStatus === "calling" && (
                <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse-ring" />
            )}
        </div>
    )
} 