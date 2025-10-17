import { Zap, Shield, Palette, LineChart, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for performance. Experience fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security. Your data is always protected.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description:
      "Carefully crafted UI that looks great on any device. Dark mode included.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Track your growth with detailed insights and actionable metrics.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly. Invite your team and collaborate in real-time.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Leverage AI to automate tasks and boost your productivity.",
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
