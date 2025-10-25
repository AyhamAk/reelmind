"use client"

import { useEffect, useState } from "react"
import { Upload, Brain, Eye, Rocket, Sparkles, CheckCircle2, Zap, Image, Calendar, Share2 } from "lucide-react"

export function WorkflowSplitLayout() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inView) {
            setInView(true);
            // Animate steps sequentially
            [0, 1, 2, 3, 4, 5].forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, step])
              }, index * 150) // 150ms delay between each step
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("how-it-works")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [inView])
  const features = [
    {
      icon: Share2,
      title: "Connect Your Account",
      description: "Link your Instagram or TikTok account. Quick setup with secure authentication to get you started in seconds.",
      color: "from-pink-500 to-rose-500",
      mockup: (
        <div className="space-y-3">
          <div className="rounded-lg border-2 border-pink-200 bg-pink-50/50 p-3 dark:border-pink-800 dark:bg-pink-950/30">
            <div className="mb-3 text-xs font-medium text-pink-600 dark:text-pink-400">Select Platform</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg border-2 border-pink-500 bg-white p-2 dark:bg-gray-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-xs font-medium">Instagram</div>
                <div className="ml-auto h-4 w-4 rounded-full border-2 border-pink-500 bg-pink-500" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div className="text-xs font-medium text-gray-400">TikTok</div>
                <div className="ml-auto h-4 w-4 rounded-full border-2 border-gray-300 dark:border-gray-600" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Upload,
      title: "Upload Your Content",
      description: "Drop your raw videos, images, or ideas. We handle multiple formats and make it easy to get started.",
      color: "from-purple-500 to-pink-500",
      mockup: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg bg-purple-500/10 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Upload className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-20 rounded bg-purple-300 dark:bg-purple-700" />
              <div className="mt-1 h-1.5 w-16 rounded bg-purple-200 dark:bg-purple-800" />
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border-2 border-dashed border-purple-300 bg-purple-50/50 p-4 dark:border-purple-700 dark:bg-purple-950/30">
            <div className="text-xs text-purple-600 dark:text-purple-400">Drag & drop files here</div>
          </div>
        </div>
      ),
    },
    {
      icon: Brain,
      title: "AI Analyzes Your Content",
      description: "Our AI processes your content, generates captions, suggests optimal posting times, and creates thumbnails.",
      color: "from-blue-500 to-cyan-500",
      mockup: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 p-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <div className="text-xs text-blue-600 dark:text-blue-400">Analyzing...</div>
          </div>
          <div className="space-y-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <div className="h-1.5 w-24 rounded bg-blue-300 dark:bg-blue-700" />
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <div className="h-1.5 w-20 rounded bg-blue-300 dark:bg-blue-700" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <div className="h-1.5 w-16 rounded bg-blue-200 dark:bg-blue-800" />
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Zap,
      title: "Generated Content Ready",
      description: "Captions, thumbnails, and scheduling suggestions are ready. Everything optimized for maximum engagement.",
      color: "from-indigo-500 to-purple-500",
      mockup: (
        <div className="space-y-2">
          <div className="rounded-lg bg-indigo-500/10 p-3">
            <div className="mb-2 flex items-center gap-2">
              <Image className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Thumbnail</div>
            </div>
            <div className="h-20 rounded-md bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900" />
          </div>
          <div className="rounded-lg bg-indigo-50 p-2 dark:bg-indigo-950/30">
            <div className="mb-1 h-2 w-full rounded bg-indigo-300 dark:bg-indigo-700" />
            <div className="h-2 w-3/4 rounded bg-indigo-200 dark:bg-indigo-800" />
          </div>
        </div>
      ),
    },
    {
      icon: Eye,
      title: "Review & Customize",
      description: "Preview everything, make edits if needed. You have full control before anything goes live.",
      color: "from-green-500 to-emerald-500",
      mockup: (
        <div className="space-y-2">
          <div className="rounded-lg border-2 border-green-300 bg-green-50/50 p-3 dark:border-green-700 dark:bg-green-950/30">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-green-300 dark:bg-green-700" />
              <div className="flex gap-1">
                <div className="h-6 w-6 rounded bg-green-200 dark:bg-green-800" />
                <div className="h-6 w-6 rounded bg-green-200 dark:bg-green-800" />
              </div>
            </div>
            <div className="h-1.5 w-full rounded bg-green-200 dark:bg-green-800" />
            <div className="mt-1 h-1.5 w-5/6 rounded bg-green-200 dark:bg-green-800" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 rounded bg-green-500 py-1.5 text-center text-xs font-medium text-white">
              Approve
            </div>
            <div className="flex-1 rounded border border-green-500 py-1.5 text-center text-xs font-medium text-green-600 dark:text-green-400">
              Edit
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Rocket,
      title: "Auto-Publish at Best Time",
      description: "Content goes live automatically at the optimal time for maximum reach and engagement.",
      color: "from-orange-500 to-red-500",
      mockup: (
        <div className="space-y-2">
          <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-3 text-white">
            <div className="mb-2 flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <div className="text-xs font-medium">Publishing...</div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <div className="text-xs">Today at 6:30 PM</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <div className="text-xs font-medium text-green-600 dark:text-green-400">Published Successfully!</div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="mx-auto mb-24 max-w-7xl px-4">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400">
          <Sparkles className="h-4 w-4" />
          How It Works
        </div>
        <h3 className="mb-3 text-3xl font-bold md:text-4xl">
          From setup to publish in 6 simple steps
        </h3>
        <p className="text-muted-foreground">
          AI handles the heavy lifting — you stay in control
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const isVisible = visibleSteps.includes(index)

          return (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-500 hover:border-purple-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Step Number Badge - Animated */}
              <div
                className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold transition-all duration-500 ${
                  isVisible
                    ? "scale-100 bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                    : "scale-0 bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                }`}
                style={{
                  transitionDelay: `${index * 150 + 100}ms`,
                }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h4 className="mb-2 text-lg font-bold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>

              {/* Visual Mockup */}
              <div className="mt-4">{feature.mockup}</div>

              {/* Hover Gradient Effect */}
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
