import { Workflow, Sparkles, Calendar, BarChart3, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Viral Score AI™",
    description:
      "Predict viral potential before you post. AI analyzes your content and suggests improvements to maximize engagement.",
  },
  {
    icon: Workflow,
    title: "Open-Source n8n",
    description:
      "Build unlimited automation workflows with n8n. Self-host for complete control or use our managed infrastructure.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Your data stays yours. No third-party selling. Self-hosting available. Full GDPR compliance built-in.",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Generate viral captions, hashtags, and content ideas powered by advanced AI. Create engaging posts in seconds.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Schedule posts at optimal times across Instagram and TikTok. Automate your posting calendar with intelligent timing.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track engagement, reach, and performance metrics. Make data-driven decisions to grow your audience.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="features">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to help you grow your social media presence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
