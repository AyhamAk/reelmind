"use client"

import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals getting started with Instagram automation",
    features: [
      "1 Instagram account (auto-posting)",
      "TikTok content generation",
      "10 scheduled IG posts/month",
      "Basic analytics (Instagram)",
      "Viral Score AI (50 checks/month)",
      "AI caption generator (50 credits)",
      "Community support",
    ],
    cta: "Get Started",
    ctaHrefLoggedOut: "/login",
    ctaHrefLoggedIn: "/dashboard/manager",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For creators who need Instagram automation + unlimited TikTok content",
    features: [
      "5 Instagram accounts (auto-posting)",
      "Unlimited TikTok content generation",
      "Unlimited scheduled IG posts",
      "Advanced IG analytics via Graph API",
      "Viral Score AI (unlimited)",
      "AI caption & hashtag generator",
      "n8n workflow integration",
      "Priority support",
      "Workflow marketplace access",
    ],
    cta: "Start Free Trial",
    ctaHrefLoggedOut: "/login",
    ctaHrefLoggedIn: "/dashboard/manager",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For agencies managing multiple clients with self-hosted n8n option",
    features: [
      "Unlimited Instagram accounts",
      "Unlimited TikTok content generation",
      "Self-hosted n8n option (full control)",
      "White-label dashboard",
      "Advanced Viral Score AI models",
      "Custom workflow development",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom API integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    ctaHrefLoggedOut: "/login",
    ctaHrefLoggedIn: "/dashboard/manager",
    popular: false,
  },
]

export function PricingSection() {
  const { data: session } = useSession()
  const isVisible = useScrollAnimation("pricing")

  return (
    <section className="border-t px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="pricing">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const ctaHref = session?.user ? plan.ctaHrefLoggedIn : plan.ctaHrefLoggedOut
            return (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-xl border bg-card p-8 transition-all duration-700 ${
                plan.popular
                  ? "border-foreground shadow-lg ring-2 ring-foreground"
                  : ""
              } ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="min-h-[3rem] text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">USD</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.period}</p>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`mb-8 w-full ${
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={ctaHref}>{plan.cta}</Link>
              </Button>

              {/* Features */}
              <div className="flex-1">
                <p className="mb-4 text-sm font-medium text-foreground">
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 shrink-0 text-foreground" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )
          })}
        </div>

        {/* FAQ / Additional Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-[450ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
            <br />
            Questions?{" "}
            <Link href="/login" className="font-medium text-foreground underline">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
