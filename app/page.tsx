import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ProductsSection } from "@/components/landing/products-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { WorkflowMarketplaceSection } from "@/components/landing/workflow-marketplace-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <HowItWorksSection />
      <WorkflowMarketplaceSection />
      <PricingSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </div>
  )
}
