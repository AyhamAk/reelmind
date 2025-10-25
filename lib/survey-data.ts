export interface SurveyQuestion {
  id: number
  question: string
  options: {
    value: string
    label: string
  }[]
}

export interface SurveyAnswers {
  platform?: string
  goal?: string
  postingFrequency?: string
  userType?: string
  automationLevel?: string
}

export interface ServiceRecommendation {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: "Which platforms do you use most?",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "tiktok", label: "Tiktok" },
      { value: "both", label: "Both" },
    ],
  },
  {
    id: 2,
    question: "What's your main goal right now?",
    options: [
      { value: "grow", label: "Grow my followers and reach more people" },
      { value: "consistency", label: "Post consistently without stress" },
      { value: "engagement", label: "Improve captions, visuals, and engagement" },
      { value: "automate", label: "Save time and automate as much as possible" },
    ],
  },
  {
    id: 3,
    question: "How often do you usually post?",
    options: [
      { value: "daily", label: "Daily or almost daily" },
      { value: "weekly", label: "2-3 times per week" },
      { value: "occasional", label: "Occasionally (once a week or less)" },
    ],
  },
  {
    id: 4,
    question: "What describes you best?",
    options: [
      { value: "creator", label: "Content creator / influencer" },
      { value: "business", label: "Small business / brand" },
      { value: "agency", label: "Marketing agency / team" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
  {
    id: 5,
    question: "How much do you want to automate?",
    options: [
      { value: "helpers", label: "Just a few helpers (like captions & hashtags)" },
      { value: "mostly", label: "I want it mostly automated but still editable" },
      { value: "full", label: "I want full hands-off automation" },
    ],
  },
]

export const services: ServiceRecommendation[] = [
  {
    id: "auto-caption",
    name: "Auto Caption Generator",
    price: 8,
    description: "AI writes captions tailored to tone (funny, professional, trendy)",
    features: [
      "Choose tone + language + length",
      "Preview caption before posting",
    ],
  },
  {
    id: "best-time",
    name: "Best Time to Post Detector",
    price: 8,
    description: "AI analyzes engagement data to find your top 3 posting times.",
    features: [
      "Auto-adjust schedule or start late",
      "Based on your real audience activity",
    ],
  },
  {
    id: "auto-thumbnail",
    name: "Auto Thumbnail / Cover Creator",
    price: 12,
    description: "Generates on-brand cover images or video thumbnails.",
    features: [
      "Template style, color theme, upload logo",
      "Helps you feed consistent and aesthetic",
    ],
  },
]

export function getRecommendations(answers: SurveyAnswers): ServiceRecommendation[] {
  // Logic to determine which services to recommend based on answers
  // For now, return all services. You can customize this based on answers
  return services
}

export function calculateBundlePrice(selectedServices: string[]): number {
  const total = selectedServices.reduce((sum, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return sum + (service?.price || 0)
  }, 0)

  // Apply 30% discount for bundle
  return Math.round(total * 0.7)
}
