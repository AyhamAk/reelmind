"use client"

import Link from "next/link"
import { Download, Star, Workflow, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

const workflows = [
  {
    name: "Auto Cross-Post",
    description: "Automatically repost Instagram Reels to TikTok with optimized captions and hashtags",
    downloads: "2.4K",
    rating: 4.9,
    category: "Automation",
  },
  {
    name: "Competitor Monitor",
    description: "Track competitor posts and get Slack alerts when they publish viral content",
    downloads: "1.8K",
    rating: 4.8,
    category: "Analytics",
  },
  {
    name: "Trend Scraper",
    description: "Auto-fetch trending TikTok sounds and hashtags daily, save to your library",
    downloads: "3.1K",
    rating: 5.0,
    category: "Research",
  },
  {
    name: "AI Comment Reply",
    description: "Auto-reply to comments with AI-generated responses based on sentiment analysis",
    downloads: "1.2K",
    rating: 4.7,
    category: "Engagement",
  },
]

export function WorkflowMarketplaceSection() {
  const { data: session } = useSession()
  const ctaHref = session?.user ? "/dashboard/manager" : "/login"

  return (
    <section className="border-t bg-muted/30 px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="workflows">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium">
            <Workflow className="h-4 w-4" />
            <span className="text-foreground">n8n Workflow Marketplace</span>
            <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-semibold text-yellow-600 dark:text-yellow-500">
              Coming Soon
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Install automations in one click
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse community-built n8n workflows. No coding required. Deploy instantly.
          </p>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Workflow marketplace launching soon. Get early access when you sign up!
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {workflows.map((workflow) => (
            <div
              key={workflow.name}
              className="group overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {workflow.name}
                    </h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                      {workflow.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {workflow.description}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>{workflow.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{workflow.rating}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full cursor-not-allowed opacity-60"
                disabled
              >
                <Zap className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </div>
          ))}
        </div>

        {/* CTA to Marketplace */}
        <div className="text-center">
          <p className="mb-4 text-muted-foreground">
            100+ workflows will be available when marketplace launches
          </p>
          <Button
            size="lg"
            className="cursor-not-allowed opacity-60"
            disabled
          >
            Marketplace Coming Soon
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Want early access?{" "}
            <Link href={ctaHref} className="font-medium text-foreground underline">
              {session?.user ? "Check your dashboard" : "Sign up now"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
