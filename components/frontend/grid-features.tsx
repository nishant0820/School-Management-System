import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";
import Image from "next/image";
import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Student Information System",
    description:
      "Centralized student data management with digital enrollment, profile tracking and academic records in one secure location.",
    icon: Users,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Academic Excellence Suite",
    description:
      "Comprehensive tools for curriculum planning, examination management, and automated grading with detailed performance analytics.",
    icon: GraduationCap,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Smart Communication Hub",
    description:
      "Multi-channel messaging platform connecting teachers and students with real-time notificaions and updates.",
    icon: MessageSquare,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Financial Management System",
    description:
      "Streamlined fee collection, automated billing and comprehensive financial reporting with secure payment processing.",
    icon: DollarSign,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Staff and HR Management",
    description:
      "Complete staff administration with attendance tracking, performance management and automated payroll processing.",
    icon: ClipboardList,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Transport & Safety Control",
    description:
      "Real-time fleet tracking, route optimization and automated parent notifications for secure student trnsportation.",
    icon: Bus,
    image: "/images/placeholder.jpg"
  },
  {
    title: "Resource & Facility Manager",
    description:
      "Digital library system, inventory tracking and smart scheduling tools for optimal resource utilization.",
    icon: BookOpen,
    image: "/images/placeholder.jpg"
  },
];

export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          title="✨Features"
          heading="All-in-One School Management Platform"
          description="Manage your school operations seamlessly with our comprehensive platform."
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">
                {features[0].title}
              </CardTitle>
              <p className="text-muted-foreground">
                {features[0].description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative bg-muted rounded-lg p-2">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 border-r flex flex-col gap-2 p-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square rounded bg-muted-foreground/10 flex items-center justify-center"
                    />
                  ))}
                </div>
                <Image
                  src={features[0].image}
                  width={600}
                  height={400}
                  alt={features[0].title}
                  className="rounded ml-16"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {features[1].title}
              </CardTitle>
              <p className="text-muted-foreground">
                {features[1].description}
              </p>
            </CardHeader>
            <CardContent className="">
                <Image
                  src={features[1].image}
                  width={600}
                  height={400}
                  alt={features[0].title}
                  className="rounded w-full"
                />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
