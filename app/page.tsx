import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/auth";
import { LogoutButton } from "@/components/logout-button";
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ProductsSection } from "@/components/landing/products-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default async function Home() {
  await headers(); // Ensure headers are ready
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Welcome!</h2>
          <p className="text-gray-600">{session.user.name || 'User'}</p>
          <p className="text-sm text-gray-500">{session.user.email}</p>
        </div>
        <LogoutButton />
      </div>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
