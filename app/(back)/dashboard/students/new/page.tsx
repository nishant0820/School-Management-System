import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users } from "lucide-react";
import SingleStudentForm from "@/components/dashboard/forms/students/student-form";
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form";

export default function AdmissionTabs() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Student Admission Portal
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Choose your preferred admission method
        </p>
      </div>

      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <TabsTrigger
            value="single"
            className="flex items-center gap-2 text-base font-medium h-12 rounded-lg 
                       data-[state=active]:bg-blue-500 data-[state=active]:text-white
                       dark:data-[state=active]:bg-blue-600 
                       transition-all duration-200"
          >
            <User className="h-5 w-5" />
            Single Student
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center gap-2 text-base font-medium h-12 rounded-lg 
                       data-[state=active]:bg-blue-500 data-[state=active]:text-white
                       dark:data-[state=active]:bg-blue-600 
                       transition-all duration-200"
          >
            <Users className="h-5 w-5" />
            Bulk Admission
          </TabsTrigger>
        </TabsList>

        <Card className="border-t-4 border-primary shadow">
          <CardContent className="p-6">
            <TabsContent value="single" className="mt-0">
              <SingleStudentForm />
            </TabsContent>
            <TabsContent value="bulk" className="mt-0">
              <BulkStudentForm />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
