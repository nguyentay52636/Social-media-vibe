import React from 'react'
import BasicInfo from './components/BasicInfo'
import Skill from './components/Skill'
import SocialMediaLink from './components/SocialMediaLink'
import QuickStatsCards from './components/QuickStatsCards'
import RecentPhoto from './components/RecentPhoto'
import ImageProfile from './components/ImageProfile'
import TabsMainContent from './components/TabsMainContent/TabsMainContent'

export default function ProfileHeader({ profileData, userPosts, userPhotos, setShowImageSelector }: { profileData: any, userPosts: any, userPhotos: any, setShowImageSelector: any }) {

  return (
    <div className="container mx-auto px-6">
      <ImageProfile profileData={profileData} setShowImageSelector={setShowImageSelector} onClose={() => setShowImageSelector(null)} />

      {/* Quick Stats Cards */}
      <QuickStatsCards profileData={profileData} />

      {/* Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Basic Info */}
          <BasicInfo profileData={profileData} />

          {/* Skills */}
          <Skill profileData={profileData} />

          {/* Social Links */}
          <SocialMediaLink profileData={profileData} />

          {/* Recent Photos */}
          <RecentPhoto profileData={profileData} userPhotos={userPhotos} />
        </div>

        {/* Main Content */}
        <TabsMainContent profileData={profileData} userPosts={userPosts} userPhotos={userPhotos} setShowImageSelector={setShowImageSelector} />
      </div>
    </div>
  )
}
