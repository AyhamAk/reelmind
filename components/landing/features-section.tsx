import { Zap, Shield, Palette, LineChart, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with performance in mind. Experience blazing-fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with end-to-end encryption. Your data is always protected.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description:
      "Carefully crafted UI components that look great on any device. Dark mode included.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Track your growth with detailed insights and actionable metrics in real-time.",
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
      "Leverage cutting-edge AI to automate tasks and boost your productivity.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you build, launch, and grow your
            product with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
