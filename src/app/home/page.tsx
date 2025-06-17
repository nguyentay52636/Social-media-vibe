import { Sidebar } from "@/components/layout/SiderBar/siderbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Introduction from "./components/Introduction/Introduction";
import CorePage from "./components/CorePage";
import { Call } from "@/types";


export default function Home() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeCall, setActiveCall] = useState<Call | null>(null)
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div
                className={cn("flex-1 transition-all duration-500 ease-in-out", sidebarCollapsed ? "lg:ml-20" : "lg:ml-80")}
            >
                {false ? (
                    <Introduction />
                ) : (
                    <CorePage sidebarCollapsed={sidebarCollapsed} />
                )}
                {/* Call Interface */}
                {/* {activeCall && (
                    <CallInterface call={activeCall} onEndCall={handleEndCall} onToggleMic={() => { }} onToggleVideo={() => { }} />
                )} */}
            </div>

        </div>
    );
}
