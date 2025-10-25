"use client"

import { Button } from "@/components/ui/button"
import { useSurvey } from "./survey-context"
import { useRouter } from "next/navigation"

export function WelcomeScreen() {
  const { nextStep } = useSurvey()
  const router = useRouter()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-4xl font-semibold text-foreground">
        Let&apos;s tailor your automation experience
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        Answer 5 quick questions so we can suggest the best tools for you.
      </p>

      <div className="flex flex-col gap-3 pt-4">
        <Button
          size="lg"
          onClick={nextStep}
          className="min-w-[200px] bg-foreground text-background hover:bg-foreground/90"
        >
          Start Survey
        </Button>
        <Button
          size="lg"
          variant="ghost"
          onClick={() => router.push("/signup")}
          className="min-w-[200px]"
        >
          Skip
        </Button>
      </div>
    </div>
  )
}
