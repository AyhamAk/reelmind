import Link from "next/link"
import { Instagram, Calendar, Sparkles, Wand2, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Social Media Manager",
    description:
      "Manage your TikTok and Instagram presence effortlessly. Schedule posts, track performance, and engage with your audience—all from one powerful dashboard.",
    icon: Calendar,
    gradient: "from-pink-500 to-purple-600",
    features: [
      {
        icon: Calendar,
        title: "Auto Posting",
        description: "Schedule and auto-post to TikTok and Instagram at optimal times",
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track engagement, reach, and growth across both platforms",
      },
      {
        icon: Clock,
        title: "Smart Scheduling",
        description: "AI-powered suggestions for the best posting times",
      },
    ],
    cta: "Start Managing",
    ctaHref: "/login",
  },
  {
    name: "Content Generator",
    description:
      "Create stunning, scroll-stopping content in seconds. AI-powered poster generation designed specifically for TikTok and Instagram that drives engagement.",
    icon: Wand2,
    gradient: "from-blue-500 to-cyan-600",
    features: [
      {
        icon: Sparkles,
        title: "AI-Powered Design",
        description: "Generate professional posters and graphics instantly",
      },
      {
        icon: Instagram,
        title: "Platform Optimized",
        description: "Perfect dimensions and formats for TikTok & Instagram",
      },
      {
        icon: Wand2,
        title: "Custom Templates",
        description: "Access hundreds of templates or create your own",
      },
    ],
    cta: "Create Content",
    ctaHref: "/login",
  },
]

export function ProductsSection() {
  return (
    <section className="border-t py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful tools for social media success
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create, schedule, and manage your TikTok and
            Instagram content like a pro.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => {
            const ProductIcon = product.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={product.name}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Product Info */}
                <div
                  className={`flex flex-col justify-center ${
                    !isEven ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white`}
                  >
                    <ProductIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold">{product.name}</h3>
                  <p className="mb-8 text-lg text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 space-y-4">
                    {product.features.map((feature) => {
                      const FeatureIcon = feature.icon
                      return (
                        <div key={feature.title} className="flex gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.gradient} text-white`}
                          >
                            <FeatureIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="mb-1 font-semibold">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div>
                    <Button size="lg" asChild>
                      <Link href={product.ctaHref}>{product.cta}</Link>
                    </Button>
                  </div>
                </div>

                {/* Product Visual */}
                <div
                  className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${product.gradient} p-8 shadow-2xl`}
                  >
                    {/* Mockup/Visual Placeholder */}
                    <div className="relative aspect-square rounded-2xl bg-background/10 backdrop-blur-sm">
                      <div className="flex h-full items-center justify-center">
                        <ProductIcon className="h-32 w-32 text-white/40" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                    </div>
                  </div>
                  {/* Shadow effect */}
                  <div
                    className={`absolute inset-0 -z-10 translate-y-4 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-20 blur-2xl`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to supercharge your social media?
          </p>
          <Button size="lg" asChild>
            <Link href="/login">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
