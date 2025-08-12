import SchoolOnboardingForm from '@/components/dashboard/forms/school/school-onboarding-form'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function page() {
  return (
    <div>
        <div className="max-w-5xl mx-auto p-16">
        <Card className="border-t-4 border-primary shadow">
          <CardContent className="p-6">
          <SchoolOnboardingForm />

          </CardContent>
        </Card>
        </div>
    </div>
  )
}
