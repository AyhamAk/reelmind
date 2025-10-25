"use client"

import { SurveyProvider, useSurvey } from "@/components/survey/survey-context"
import { WelcomeScreen } from "@/components/survey/welcome-screen"
import { QuestionScreen } from "@/components/survey/question-screen"
import { ResultsScreen } from "@/components/survey/results-screen"
import { surveyQuestions, SurveyAnswers } from "@/lib/survey-data"

function SurveyContent() {
  const { currentStep } = useSurvey()

  // Step 0: Welcome screen
  if (currentStep === 0) {
    return <WelcomeScreen />
  }

  // Steps 1-5: Questions
  if (currentStep >= 1 && currentStep <= surveyQuestions.length) {
    const questionIndex = currentStep - 1
    const question = surveyQuestions[questionIndex]

    const answerKeyMap: Record<number, keyof SurveyAnswers> = {
      0: "platform",
      1: "goal",
      2: "postingFrequency",
      3: "userType",
      4: "automationLevel",
    }

    return (
      <QuestionScreen
        question={question}
        answerKey={answerKeyMap[questionIndex]}
        totalQuestions={surveyQuestions.length}
        isLastQuestion={currentStep === surveyQuestions.length}
      />
    )
  }

  // Step 6: Results
  return <ResultsScreen />
}

export default function SurveyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <SurveyProvider>
          <SurveyContent />
        </SurveyProvider>
      </div>
    </div>
  )
}
