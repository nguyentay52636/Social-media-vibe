import { VideoOff } from "lucide-react"

interface VideoPreviewProps {
    isVideoOff: boolean
    callStatus: "calling" | "connected" | "ended"
    callType: "video" | "voice"
}

export default function VideoPreview({ isVideoOff, callStatus, callType }: VideoPreviewProps) {
    if (callType !== "video" || callStatus !== "connected") return null
    return (
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            {isVideoOff ? (
                <div className="flex items-center justify-center h-full">
                    <VideoOff className="h-12 w-12 text-muted-foreground" />
                </div>
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm">Video đang kết nối...</span>
                </div>
            )}
            {/* Self video preview */}
            <div className="absolute bottom-4 right-4 w-20 h-16 bg-muted rounded border-2 border-white overflow-hidden">
                {isVideoOff ? (
                    <div className="flex items-center justify-center h-full">
                        <VideoOff className="h-4 w-4 text-muted-foreground" />
                    </div>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white text-xs">Bạn</span>
                    </div>
                )}
            </div>
        </div>
    )
} 