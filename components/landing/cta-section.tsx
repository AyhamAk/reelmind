"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export function CtaSection() {
  const { data: session } = useSession()
  const ctaHref = session?.user ? "/dashboard/manager" : "/login"

  return (
    <section className="relative border-t px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Ready to get started?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Join thousands of creators already growing with ReelMind
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="w-full bg-foreground text-background transition-all hover:bg-foreground/90 sm:w-auto"
          >
            <Link href={ctaHref}>
              {session?.user ? "Go to Dashboard" : "Start Free Trial"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full transition-all sm:w-auto"
          >
            <Link href={session?.user ? "/dashboard/settings" : "/login"}>
              {session?.user ? "Account Settings" : "Contact Sales"}
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required · Free 14-day trial
        </p>
      </div>

      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-3xl" />
        <div className="animate-blob absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-gradient-to-r from-cyan-400/15 to-blue-400/15 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-gradient-to-r from-pink-400/15 to-purple-400/15 blur-3xl" />
      </div>
    </section>
  )
}
