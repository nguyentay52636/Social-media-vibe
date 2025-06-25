"use client"
import HomePage from "@/app/home/page"
import LoadingWrapper from "@/components/ui/loading-wrapper"

export default function Home() {
  return (
    <LoadingWrapper loadingTime={2000} loadingText="Đang tải ứng dụng...">
      <div className="">
        <HomePage />
      </div>
    </LoadingWrapper>
  )
}
