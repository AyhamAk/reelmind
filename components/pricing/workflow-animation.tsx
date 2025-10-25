"use client"

import { useEffect, useState } from "react"
import { Instagram, Sparkles, Brain, MessageSquare, Clock, Image as ImageIcon, Send, TrendingUp } from "lucide-react"

export function WorkflowAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 3000) // Change step every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto mb-24 max-w-6xl">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400">
          <Sparkles className="h-4 w-4" />
          How It Works
        </div>
        <h3 className="mb-3 text-3xl font-bold md:text-4xl">
          Watch your content flow through our AI pipeline
        </h3>
        <p className="text-muted-foreground">
          Automated content creation, human-approved quality
        </p>
      </div>

      {/* Animated Workflow */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-muted bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 p-8 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20 md:p-12">
        {/* Workflow Steps */}
        <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Step 1: Upload Content */}
          <div className="relative flex-1">
            <div
              className={`transform transition-all duration-700 ${
                step >= 0 ? "scale-100 opacity-100" : "scale-90 opacity-40"
              }`}
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl">
                <Instagram className="h-16 w-16 text-white" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold">Your Content</h4>
                <p className="text-xs text-muted-foreground">Upload or connect</p>
              </div>
            </div>

            {/* Animated particles leaving */}
            {step >= 1 && (
              <>
                <div className="absolute right-0 top-12 h-2 w-2 animate-ping rounded-full bg-purple-500" />
                <div
                  className="absolute right-0 top-12 h-2 w-2 rounded-full bg-purple-500"
                  style={{
                    animation: "moveRight 2s ease-in-out infinite",
                  }}
                />
              </>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
            <div className="relative h-1 w-24 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ${
                  step >= 1 ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Step 2: AI Analysis */}
          <div className="group relative flex-1">
            <div
              className={`transform transition-all duration-700 ${
                step >= 1 ? "scale-100 opacity-100" : "scale-90 opacity-40"
              }`}
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl">
                <Brain className="h-16 w-16 text-white" />
                {step >= 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 animate-ping rounded-full bg-blue-400/30" />
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold">AI Analysis</h4>
                <p className="text-xs text-muted-foreground">Analyzing patterns</p>
              </div>
            </div>

            {/* Tooltip on Hover - Desktop Only */}
            <div className="pointer-events-none absolute -bottom-16 left-1/2 z-10 hidden -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
              <div className="whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background shadow-xl">
                Generating captions • Finding best time • Creating thumbnails
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground" />
              </div>
            </div>

            {/* Floating AI elements */}
            {step >= 1 && (
              <div className="absolute inset-0 pointer-events-none">
                <MessageSquare
                  className="absolute left-4 top-4 h-6 w-6 text-blue-500 opacity-60"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                />
                <Clock
                  className="absolute right-4 top-8 h-5 w-5 text-cyan-500 opacity-60"
                  style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
                />
                <ImageIcon
                  className="absolute left-8 bottom-4 h-5 w-5 text-blue-400 opacity-60"
                  style={{ animation: "float 3s ease-in-out infinite 1s" }}
                />
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
            <div className="relative h-1 w-24 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000 ${
                  step >= 2 ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Step 3: You Review */}
          <div className="relative flex-1">
            <div
              className={`transform transition-all duration-700 ${
                step >= 2 ? "scale-100 opacity-100" : "scale-90 opacity-40"
              }`}
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl">
                <div className="text-6xl">✋</div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold">You Approve</h4>
                <p className="text-xs text-muted-foreground">Edit & customize</p>
              </div>
            </div>

            {/* Checkmark animation */}
            {step >= 3 && (
              <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 animate-bounce">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden md:block">
            <div className="relative h-1 w-24 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-1000 ${
                  step >= 3 ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Step 4: Auto Post */}
          <div className="relative flex-1">
            <div
              className={`transform transition-all duration-700 ${
                step >= 3 ? "scale-100 opacity-100" : "scale-90 opacity-40"
              }`}
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl">
                <Send className="h-16 w-16 text-white" />
                {step >= 4 && (
                  <>
                    <div className="absolute inset-0 animate-ping rounded-2xl bg-orange-400/30" />
                    <TrendingUp className="absolute -right-2 -top-2 h-8 w-8 text-orange-500 animate-bounce" />
                  </>
                )}
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold">Published!</h4>
                <p className="text-xs text-muted-foreground">Optimal timing</p>
              </div>
            </div>

            {/* Success particles */}
            {step >= 4 && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute right-0 top-8 h-3 w-3 rounded-full bg-orange-400"
                  style={{ animation: "explode1 1.5s ease-out infinite" }}
                />
                <div
                  className="absolute right-4 top-4 h-2 w-2 rounded-full bg-red-400"
                  style={{ animation: "explode2 1.5s ease-out infinite" }}
                />
                <div
                  className="absolute right-8 top-12 h-2 w-2 rounded-full bg-orange-500"
                  style={{ animation: "explode3 1.5s ease-out infinite" }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-12 rounded-full transition-all duration-300 ${
                step >= i ? "bg-gradient-to-r from-purple-500 to-orange-500" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Status Text */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            {step === 0 && "📤 Upload your content..."}
            {step === 1 && "🧠 AI analyzing your post..."}
            {step === 2 && "✋ You review and approve..."}
            {step === 3 && "✅ Content approved!"}
            {step === 4 && "🚀 Posted at optimal time!"}
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(120px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes explode1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(30px, -30px) scale(0);
            opacity: 0;
          }
        }

        @keyframes explode2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-20px, -40px) scale(0);
            opacity: 0;
          }
        }

        @keyframes explode3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(10px, -35px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
