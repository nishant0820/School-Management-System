import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GridFeatures() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Revolutionize the way schools manage their operations
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground text-lg sm:text-xl"></p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
                    <Card className="relative overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-2xl">AI Video Editing</CardTitle>
                            <p className="text-muted-foreground">Transform raw footage into polished videos with our AI-powered editing tools.</p>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">AI Video Editing</CardTitle>
                            <p className="text-muted-foreground">Transform raw footage into polished videos with our AI-powered editing tools.</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}