"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft, ServerCrash, RefreshCw } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50/50 p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="pt-16">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/90 p-6">
                <ServerCrash className="h-12 w-12 text-destructive-foreground" aria-hidden="true" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">
            500 - Server Error
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Sorry! Something went wrong on our server. We&apos;re working to fix the issue.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="outline" onClick={() => window.location.reload()}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Page
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                </Button>
            </div>
        </CardContent>
        <CardFooter className="justify-center pb-16 pt-8 text-sm text-muted-foreground">
            ©{new Date().getFullYear()} LearneX. All Rights Reserved.
        </CardFooter>
      </Card>
    </main>
  );
}
