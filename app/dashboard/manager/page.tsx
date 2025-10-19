import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Calendar, BarChart3, Clock, Plus, Instagram as InstagramIcon, Video, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function ManagerPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold">
              ReelMind
            </Link>
            <span className="text-muted-foreground">/</span>
            <h1 className="text-lg font-medium">Social Media Manager</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{session.user.name}</span>
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scheduled Posts</p>
                <p className="text-2xl font-semibold">12</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-semibold">45.2K</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Publishing Today</p>
                <p className="text-2xl font-semibold">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Schedule Post
          </Button>
          <Button variant="outline" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            View Analytics
          </Button>
        </div>

        {/* Connected Accounts */}
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Connected Accounts</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2">
                  <InstagramIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">@{session.user.name?.toLowerCase().replace(/\s/g, '')}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-2">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">TikTok</p>
                  <p className="text-sm text-muted-foreground">@{session.user.name?.toLowerCase().replace(/\s/g, '')}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
          </div>
        </div>

        {/* Upcoming Posts */}
        <div className="mt-8 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Upcoming Posts</h2>
          <div className="text-center text-muted-foreground py-12">
            <Calendar className="mx-auto mb-3 h-12 w-12 opacity-50" />
            <p>No scheduled posts yet</p>
            <Button className="mt-4 gap-2">
              <Plus className="h-4 w-4" />
              Create Your First Post
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
