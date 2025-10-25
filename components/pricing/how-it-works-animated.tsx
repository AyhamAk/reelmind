"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Wand2, Eye, Rocket } from "lucide-react"

const steps = [
  {
    id: 1,
    icon: Sparkles,
    title: "AI Analyzes",
    subtitle: "Your Content",
    description: "Studies posts, audience, and engagement patterns",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    delay: 0,
  },
  {
    id: 2,
    icon: Wand2,
    title: "Smart Generation",
    subtitle: "Automated",
    description: "Creates captions, finds best times, designs thumbnails",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    delay: 200,
  },
  {
    id: 3,
    icon: Eye,
    title: "You Review",
    subtitle: "Stay in Control",
    description: "Edit, customize, and approve everything",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    delay: 400,
  },
  {
    id: 4,
    icon: Rocket,
    title: "Auto Post",
    subtitle: "& Improve",
    description: "Schedule posts and track performance",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    delay: 600,
  },
]

export function HowItWorksAnimated() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative mx-auto mb-24 max-w-6xl">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-purple-500" />
          How It Works
        </div>
        <h3 className="mb-3 text-3xl font-bold md:text-4xl">
          Automated where it matters,
          <br />
          <span className="text-muted-foreground">customizable where you need it</span>
        </h3>
      </div>

      {/* Steps Container */}
      <div className="relative">
        {/* Dotted Connection Lines - Desktop Only */}
        <div className="absolute left-0 right-0 top-24 hidden h-0.5 lg:block">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="12.5%"
              y1="0"
              x2="37.5%"
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className={`text-muted-foreground/30 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDashoffset: isVisible ? 0 : 100,
                transition: "stroke-dashoffset 1s ease-out 0.4s, opacity 1s ease-out 0.4s",
              }}
            />
            <line
              x1="37.5%"
              y1="0"
              x2="62.5%"
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className={`text-muted-foreground/30 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDashoffset: isVisible ? 0 : 100,
                transition: "stroke-dashoffset 1s ease-out 0.6s, opacity 1s ease-out 0.6s",
              }}
            />
            <line
              x1="62.5%"
              y1="0"
              x2="87.5%"
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className={`text-muted-foreground/30 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDashoffset: isVisible ? 0 : 100,
                transition: "stroke-dashoffset 1s ease-out 0.8s, opacity 1s ease-out 0.8s",
              }}
            />
          </svg>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className={`group relative transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${step.delay}ms`,
                }}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-muted bg-card p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`${step.color} flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="mb-1 text-lg font-bold">{step.title}</h4>
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                      {step.subtitle}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Automation Badge */}
                  <div className="mt-4 flex justify-center">
                    {step.id === 3 ? (
                      <div className="inline-flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                        <span>✋</span> You Control
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-400">
                        <span>🤖</span> Automated
                      </div>
                    )}
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background shadow-lg">
                  {step.id}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          💡 <strong className="text-foreground">Smart automation:</strong> We handle the
          repetitive tasks, you focus on creativity
        </p>
      </div>
    </div>
  )
}
