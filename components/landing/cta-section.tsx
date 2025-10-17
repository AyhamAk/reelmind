import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="border-t px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
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
            <Link href="/login">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full transition-all sm:w-auto"
          >
            <Link href="#contact">Contact Sales</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required · Free 14-day trial
        </p>
      </div>
    </section>
  )
}
