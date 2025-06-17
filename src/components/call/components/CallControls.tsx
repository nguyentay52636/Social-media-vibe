import { Button } from "@/components/ui/button"
import { Phone, PhoneOff, Mic, MicOff, Video, VideoOff, Volume2 } from "lucide-react"

interface CallControlsProps {
    callType: "video" | "voice"
    callStatus: "calling" | "connected" | "ended"
    isMuted: boolean
    isVideoOff: boolean
    onToggleMic: () => void
    onToggleVideo: () => void
    onEndCall: () => void
    onAnswer: () => void
}

export default function CallControls({ callType, callStatus, isMuted, isVideoOff, onToggleMic, onToggleVideo, onEndCall, onAnswer }: CallControlsProps) {
    return (
        <div className="flex items-center justify-center space-x-4">
            {callStatus === "connected" && (
                <>
                    <Button
                        variant={isMuted ? "destructive" : "secondary"}
                        size="icon"
                        className="h-12 w-12 rounded-full"
                        onClick={onToggleMic}
                    >
                        {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                    {callType === "video" && (
                        <Button
                            variant={isVideoOff ? "destructive" : "secondary"}
                            size="icon"
                            className="h-12 w-12 rounded-full"
                            onClick={onToggleVideo}
                        >
                            {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                        </Button>
                    )}
                    <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full">
                        <Volume2 className="h-5 w-5" />
                    </Button>
                </>
            )}
            <Button variant="destructive" size="icon" className="h-12 w-12 rounded-full" onClick={onEndCall}>
                <PhoneOff className="h-5 w-5" />
            </Button>
            {callStatus === "calling" && (
                <Button
                    variant="default"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-green-600 hover:bg-green-700"
                    onClick={onAnswer}
                >
                    <Phone className="h-5 w-5" />
                </Button>
            )}
        </div>
    )
} 