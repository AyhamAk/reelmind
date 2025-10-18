import { Navbar } from "@/components/landing/navbar"
import { PricingSection } from "@/components/landing/pricing-section"
import { Footer } from "@/components/landing/footer"
import { BackToTop } from "@/components/ui/back-to-top"

export const metadata = {
  title: "Pricing - ReelMind",
  description: "Choose the perfect plan for your social media automation needs. Start free, upgrade anytime.",
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PricingSection />
      <Footer />
      <BackToTop />
    </div>
  )
}
