"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { SurveyAnswers } from "@/lib/survey-data"

interface SurveyContextType {
  currentStep: number
  answers: SurveyAnswers
  setAnswer: (key: keyof SurveyAnswers, value: string) => void
  nextStep: () => void
  previousStep: () => void
  resetSurvey: () => void
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined)

export function SurveyProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<SurveyAnswers>({})

  const setAnswer = (key: keyof SurveyAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }

  const resetSurvey = () => {
    setCurrentStep(0)
    setAnswers({})
  }

  return (
    <SurveyContext.Provider
      value={{
        currentStep,
        answers,
        setAnswer,
        nextStep,
        previousStep,
        resetSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
}

export function useSurvey() {
  const context = useContext(SurveyContext)
  if (context === undefined) {
    throw new Error("useSurvey must be used within a SurveyProvider")
  }
  return context
}
