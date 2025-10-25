"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { useSurvey } from "./survey-context"
import { SurveyQuestion, SurveyAnswers } from "@/lib/survey-data"

interface QuestionScreenProps {
  question: SurveyQuestion
  answerKey: keyof SurveyAnswers
  totalQuestions: number
  isLastQuestion: boolean
}

export function QuestionScreen({
  question,
  answerKey,
  totalQuestions,
  isLastQuestion,
}: QuestionScreenProps) {
  const { currentStep, answers, setAnswer, nextStep, previousStep } = useSurvey()
  const [selectedOption, setSelectedOption] = useState<string>(
    answers[answerKey] || ""
  )

  const handleNext = () => {
    if (selectedOption) {
      setAnswer(answerKey, selectedOption)
      nextStep()
    }
  }

  const handleSkip = () => {
    // Don't allow skipping the last question - they must make a selection
    if (isLastQuestion && !selectedOption) {
      return
    }
    nextStep()
  }

  const progress = ((currentStep) / (totalQuestions + 1)) * 100

  return (
    <div className="mx-auto max-w-2xl space-y-8 py-12">
      {/* Header with progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={previousStep}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-foreground transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            Let&apos;s tailor your automation experience
          </h1>
          <p className="text-sm text-muted-foreground">
            Answer 5 quick questions so we can suggest the best tools for you.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-lg font-medium text-foreground">
            QUESTION {question.id}: {question.question}
          </h2>

          <RadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-3"
          >
            {question.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-left font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 pt-6">
          {!isLastQuestion && (
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="min-w-[100px]"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="min-w-[100px] bg-foreground text-background hover:bg-foreground/90"
          >
            {isLastQuestion ? "Finish Survey" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}
