"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

import type { Call } from "@/types"
import UserAvatar from "./components/UserAvatar"
import CallInfo from "./components/CallInfo"
import VideoPreview from "./components/VideoPreview"
import CallControls from "./components/CallControls"

interface CallInterfaceProps {
    call: Call
    onEndCall: () => void
    onToggleMic: () => void
    onToggleVideo: () => void
}

export function CallInterface({ call, onEndCall, onToggleMic, onToggleVideo }: CallInterfaceProps) {
    const [duration, setDuration] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [isVideoOff, setIsVideoOff] = useState(false)
    const [callStatus, setCallStatus] = useState<"calling" | "connected" | "ended">(
        call.status === "calling" ? "calling" : "connected",
    )

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (callStatus === "connected") {
            interval = setInterval(() => {
                setDuration((prev) => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [callStatus])

    useEffect(() => {
        if (call.status === "calling") {
            // Simulate call being answered after 3 seconds
            const timeout = setTimeout(() => {
                setCallStatus("connected")
            }, 3000)
            return () => clearTimeout(timeout)
        }
    }, [call.status])

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const handleToggleMic = () => {
        setIsMuted(!isMuted)
        onToggleMic()
    }

    const handleToggleVideo = () => {
        setIsVideoOff(!isVideoOff)
        onToggleVideo()
    }

    const handleEndCall = () => {
        setCallStatus("ended")
        onEndCall()
    }

    if (callStatus === "ended") {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <Card className="w-full max-w-md mx-4 animate-bounce-in">
                <CardContent className="p-8 text-center space-y-6">
                    {/* User Avatar */}
                    <UserAvatar receiver={call.receiver} callStatus={callStatus} />

                    {/* Call Info */}
                    <CallInfo
                        receiver={call.receiver}
                        callType={call.type}
                        callStatus={callStatus}
                        duration={duration}
                        formatDuration={formatDuration}
                    />

                    {/* Video Preview (for video calls) */}
                    <VideoPreview isVideoOff={isVideoOff} callStatus={callStatus} callType={call.type} />

                    {/* Call Controls */}
                    <CallControls
                        callType={call.type}
                        callStatus={callStatus}
                        isMuted={isMuted}
                        isVideoOff={isVideoOff}
                        onToggleMic={handleToggleMic}
                        onToggleVideo={handleToggleVideo}
                        onEndCall={handleEndCall}
                        onAnswer={() => setCallStatus("connected")}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
