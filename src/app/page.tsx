import { Sidebar } from "@/components/layout/SiderBar/siderbar";



export default function Home() {
  // // const [selectedChatUser, setSelectedChatUser] = useState<User | null>(null)
  // const [activeCall, setActiveCall] = useState<Call | null>(null)
  // const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* <div
        className={cn("flex-1 transition-all duration-500 ease-in-out", sidebarCollapsed ? "lg:ml-20" : "lg:ml-80")}
      > </div> */}

    </div>
  );
}
