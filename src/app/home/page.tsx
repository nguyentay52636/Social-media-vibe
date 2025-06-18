"use client"

import { Sidebar } from "@/components/layout/SiderBar/siderbar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Introduction from "./components/Introduction/Introduction";
import CorePage from "./components/CorePage";
import { Call } from "@/types";
import { CallInterface } from "@/components/call/CallInterface";
import { users } from "@/lib/mock-data";


export default function Home() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeCall, setActiveCall] = useState<Call | null>(null)
    const handleEndCall = () => {
        setActiveCall(null)
    }
    const onlineUsers = users.filter((u) => u.isOnline)

    useEffect(() => {
        const handleSidebarToggle = (e: any) => {
            setSidebarCollapsed(e.detail.collapsed);
        };
        window.addEventListener("sidebarToggle", handleSidebarToggle);
        return () => window.removeEventListener("sidebarToggle", handleSidebarToggle);
    }, []);

    return (
        <div className="min-h-screen bg-background flex">
            <Sidebar />
            <div
                className={cn("flex-1 transition-all duration-500 ease-in-out", sidebarCollapsed ? "lg:ml-20" : "lg:ml-80")}
            >
                {false ? (
                    <Introduction />
                ) : (
                    <CorePage sidebarCollapsed={sidebarCollapsed} onlineUsers={onlineUsers} />
                )}
                {/* Call Interface */}
                {activeCall && (
                    <CallInterface call={activeCall} onEndCall={handleEndCall} onToggleMic={() => { }} onToggleVideo={() => { }} />
                )}
            </div>
        </div>
    );
}
