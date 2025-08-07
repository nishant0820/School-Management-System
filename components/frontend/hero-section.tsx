import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SmallTitle from "./small-title";


export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <SmallTitle title="✨Welcome to LearneX" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">Smart School Management Made Simple</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">Empower your educational institute with an all-in-one platform that streamlines administration, enhances communication and drives student success.</p>
        <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full h-12 px-6 text-base">Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-base">Discover Features
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </section>
  );
}
