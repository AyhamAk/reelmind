import React from "react"
import Link from "next/link"
import { Instagram, Calendar, Wand2, BarChart3, Clock, ArrowRight, Video, Image, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Instagram Manager",
    description:
      "Automate Instagram posts, track analytics, and schedule content with official Graph API integration.",
    icon: Calendar,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    badge: "Most Popular",
    features: [
      {
        icon: Calendar,
        title: "Auto-Post to IG",
      },
      {
        icon: BarChart3,
        title: "Real Analytics",
      },
      {
        icon: Clock,
        title: "Smart Schedule",
      },
    ],
    cta: "Start Managing",
    ctaHref: "/dashboard/manager",
  },
  {
    name: "Instagram Generator",
    description:
      "Create stunning posts, stories, and reels with AI. Get viral scores before you post.",
    icon: Instagram,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    badge: null,
    features: [
      {
        icon: TrendingUp,
        title: "Viral Score AI",
      },
      {
        icon: Image,
        title: "Stories & Posts",
      },
      {
        icon: Wand2,
        title: "AI Templates",
      },
    ],
    cta: "Create Content",
    ctaHref: "/dashboard/instagram",
  },
  {
    name: "TikTok Content Studio",
    description:
      "Generate viral videos, captions, and hashtags. Download and upload to TikTok with one tap.",
    icon: Video,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    badge: "New",
    features: [
      {
        icon: TrendingUp,
        title: "Viral Score AI",
      },
      {
        icon: Video,
        title: "Video Generator",
      },
      {
        icon: Zap,
        title: "Trend Insights",
      },
    ],
    cta: "Create Content",
    ctaHref: "/dashboard/tiktok",
  },
]

export function ProductsSection() {
  return (
    <section className="border-t px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="products">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Three powerful products
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed on TikTok and Instagram
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const ProductIcon = product.icon

            return (
              <div
                key={product.name}
                className="group relative flex flex-col overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col">
                  {/* Icon and Badge */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <ProductIcon className="h-6 w-6 text-foreground" />
                    </div>
                    {product.badge && (
                      <span className="rounded-full border bg-background px-3 py-1 text-xs font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-semibold text-foreground">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 min-h-[4.5rem] text-base leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8 flex-1 space-y-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="flex h-5 w-5 items-center justify-center">
                          {React.createElement(feature.icon, {
                            className: "h-4 w-4 text-muted-foreground",
                          })}
                        </div>
                        <span className="text-foreground">{feature.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full transition-all hover:bg-muted"
                  >
                    <Link href={product.ctaHref}>
                      {product.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
