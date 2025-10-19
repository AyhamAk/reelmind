"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export function HeroSection() {
  const { data: session } = useSession()
  const ctaHref = session?.user ? "/dashboard/manager" : "/login"

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Simple badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
            <span className="text-foreground">Open-source • Privacy-first • n8n-powered</span>
          </div>

          {/* Clean, large headline */}
          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Social media automation for creators who own their data
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Automate Instagram posting. Generate viral TikTok content. Predict engagement with AI.
            Built on open-source n8n. Your data, your rules.
          </p>

          {/* Simple CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="w-full bg-foreground text-background transition-all hover:bg-foreground/90 sm:w-auto"
            >
              <Link href={ctaHref}>
                {session?.user ? "Go to Dashboard" : "Get Started"}
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

      {/* Animated gradient bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large center bubble */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />

        {/* Animated floating bubbles */}
        <div className="animate-blob absolute left-[20%] top-[10%] h-72 w-72 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-[15%] top-[30%] h-96 w-96 rounded-full bg-gradient-to-r from-cyan-400/15 to-blue-400/15 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-[20%] left-[30%] h-80 w-80 rounded-full bg-gradient-to-r from-pink-400/15 to-rose-400/15 blur-3xl" />
      </div>
    </section>
  )
}
