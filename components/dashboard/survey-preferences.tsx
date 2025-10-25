"use client"

import { useEffect, useState } from "react"
import { ClipboardList, Edit2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SurveyResponse {
  id: string
  platform?: string
  goal?: string
  postingFrequency?: string
  userType?: string
  automationLevel?: string
  selectedServices?: string
  createdAt: string
  updatedAt: string
}

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  both: "Both",
}

const goalLabels: Record<string, string> = {
  grow: "Grow followers and reach",
  consistency: "Post consistently",
  engagement: "Improve engagement",
  automate: "Save time with automation",
}

const postingFrequencyLabels: Record<string, string> = {
  daily: "Daily or almost daily",
  weekly: "2-3 times per week",
  occasional: "Occasionally",
}

const userTypeLabels: Record<string, string> = {
  creator: "Content creator / influencer",
  business: "Small business / brand",
  agency: "Marketing agency / team",
  exploring: "Just exploring",
}

const automationLevelLabels: Record<string, string> = {
  helpers: "Just a few helpers",
  mostly: "Mostly automated",
  full: "Full automation",
}

export function SurveyPreferences() {
  const [surveyResponse, setSurveyResponse] = useState<SurveyResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSurveyResponse = async () => {
      try {
        console.log("Fetching survey responses...")
        const response = await fetch("/api/survey")
        const data = await response.json()
        console.log("Survey fetch response:", data)

        if (data.success && data.surveyResponses?.length > 0) {
          // Get the most recent survey response
          console.log("Found survey responses:", data.surveyResponses.length)
          setSurveyResponse(data.surveyResponses[0])
        } else {
          console.log("No survey responses found")
        }
      } catch (error) {
        console.error("Error fetching survey response:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSurveyResponse()
  }, [])

  if (isLoading) {
    return (
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    )
  }

  if (!surveyResponse) {
    return (
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Your Preferences</h2>
          </div>
        </div>
        <div className="text-center py-12">
          <ClipboardList className="mx-auto mb-3 h-12 w-12 opacity-50 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">
            You haven&apos;t completed the survey yet
          </p>
          <Button asChild>
            <Link href="/survey">Take Survey</Link>
          </Button>
        </div>
      </div>
    )
  }

  const selectedServices = surveyResponse.selectedServices
    ? JSON.parse(surveyResponse.selectedServices)
    : []

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Your Preferences</h2>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/survey">
            <Edit2 className="h-4 w-4 mr-2" />
            Retake Survey
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {surveyResponse.platform && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Platform</p>
            <p className="font-medium">
              {platformLabels[surveyResponse.platform] || surveyResponse.platform}
            </p>
          </div>
        )}

        {surveyResponse.goal && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Main Goal</p>
            <p className="font-medium">
              {goalLabels[surveyResponse.goal] || surveyResponse.goal}
            </p>
          </div>
        )}

        {surveyResponse.postingFrequency && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Posting Frequency</p>
            <p className="font-medium">
              {postingFrequencyLabels[surveyResponse.postingFrequency] ||
                surveyResponse.postingFrequency}
            </p>
          </div>
        )}

        {surveyResponse.userType && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">User Type</p>
            <p className="font-medium">
              {userTypeLabels[surveyResponse.userType] || surveyResponse.userType}
            </p>
          </div>
        )}

        {surveyResponse.automationLevel && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Automation Level</p>
            <p className="font-medium">
              {automationLevelLabels[surveyResponse.automationLevel] ||
                surveyResponse.automationLevel}
            </p>
          </div>
        )}

        {selectedServices.length > 0 && (
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Selected Services</p>
            <p className="font-medium">{selectedServices.length} service(s)</p>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        Last updated: {new Date(surveyResponse.updatedAt).toLocaleDateString()}
      </div>
    </div>
  )
}
