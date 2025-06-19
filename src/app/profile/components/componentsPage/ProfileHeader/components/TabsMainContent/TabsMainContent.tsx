"use client";
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

import TabsMainContentBody from './components/TabsMainContentBody'
import TabsProduction from './components/TabsProduction'

export default function TabsMainContent({ profileData, userPosts, userPhotos, setShowImageSelector }: { profileData: any, userPosts: any, userPhotos: any, setShowImageSelector: any }) {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <>
      <div className="lg:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsProduction />
          <TabsMainContentBody userPosts={userPosts} profileData={profileData} userPhotos={userPhotos} setShowImageSelector={setShowImageSelector} />
        </Tabs>
      </div>
    </>
  )
}
