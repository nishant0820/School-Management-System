"use client";

import { BarChart2, GraduationCap, MessageSquare, Users } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "./section-header";

const features = [
  {
    icon: Users,
    tab: "Students",
    title: "Student Management",
    description:
      "Comprehensive student profiles, enrollment, attendance tracking, and academic progress monitoring",
    href: "/features/student-management",
    subFeatures: [
      "Student admission & enrollment",
      "Digital student profiles",
      "Academic history tracking",
      "Attendance monitoring",
      "Parent/guardian information",
      "Health records management",
      "Disciplinary records",
      "Student ID card generation",
      "Bulk student operations",
      "Student transfer management",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: GraduationCap,
    tab: "Academics",
    title: "Academic Management",
    description:
      "Course management, curriculum planning, grading systems, and examination scheduling",
    href: "/features/academic-management",
    subFeatures: [
      "Curriculum planning & management",
      "Subject & class scheduling",
      "Grade book management",
      "Assignment tracking",
      "Online examination system",
      "Report card generation",
      "Academic calendar management",
      "Lesson plan templates",
      "Performance analytics",
      "Certificate generation",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: MessageSquare,
    tab: "Communication",
    title: "Communication Hub",
    description:
      "Parent-teacher communication, announcements, messaging, and notification system",
    href: "/features/communication",
    subFeatures: [
      "Parent-teacher messaging",
      "SMS & email notifications",
      "Digital notice board",
      "Event announcements",
      "Emergency alerts",
      "Parent portal access",
      "Group messaging",
      "Homework notifications",
      "Fee reminders",
      "Progress updates",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: BarChart2,
    tab: "Analytics",
    title: "Reports & Analytics",
    description:
      "Academic reports, attendance analytics, financial summaries, and performance insights",
    href: "/features/analytics",
    subFeatures: [
      "Student performance reports",
      "Attendance analytics",
      "Financial summaries",
      "Teacher performance metrics",
      "Class-wise comparisons",
      "Trend analysis",
      "Custom report builder",
      "Export to PDF/Excel",
      "Dashboard insights",
      "Automated report scheduling",
    ],
    image: "/images/placeholder.jpg",
  },
];

export default function TabbedFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="py-8">
        <SectionHeader
        title="✨Additional Features"
        heading="All-in-One School Management Platform"
        description="Manage your school operations seamlessly with our comprehensive platform."
      />
      </div>
      <Tabs defaultValue={features[0].tab.toLowerCase()} className="space-y-8">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsTrigger
                key={feature.tab}
                value={feature.tab.toLowerCase()}
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-4 pb-4 pt-2 data-[state=active]:border-primary"
              >
                <Icon className="h-5 w-5" />
                {feature.tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {features.map((feature) => (
          <TabsContent
            key={feature.tab}
            value={feature.tab.toLowerCase()}
            className="space-y-8"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
                <Card>
                  <CardContent className="grid gap-4 p-6">
                    {feature.subFeatures.map((subFeature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {index + 1}
                        </div>
                        <span>{subFeature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Button asChild>
                  <Link href={feature.href}>
                    Learn more about {feature.title}
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lgLaspect-square">
                <Image
                  src={feature.image}
                  alt={`${feature.title} illustration`}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
