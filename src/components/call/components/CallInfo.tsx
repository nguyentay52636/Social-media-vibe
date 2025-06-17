import { Badge } from "@/components/ui/badge"

interface CallInfoProps {
    receiver: { name: string; avatar?: string }
    callType: "video" | "voice"
    callStatus: "calling" | "connected" | "ended"
    duration: number
    formatDuration: (seconds: number) => string
}

export default function CallInfo({ receiver, callType, callStatus, duration, formatDuration }: CallInfoProps) {
    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">{receiver.name}</h2>
            <div className="flex items-center justify-center space-x-2">
                <Badge variant={callType === "video" ? "default" : "secondary"}>
                    {callType === "video" ? "Video call" : "Voice call"}
                </Badge>
                {callStatus === "calling" && (
                    <Badge variant="outline" className="animate-pulse">
                        Đang gọi...
                    </Badge>
                )}
                {callStatus === "connected" && <Badge variant="secondary">{formatDuration(duration)}</Badge>}
            </div>
        </div>
    )
} 