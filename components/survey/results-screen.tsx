"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useSurvey } from "./survey-context"
import { getRecommendations, calculateBundlePrice } from "@/lib/survey-data"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export function ResultsScreen() {
  const { answers } = useSurvey()
  const router = useRouter()
  const { data: session } = useSession()
  const recommendations = getRecommendations(answers)

  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(recommendations.map((s) => s.id))
  )
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // Save survey responses when component mounts
  useEffect(() => {
    const saveSurveyResponse = async () => {
      if (isSaved) return // Don't save again if already saved

      try {
        setIsSaving(true)
        console.log("Saving survey response with answers:", answers)
        console.log("Selected services:", Array.from(selectedServices))

        const response = await fetch("/api/survey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...answers,
            selectedServices: Array.from(selectedServices),
          }),
        })

        const data = await response.json()
        console.log("Survey save response:", data)

        if (data.success) {
          setIsSaved(true)
          console.log("Survey saved successfully with ID:", data.surveyResponseId)
          // Store the survey response ID for later use
          if (typeof window !== "undefined") {
            localStorage.setItem("surveyResponseId", data.surveyResponseId)
          }
        } else {
          console.error("Survey save failed:", data.error)
        }
      } catch (error) {
        console.error("Error saving survey response:", error)
        // Don't show error to user, fail silently
      } finally {
        setIsSaving(false)
      }
    }

    saveSurveyResponse()
  }, []) // Run only once on mount

  // Update survey response when services change
  useEffect(() => {
    if (!isSaved) return // Don't update until initial save is complete

    const updateSurveyResponse = async () => {
      try {
        await fetch("/api/survey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...answers,
            selectedServices: Array.from(selectedServices),
          }),
        })
      } catch (error) {
        console.error("Error updating survey response:", error)
      }
    }

    updateSurveyResponse()
  }, [selectedServices, isSaved])

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const totalPrice = Array.from(selectedServices).reduce((sum, serviceId) => {
    const service = recommendations.find((s) => s.id === serviceId)
    return sum + (service?.price || 0)
  }, 0)

  const bundlePrice = calculateBundlePrice(Array.from(selectedServices))
  const discount = selectedServices.size > 1 ? 30 : 0

  const handleApplyBundle = () => {
    // Store selected services in session storage or pass to signup
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "selectedServices",
        JSON.stringify(Array.from(selectedServices))
      )
    }

    // If user is logged in, redirect to dashboard; otherwise to signup
    if (session?.user) {
      router.push("/dashboard/manager")
    } else {
      router.push("/signup")
    }
  }

  const handleCustomize = () => {
    router.push("/pricing")
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Let&apos;s tailor your automation experience
        </h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Here&apos;s your recommended setup
        </h2>
        <p className="text-muted-foreground">
          Based on your answers, we&apos;ve prepared a bundle to help you grow
          efficiently
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {recommendations.map((service) => (
          <div
            key={service.id}
            className="space-y-4 rounded-lg border bg-card p-6"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{service.name}</h3>
                <div className="text-2xl font-bold">
                  ${service.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    per month
                  </span>
                </div>
              </div>
              <Switch
                checked={selectedServices.has(service.id)}
                onCheckedChange={() => toggleService(service.id)}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>

            <ul className="space-y-2 text-sm">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bundle Price Section */}
      {selectedServices.size > 0 && (
        <div className="mx-auto max-w-md space-y-4 rounded-lg border bg-muted/50 p-6 text-center">
          <h3 className="text-lg font-semibold">Bundle Price</h3>
          <div className="space-y-1">
            <div className="text-4xl font-bold">
              ${bundlePrice}
              {discount > 0 && (
                <span className="ml-2 text-xl text-muted-foreground line-through">
                  ${totalPrice}
                </span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-sm text-green-600">Save {discount}%</p>
            )}
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCustomize}
              className="flex-1"
            >
              Customize Services
            </Button>
            <Button
              onClick={handleApplyBundle}
              className="flex-1 bg-foreground text-background hover:bg-foreground/90"
            >
              {session?.user ? "Go to Dashboard" : "Apply Bundle"}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
