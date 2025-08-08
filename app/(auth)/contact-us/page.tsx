import ContactUs from "@/components/frontend/contact-us";
import SectionHeader from "@/components/frontend/section-header";
import Logo from "@/components/logo";
import React from "react";

export default function page() {
  return (
    <div className="py-16">
      <div className="py-6">
        <div className="flex items-center justify-center pb-4">
          <Logo />
        </div>
      <SectionHeader
        title=""
        heading="All-in-One School Management Platform"
        description="Manage your school operations seamlessly with our comprehensive platform."
      />
      </div>
      <ContactUs />
    </div>
  );
}
