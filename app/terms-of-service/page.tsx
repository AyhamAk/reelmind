import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - ReelMind",
  description: "Terms of Service for ReelMind - Social Media Management Platform",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold">
            ReelMind
          </Link>
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-2 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using ReelMind ("the Service"), you agree to be bound by these Terms of Service
                ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Description of Service</h2>
              <p className="text-muted-foreground">
                ReelMind is a social media management platform that allows you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Schedule and publish content to TikTok and Instagram</li>
                <li>Manage multiple social media accounts from one dashboard</li>
                <li>Track analytics and performance metrics</li>
                <li>Collaborate on content creation and planning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. User Accounts</h2>
              <p className="text-muted-foreground">To use ReelMind, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Be at least 13 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Third-Party Platform Terms</h2>
              <p className="text-muted-foreground">
                When you connect your social media accounts to ReelMind, you agree to comply with the terms
                and policies of those platforms, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>TikTok Terms of Service and Community Guidelines</li>
                <li>Instagram/Meta Terms of Service and Community Guidelines</li>
                <li>Any other connected third-party platforms</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                You acknowledge that ReelMind is not responsible for and does not control these third-party
                platforms. Your use of such platforms is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Acceptable Use</h2>
              <p className="text-muted-foreground">You agree NOT to use ReelMind to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Post harmful, offensive, or inappropriate content</li>
                <li>Engage in spam, phishing, or fraudulent activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Distribute malware or viruses</li>
                <li>Harass, abuse, or harm others</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Content Ownership and License</h2>
              <p className="text-muted-foreground">
                <strong>Your Content:</strong> You retain all rights to the content you create and upload to ReelMind.
                By using our Service, you grant us a limited license to store, process, and display your content
                solely for the purpose of providing our services to you.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Our Content:</strong> ReelMind and its original content, features, and functionality are
                owned by ReelMind and are protected by international copyright, trademark, and other intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Content Responsibility</h2>
              <p className="text-muted-foreground">
                You are solely responsible for the content you post through ReelMind. We do not pre-screen content
                but reserve the right to remove or refuse to post any content that violates these Terms or is
                otherwise objectionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Subscription and Payment</h2>
              <p className="text-muted-foreground">
                Some features of ReelMind may require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Accept that subscriptions automatically renew unless canceled</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Fees are non-refundable except as required by law or as explicitly stated in our refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Service Modifications and Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Modify or discontinue the Service at any time with or without notice</li>
                <li>Suspend or terminate your account for violations of these Terms</li>
                <li>Remove or disable access to any content at our discretion</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                You may terminate your account at any time through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Disclaimers</h2>
              <p className="text-muted-foreground">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service is free of viruses or harmful components</li>
                <li>Results from using the Service will meet your expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">11. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, REELMIND SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or delays</li>
                <li>Unauthorized access to your account</li>
                <li>Actions of third-party platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless ReelMind and its affiliates from any claims, damages,
                losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Content you post through the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">13. Data Protection and Privacy</h2>
              <p className="text-muted-foreground">
                Your use of ReelMind is also governed by our Privacy Policy. Please review our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">14. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                in which ReelMind operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">15. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes arising from these Terms or your use of the Service shall first be resolved through
                good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration
                in accordance with the rules of the applicable arbitration authority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">16. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify you of significant changes
                by posting the new Terms on this page and updating the "Last updated" date. Your continued use
                of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">17. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
                limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain
                in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">18. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 rounded-lg border bg-muted/50 p-4">
                <p className="font-medium">ReelMind</p>
                <p className="text-muted-foreground">Email: legal@reelmind.com</p>
                <p className="text-muted-foreground">Email: support@reelmind.com</p>
              </div>
            </section>
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
