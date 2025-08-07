import { DashboardPreview } from '@/components/frontend/dashboard-preview'
import HeroSection from '@/components/frontend/hero-section'
import LogoCloud from '@/components/frontend/logo-cloud'
import React from 'react'

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
    </main>
  )
}
