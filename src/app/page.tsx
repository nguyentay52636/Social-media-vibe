import Image from "next/image";
import { Sidebar } from "@/components/layout/SiderBar/siderbar";
import { Header } from "@/components/layout/Header/Header";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
    </div>
  );
}
