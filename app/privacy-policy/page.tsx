import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - ReelMind",
  description: "Privacy Policy for ReelMind - Social Media Management Platform",
}

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to ReelMind. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and use our services, and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <p className="text-muted-foreground">We collect and process the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Account Information:</strong> Name, email address, and password when you create an account
                </li>
                <li>
                  <strong>Profile Information:</strong> Profile picture, bio, and preferences you choose to provide
                </li>
                <li>
                  <strong>Social Media Account Data:</strong> When you connect your TikTok or Instagram accounts,
                  we collect information necessary to provide our services, including access tokens and profile information
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website and services, including
                  posts you schedule, analytics data, and feature usage
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our social media management services</li>
                <li>Schedule and publish content to your connected social media accounts</li>
                <li>Provide analytics and insights about your social media performance</li>
                <li>Send you important updates about our services and your account</li>
                <li>Improve our services and develop new features</li>
                <li>Ensure the security of our platform and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
              <p className="text-muted-foreground">
                ReelMind integrates with third-party social media platforms including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>TikTok:</strong> We use TikTok's API to enable you to schedule and publish content to your
                  TikTok account. Your use of TikTok through our platform is subject to TikTok's Privacy Policy and Terms of Service.
                </li>
                <li>
                  <strong>Instagram:</strong> We use Instagram's API to enable you to manage your Instagram content.
                  Your use of Instagram through our platform is subject to Instagram's Privacy Policy and Terms of Service.
                </li>
                <li>
                  <strong>Google:</strong> We use Google OAuth for authentication. Your use is subject to Google's Privacy Policy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Social Media Platforms:</strong> When you authorize us to post content on your behalf
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party service providers who assist us in operating our platform
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized or unlawful processing, accidental loss, destruction, or damage. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure password hashing using industry-standard algorithms</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Export:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                <li><strong>Object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                To exercise these rights, please contact us at privacy@reelmind.com or through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal data only for as long as necessary to provide our services and comply with
                legal obligations. When you delete your account, we will delete or anonymize your personal data within
                30 days, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to improve your experience on our platform.
                You can control cookies through your browser settings. However, disabling cookies may affect
                the functionality of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect
                personal information from children under 13. If you believe we have collected information from
                a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">11. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any significant changes
                by posting the new privacy policy on this page and updating the "Last updated" date. We encourage
                you to review this privacy policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">13. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 rounded-lg border bg-muted/50 p-4">
                <p className="font-medium">ReelMind</p>
                <p className="text-muted-foreground">Email: privacy@reelmind.com</p>
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
