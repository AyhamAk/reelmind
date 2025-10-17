import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Simple badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
            <span className="text-foreground">Introducing ReelMind</span>
          </div>

          {/* Clean, large headline */}
          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Create, schedule, and grow your social media presence
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            The all-in-one platform for TikTok and Instagram creators.
            AI-powered tools to help you create stunning content and manage your growth.
          </p>

          {/* Simple CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="w-full bg-foreground text-background transition-all hover:bg-foreground/90 sm:w-auto"
            >
              <Link href="/login">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full transition-all sm:w-auto"
            >
              <Link href="#products">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Simple social proof */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Trusted by 500+ creators worldwide</p>
          </div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  )
}
